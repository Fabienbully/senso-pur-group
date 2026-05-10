"use client";

import Link from "next/link";
import { HERO } from "@/content/home";

export function HeroVideo() {
  const { videoYouTubeId, videoStartAt } = HERO;
  const embed = `https://www.youtube.com/embed/${videoYouTubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoYouTubeId}&start=${videoStartAt}&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3`;

  return (
    <section
      className="sp-hero relative isolate"
      aria-labelledby="hero-title"
      style={{
        minHeight: "100svh",
        background: "var(--sp-obsidian)",
        color: "var(--sp-alabaster)",
        overflow: "hidden",
      }}
    >
      {/* YouTube background — covers whole hero */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <iframe
          src={embed}
          title="Vidéo d'ambiance Senso Pur"
          allow="autoplay; encrypted-media"
          loading="eager"
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "max(100vw, 177.78vh)",
            height: "max(56.25vw, 100vh)",
            border: 0,
          }}
        />
      </div>

      {/* Voile dégradé radial obsidian + vignette ciné */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,22,40,0.45) 0%, rgba(10,22,40,0.78) 70%, rgba(10,22,40,0.92) 100%)",
          boxShadow: "inset 0 0 220px 60px rgba(0,0,0,0.55)",
        }}
      />
      {/* Grain léger */}
      <div className="sp-grain -z-10" aria-hidden />

      {/* Content */}
      <div className="sp-container relative h-[100svh] flex flex-col justify-center pt-[var(--sp-header-h)]">
        <p
          className="sp-eyebrow text-[var(--sp-pewter)] mb-8 sp-hero__eyebrow"
          style={{
            opacity: 0,
            animation: "sp-eyebrow-spread 1100ms var(--sp-ease-cinema) 200ms forwards",
          }}
        >
          {HERO.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="font-heading text-[var(--sp-alabaster)] sp-hero__title"
          style={{
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            maxWidth: "22ch",
            fontSize: "clamp(2.4rem, 5.4vw, 5rem)",
            opacity: 0,
            transform: "translate3d(0, 24px, 0)",
            animation:
              "sp-fade-up 1100ms var(--sp-ease-cinema) 550ms forwards",
          }}
        >
          {HERO.title}
        </h1>

        <div
          className="flex flex-col sm:flex-row gap-4 mt-12 sp-hero__ctas"
          style={{
            opacity: 0,
            transform: "translate3d(0, 24px, 0)",
            animation:
              "sp-fade-up 1100ms var(--sp-ease-cinema) 950ms forwards",
          }}
        >
          {HERO.ctas.map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className={`sp-btn sp-btn--${cta.variant}`}


            >
              {cta.label}
            </Link>
          ))}
        </div>

        {/* Scroll cue */}
        <div
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-3 text-[rgba(245,241,232,0.6)] text-[0.65rem] tracking-[0.3em] uppercase"
        >
          <span>Faites défiler</span>
          <span
            className="block w-px h-12 bg-[var(--sp-alabaster)]"
            style={{ animation: "sp-scroll-cue 2.4s var(--sp-ease-cinema) infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
