"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MaskRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Mask reveal — for headings. Wraps children in a clip-overflow band, slides
 * inner span from translateY(110%) → 0 with a long cinematic easing.
 */
export function MaskReveal({ children, delay = 0, className }: MaskRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={cn("sp-mask-line", visible && "sp-mask-in", className)}
      style={{ ["--sp-anim-delay" as string]: `${delay}ms` }}
    >
      <span>{children}</span>
    </span>
  );
}
