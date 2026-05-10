"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Use "li" when wrapping a list item, defaults to "div". */
  as?: "div" | "li" | "section" | "article" | "header" | "footer" | "aside";
  once?: boolean;
}

/**
 * Generic IntersectionObserver wrapper.
 * Adds .sp-anim-prepare → .sp-anim-in. Stagger via the `delay` prop (ms).
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [once]);

  const sharedProps = {
    ref: ref as React.Ref<HTMLDivElement>,
    className: cn("sp-anim-prepare", visible && "sp-anim-in", className),
    style: { ["--sp-anim-delay" as string]: `${delay}ms` },
  };

  switch (as) {
    case "li":      return <li      {...(sharedProps as React.HTMLAttributes<HTMLLIElement>)}>{children}</li>;
    case "section": return <section {...(sharedProps as React.HTMLAttributes<HTMLElement>)}>{children}</section>;
    case "article": return <article {...(sharedProps as React.HTMLAttributes<HTMLElement>)}>{children}</article>;
    case "header":  return <header  {...(sharedProps as React.HTMLAttributes<HTMLElement>)}>{children}</header>;
    case "footer":  return <footer  {...(sharedProps as React.HTMLAttributes<HTMLElement>)}>{children}</footer>;
    case "aside":   return <aside   {...(sharedProps as React.HTMLAttributes<HTMLElement>)}>{children}</aside>;
    default:        return <div     {...sharedProps}>{children}</div>;
  }
}
