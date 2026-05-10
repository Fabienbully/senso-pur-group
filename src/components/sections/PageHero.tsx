import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { MaskReveal } from "@/components/animations/MaskReveal";
import { Parallax } from "@/components/animations/Parallax";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Optional crumb { label, href }[] (current page implicit). */
  crumbs?: { label: string; href?: string }[];
  /** Optional background image (parallaxed). */
  bgImage?: string;
}

export function PageHero({ eyebrow, title, subtitle, crumbs, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden text-[var(--sp-alabaster)]"
      style={{
        minHeight: "70vh",
        background: "var(--sp-obsidian)",
        paddingTop: "calc(var(--sp-header-h) + 4rem)",
        paddingBottom: "5rem",
      }}
    >
      {bgImage && (
        <Parallax speed={0.85} className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgImage}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-50"
            style={{ minHeight: "106%" }}
          />
        </Parallax>
      )}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(10,22,40,0.6) 0%, rgba(10,22,40,0.95) 100%)",
        }}
      />
      <div className="sp-grain -z-10" aria-hidden />

      <div className="sp-container relative">
        {crumbs && (
          <FadeIn>
            <nav
              aria-label="Fil d'ariane"
              className="text-xs tracking-wide text-[rgba(245,241,232,0.6)] mb-8 flex items-center gap-2 flex-wrap"
            >
              <Link href="/" className="hover:text-[var(--sp-pewter)]">Accueil</Link>
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span aria-hidden>/</span>
                  {c.href ? (
                    <Link href={c.href} className="hover:text-[var(--sp-pewter)]">
                      {c.label}
                    </Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </FadeIn>
        )}

        <FadeIn delay={120}>
          <p className="sp-eyebrow text-[var(--sp-pewter)] mb-6">{eyebrow}</p>
        </FadeIn>

        <h1
          className="font-heading text-[var(--sp-alabaster)] max-w-5xl"
          style={{
            color: "var(--sp-alabaster)",
            fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
          }}
        >
          <MaskReveal>{title}</MaskReveal>
        </h1>

        {subtitle && (
          <FadeIn delay={500} className="mt-8 max-w-2xl">
            <p className="text-lg text-[rgba(245,241,232,0.85)] leading-relaxed">
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
