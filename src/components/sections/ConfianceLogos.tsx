import { CLIENTS_HOTELLERIE, CLIENTS_MARKETPLACES, CONFIANCE } from "@/content/home";
import { FadeIn } from "@/components/animations/FadeIn";
import { Marquee } from "@/components/animations/Marquee";

function LogoRow({ items, reverse = false }: { items: typeof CLIENTS_HOTELLERIE; reverse?: boolean }) {
  return (
    <Marquee duration={70} reverse={reverse}>
      {items.map((c) => (
        <div
          key={c.name}
          className="flex items-center justify-center px-10 md:px-14 h-20 shrink-0"
          title={c.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.src}
            alt={c.name}
            className="max-h-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-500"
          />
        </div>
      ))}
    </Marquee>
  );
}

export function ConfianceLogos() {
  return (
    <section className="sp-section bg-[var(--sp-bg-soft)]" aria-labelledby="confiance-title">
      <FadeIn className="text-center mb-14">
        <p
          id="confiance-title"
          className="sp-eyebrow"
        >
          {CONFIANCE.title}
        </p>
      </FadeIn>

      <div className="space-y-10">
        <LogoRow items={CLIENTS_HOTELLERIE} />
        <LogoRow items={CLIENTS_MARKETPLACES} reverse />
      </div>
    </section>
  );
}
