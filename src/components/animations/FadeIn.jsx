import React from 'react';
import { m } from 'framer-motion';

const directions = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
};

// Fades in once, the first time 15% of it scrolls into view. framer-motion
// owns the IntersectionObserver and lets it go after the first reveal.
export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => (
  <m.div
    className={className}
    initial={{ opacity: 0, ...directions[direction] }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
  >
    {children}
  </m.div>
);
