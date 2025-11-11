

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (selector, animationProps) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.fromTo(
      element.querySelectorAll(selector),
      animationProps.from,
      {
        ...animationProps.to,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...animationProps.scrollTrigger
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selector, animationProps]);

  return elementRef;
};

// Usage example:
// const sectionRef = useScrollAnimation('.animate-item', {
//   from: { opacity: 0, y: 50 },
//   to: { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
// });
