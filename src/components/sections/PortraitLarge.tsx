import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";

interface PortraitLargeProps {
  image: string;
  alt: string;
  caption?: string;
  /** Aspect ratio override. Default 16/9. Use "portrait" for 4/5. */
  aspect?: "wide" | "portrait" | "square";
  parallax?: boolean;
}

export function PortraitLarge({
  image,
  alt,
  caption,
  aspect = "wide",
  parallax = true,
}: PortraitLargeProps) {
  const aspectClass =
    aspect === "portrait" ? "aspect-[4/5]" : aspect === "square" ? "aspect-square" : "aspect-[16/9]";

  return (
    <section className="bg-[var(--sp-bg)] py-[var(--sp-space-xl)]">
      <div className="sp-container-wide">
        <FadeIn>
          <figure
            className={`relative overflow-hidden rounded-[var(--sp-radius-lg)] ${aspectClass} bg-[var(--sp-obsidian)]`}
          >
            {parallax ? (
              <Parallax speed={0.7} className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "115%" }}
                />
              </Parallax>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt={alt} className="w-full h-full object-cover" />
            )}
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
