"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

interface VideoFeatureProps {
  /** mp4/webm sources OR youtubeId (mutually exclusive) */
  src?: string;
  poster?: string;
  youtubeId?: string;
  caption?: string;
  /** Optional aspect ratio. Default 16/9. */
  aspect?: "16/9" | "21/9";
}

export function VideoFeature({ src, poster, youtubeId, caption, aspect = "16/9" }: VideoFeatureProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setInView(e.isIntersecting);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (inView) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [inView]);

  return (
    <section className="bg-[var(--sp-bg)] py-[var(--sp-space-xl)]">
      <div className="sp-container-wide">
        <FadeIn>
          <figure className="relative overflow-hidden rounded-[var(--sp-radius-lg)] bg-[var(--sp-obsidian)]" style={{ aspectRatio: aspect.replace("/", " / ") }}>
            {youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&playsinline=1&rel=0`}
                title={caption ?? "Vidéo"}
                allow="autoplay; encrypted-media"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
            ) : src ? (
              <video
                ref={ref}
                src={src}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : null}

            {caption && (
              <figcaption className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-[rgba(10,22,40,0.55)] backdrop-blur-md text-xs tracking-wide text-[var(--sp-alabaster)]">
                {caption}
              </figcaption>
            )}
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
