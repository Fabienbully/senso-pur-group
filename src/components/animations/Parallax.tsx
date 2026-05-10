"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ParallaxProps {
  children: ReactNode;
  /** Strength of the parallax. 0.4 = scrolls 40% slower than normal. */
  speed?: number;
  className?: string;
}

/**
 * Scroll-linked parallax via requestAnimationFrame.
 * Disabled under reduced motion.
 */
export function Parallax({ children, speed = 0.4, className }: ParallaxProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const offset = (rect.top + rect.height / 2 - center) * (speed - 1) * -0.5;
      node.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [reduced, speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
