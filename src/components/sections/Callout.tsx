import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

interface CalloutProps {
  eyebrow?: string;
  title: string;
  body?: string;
  cta: { label: string; href: string; external?: boolean };
  /** "soft" cream block (default), "obsidian" dark dramatic block. */
  variant?: "soft" | "obsidian" | "mahogany";
}

export function Callout({ eyebrow, title, body, cta, variant = "soft" }: CalloutProps) {
  const styles = {
    soft: "bg-[var(--sp-bg-soft)] text-[var(--sp-text-strong)]",
    obsidian: "bg-[var(--sp-obsidian)] text-[var(--sp-alabaster)]",
    mahogany:
      "text-[var(--sp-alabaster)] [background:linear-gradient(135deg,var(--sp-mahogany)_0%,var(--sp-bronze)_100%)]",
  }[variant];
  const isDark = variant !== "soft";
  return (
    <section className="sp-section">
      <div className="sp-container">
        <FadeIn>
          <div
            className={`relative overflow-hidden rounded-[var(--sp-radius-lg)] p-12 md:p-16 lg:p-20 ${styles}`}
          >
            <div className="max-w-3xl">
              {eyebrow && (
                <p
                  className="sp-eyebrow mb-4"
                  style={{ color: isDark ? "var(--sp-pewter)" : undefined }}
                >
                  {eyebrow}
                </p>
              )}
              <h2
                className="mb-6"
                style={{ color: isDark ? "var(--sp-alabaster)" : undefined }}
              >
                {title}
              </h2>
              {body && (
                <p
                  className="mb-10 text-lg leading-relaxed"
                  style={{ color: isDark ? "rgba(245,241,232,0.85)" : undefined }}
                >
                  {body}
                </p>
              )}
              <Link
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noopener noreferrer" : undefined}
                className={
                  variant === "mahogany"
                    ? "sp-btn sp-btn--secondary"
                    : isDark
                    ? "sp-btn sp-btn--secondary"
                    : "sp-btn sp-btn--primary"
                }
              >
                {cta.label} {cta.external ? "↗" : "→"}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
