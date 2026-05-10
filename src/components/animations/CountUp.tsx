"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { formatFR } from "@/lib/utils";

interface CountUpProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** When true, apply French thousands grouping ("50 000"). */
  group?: boolean;
}

/**
 * Counts from 0 → `to` with easeOutExpo when entering viewport.
 *
 * SSR / no-JS / SEO : the static HTML always renders the FINAL value (`to`),
 * so robots and reduced-motion users see the right number. The 0→to animation
 * only runs on real browser scroll for elements *not yet visible* on first
 * paint — that way we never flash from `to` to 0 to `to` again.
 */
export function CountUp({
  to,
  duration = 1800,
  prefix = "",
  suffix = "",
  group = true,
}: CountUpProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState<number>(to);
  const playedRef = useRef(false);

  useEffect(() => {
    if (reduced) return;
    const node = ref.current;
    if (!node) return;

    // Si l'élément est déjà visible au premier paint → pas d'animation
    // (sinon l'utilisateur verrait `to` puis 0 puis `to` qui flashe).
    const rect = node.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (alreadyVisible) {
      playedRef.current = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            setValue(0);
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(2, -10 * t);
              setValue(Math.round(to * eased));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [to, duration, reduced]);

  return (
    <span ref={ref}>
      {prefix}
      {group ? formatFR(value) : value}
      {suffix}
    </span>
  );
}
