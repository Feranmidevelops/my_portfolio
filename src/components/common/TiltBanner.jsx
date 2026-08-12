import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { FiSmartphone } from "react-icons/fi";
import { useTilt } from "../../hooks/useTilt";

/**
 * The hero banner, tilted in 3D by the device gyroscope (or the pointer on
 * desktop). Several layers move at different spring rates, so the light and
 * colour inside the frame lag behind the tilt and settle with a slight
 * overshoot — reading like liquid sloshing in a container.
 */

// Softer spring + more mass = more lag and overshoot = more "fluid".
const SPRING_CARD = { stiffness: 140, damping: 20, mass: 0.7 };
const SPRING_IMAGE = { stiffness: 110, damping: 17, mass: 0.9 };
const SPRING_SHEEN = { stiffness: 70, damping: 13, mass: 1.1 };

// The cursor glow is drawn three times, each lagging further behind, which
// is what reads as a trail rather than a single dot.
const TRAIL = [
  { spring: { stiffness: 700, damping: 32, mass: 0.4 }, size: 76, alpha: 0.55, blur: 10 },
  { spring: { stiffness: 240, damping: 26, mass: 0.7 }, size: 104, alpha: 0.3, blur: 15 },
  { spring: { stiffness: 90, damping: 20, mass: 1.1 }, size: 134, alpha: 0.16, blur: 22 },
];

/** One lagging glow blob that chases the pointer. */
const GlowLayer = ({ px, py, config, visible }) => {
  const sx = useSpring(px, config.spring);
  const sy = useSpring(py, config.spring);
  return (
    <motion.div
      aria-hidden="true"
      className="absolute pointer-events-none rounded-full"
      style={{
        x: sx,
        y: sy,
        width: config.size,
        height: config.size,
        marginLeft: -config.size / 2,
        marginTop: -config.size / 2,
        background: `radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,${config.alpha}), rgba(255,255,255,${config.alpha * 0.35}) 45%, rgba(255,255,255,0) 72%)`,
        filter: `blur(${config.blur}px)`,
        mixBlendMode: "screen",
      }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.35 }}
    />
  );
};

export const TiltBanner = ({ src, alt, name = "FO" }) => {
  const [failed, setFailed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const boxRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { x, y, needsPermission, requestPermission } = useTilt();

  // Pointer position local to the banner, in px.
  const localX = useMotionValue(-500);
  const localY = useMotionValue(-500);

  const handlePointerMove = (e) => {
    const rect = boxRef.current?.getBoundingClientRect();
    if (!rect) return;
    localX.set(e.clientX - rect.left);
    localY.set(e.clientY - rect.top);
  };

  // Each layer reads the same input through its own spring.
  const cardX = useSpring(x, SPRING_CARD);
  const cardY = useSpring(y, SPRING_CARD);
  const imgX = useSpring(x, SPRING_IMAGE);
  const imgY = useSpring(y, SPRING_IMAGE);
  const sheenX = useSpring(x, SPRING_SHEEN);

  // 3D card tilt (inverted, so tilting right reveals the right edge).
  const rotateY = useTransform(cardX, [-1, 1], [12, -12]);
  const rotateX = useTransform(cardY, [-1, 1], [-8, 8]);

  // Foreground parallax.
  const imageShiftX = useTransform(imgX, [-1, 1], [14, -14]);
  const imageShiftY = useTransform(imgY, [-1, 1], [8, -8]);

  // The sheen lags the tilt, which is what still reads as fluid on a
  // pure-black field now that the coloured layers are gone.
  const sheenShift = useTransform(sheenX, [-1, 1], ["-38%", "38%"]);

  const monogram = (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-lg"
      style={{ background: "var(--contrast-panel)", color: "var(--contrast-text)" }}
    >
      {name}
    </div>
  );

  // Respect reduced-motion: render the plain banner, no sensors, no motion.
  if (reduceMotion) {
    return (
      <div
        className="rounded-2xl border overflow-hidden h-28 md:h-40 flex items-center justify-center"
        style={{ background: "#000", borderColor: "var(--border)" }}
      >
        {failed ? monogram : (
          <img src={src} alt={alt} className="w-full h-full object-contain" onError={() => setFailed(true)} />
        )}
      </div>
    );
  }

  return (
    <div style={{ perspective: 900 }}>
      <motion.div
        ref={boxRef}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={() => setHovering(false)}
        className="relative rounded-2xl border overflow-hidden h-28 md:h-40 flex items-center justify-center"
        style={{
          background: "#000",
          borderColor: "var(--border)",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {failed ? (
          monogram
        ) : (
          <>
            {/* ---- the banner artwork ---- */}
            <motion.img
              src={src}
              alt={alt}
              onError={() => setFailed(true)}
              className="relative w-full h-full object-contain"
              style={{ x: imageShiftX, y: imageShiftY, scale: 1.04, translateZ: 40 }}
              draggable={false}
            />

            {/* ---- specular sheen sweeping across, like light on a surface ---- */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                x: sheenShift,
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.14) 48%, rgba(255,255,255,0.03) 56%, transparent 70%)",
                mixBlendMode: "screen",
              }}
            />

            {/* ---- cursor glow trail (sits above the artwork plane) ---- */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ transform: "translateZ(60px)" }}
            >
              {/* widest/slowest first so the tight highlight paints on top */}
              {[...TRAIL].reverse().map((config, i) => (
                <GlowLayer key={i} px={localX} py={localY} config={config} visible={hovering} />
              ))}
            </div>
          </>
        )}

        {/* iOS needs a tap before it will report orientation at all. */}
        {needsPermission && (
          <button
            onClick={requestPermission}
            className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.14)", color: "#fff" }}
          >
            <FiSmartphone size={11} /> Enable tilt
          </button>
        )}
      </motion.div>
    </div>
  );
};
