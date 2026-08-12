import { useEffect, useState, useCallback } from "react";
import { useMotionValue } from "framer-motion";

/**
 * Normalised tilt input, in the range roughly -1..1 on each axis.
 *
 *  - Phones/tablets: the device gyroscope (`deviceorientation`).
 *  - Desktop: pointer position, so the effect still reads on a laptop.
 *
 * Returns motion values (not React state) so high-frequency sensor events
 * never trigger a re-render.
 *
 * iOS 13+ gates `deviceorientation` behind a permission prompt that MUST be
 * requested from a real user gesture, so `needsPermission` is exposed and the
 * UI shows a tap target in that case.
 */

const MAX_TILT_DEG = 22; // tilt beyond this is clamped to the extremes
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export const useTilt = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [needsPermission, setNeedsPermission] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const iosGated =
    typeof window !== "undefined" &&
    typeof window.DeviceOrientationEvent !== "undefined" &&
    typeof window.DeviceOrientationEvent.requestPermission === "function";

  // --- gyroscope ---------------------------------------------------------
  const attachOrientation = useCallback(() => {
    // The device is rarely held perfectly flat, so the first reading becomes
    // the neutral origin — tilt is measured relative to how you're holding it.
    let origin = null;

    const onOrient = (e) => {
      if (e.gamma == null && e.beta == null) return;
      if (!origin) origin = { beta: e.beta ?? 0, gamma: e.gamma ?? 0 };

      const dGamma = (e.gamma ?? 0) - origin.gamma; // left / right
      const dBeta = (e.beta ?? 0) - origin.beta; // front / back

      x.set(clamp(dGamma / MAX_TILT_DEG, -1, 1));
      y.set(clamp(dBeta / MAX_TILT_DEG, -1, 1));
    };

    window.addEventListener("deviceorientation", onOrient, true);
    setEnabled(true);
    return () => window.removeEventListener("deviceorientation", onOrient, true);
  }, [x, y]);

  const requestPermission = useCallback(async () => {
    try {
      const res = await window.DeviceOrientationEvent.requestPermission();
      if (res === "granted") {
        setNeedsPermission(false);
        attachOrientation();
      }
    } catch {
      /* user declined, or not available — the pointer fallback still works */
    }
  }, [attachOrientation]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // iOS: wait for a tap before we can even listen.
    if (iosGated) {
      setNeedsPermission(true);
      return;
    }

    // Android / others: listen directly, but only keep it if data arrives.
    let cleanup = attachOrientation();
    return () => cleanup?.();
  }, [iosGated, attachOrientation]);

  // --- pointer fallback (desktop) ---------------------------------------
  useEffect(() => {
    if (prefersReducedMotion()) return;
    // Coarse pointers (touch) rely on the gyroscope instead.
    if (window.matchMedia?.("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      x.set(clamp((e.clientX / window.innerWidth - 0.5) * 2, -1, 1));
      y.set(clamp((e.clientY / window.innerHeight - 0.5) * 2, -1, 1));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    setEnabled(true);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return { x, y, needsPermission, requestPermission, enabled };
};
