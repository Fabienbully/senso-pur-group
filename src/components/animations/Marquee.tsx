"use client";

import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
}

/**
 * Infinite horizontal marquee. Children are duplicated so the loop is seamless.
 * Pause on hover by default. Speed via `duration` (seconds).
 */
export function Marquee({
  children,
  duration = 60,
  className,
  pauseOnHover = true,
  reverse = false,
}: MarqueeProps) {
  return (
    <div
      className={cn("sp-marquee group", className)}
      data-pause={pauseOnHover ? "1" : undefined}
    >
      <div
        className="sp-marquee__track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="sp-marquee__group">{children}</div>
        <div className="sp-marquee__group" aria-hidden>
          {children}
        </div>
      </div>
      <style jsx>{`
        .sp-marquee {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%);
        }
        .sp-marquee__track {
          display: flex;
          width: max-content;
          animation: sp-marquee linear infinite;
          will-change: transform;
        }
        .sp-marquee[data-pause]:hover .sp-marquee__track {
          animation-play-state: paused;
        }
        .sp-marquee__group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .sp-marquee__track { animation: none; }
        }
      `}</style>
    </div>
  );
}
