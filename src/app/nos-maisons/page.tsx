import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CardsGrid } from "@/components/sections/CardsGrid";
import { FadeIn } from "@/components/animations/FadeIn";
import { MAISONS } from "@/content/home";

export const metadata: Metadata = {
  title: "Nos maisons",
  description:
    "Le groupe Senso Pur réunit deux univers complémentaires : La Maison Senso pour le sommeil, Maison Aubertin pour l'art de vivre.",
};

export default function NosMaisons() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nos maisons" }]}
        eyebrow="NOS MAISONS"
        title="Deux maisons, une même exigence du confort."
        subtitle="Le groupe Senso Pur réunit deux univers complémentaires, portés par une même famille et un même engagement. La Maison Senso pour le sommeil, Maison Aubertin pour l'art de vivre."
      />

      <section className="sp-section bg-[var(--sp-bg)]">
        <div className="sp-container">
          <FadeIn className="text-center mb-12 max-w-3xl mx-auto">
            <p className="sp-eyebrow mb-3">ARCHITECTURE DU GROUPE</p>
            <h2 className="mb-4">Deux univers, une même famille</h2>
            <p className="text-[var(--sp-slate)]">
              Cliquez sur une maison pour découvrir son histoire, ses marques et son
              territoire d&apos;expression.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {MAISONS.map((m, i) => (
              <FadeIn key={m.slug} delay={i * 120}>
                <Link
                  href={m.href}
                  className="group block relative overflow-hidden rounded-[var(--sp-radius-lg)] aspect-[3/4] bg-[var(--sp-obsidian)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.02]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,22,40,0) 30%, rgba(10,22,40,0.85) 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-[var(--sp-alabaster)]">
                    <p className="sp-eyebrow text-[var(--sp-peach)] mb-3">{m.tag}</p>
                    <h3
                      className="font-heading mb-3"
                      style={{
                        color: "var(--sp-alabaster)",
                        fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                      }}
                    >
                      {m.name}
                    </h3>
                    <p className="text-sm text-[rgba(245,241,232,0.85)] max-w-md leading-relaxed">
                      {m.teaser}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CardsGrid
        eyebrow="POUR ALLER PLUS LOIN"
        title="Découvrir le groupe en profondeur"
        cards={[
          {
            eyebrow: "DOCTRINE",
            title: "D'où viennent nos produits ?",
            body: "Notre doctrine d'achat publique en 4 cercles. Pays par pays, partenaire par partenaire.",
            href: "/doctrine-achat",
          },
          {
            eyebrow: "FABRICATION",
            title: "L'usine de Vaulx-Milieu",
            body: "Process, métiers, savoir-faire — au cœur de La Maison Senso.",
            href: "/notre-fabrication",
          },
          {
            eyebrow: "DIRECTION",
            title: "Une famille à la tête",
            body: "Fabien et Marine Bully — deux dirigeants, deux maisons, une même conviction.",
            href: "/notre-direction",
          },
        ]}
      />
    </>
  );
}
