import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales — Senso Pur SAS.",
};

export default function MentionsLegales() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Mentions légales" }]}
        eyebrow="LÉGAL"
        title="Mentions légales"
      />

      <section className="sp-section bg-[var(--sp-bg)]">
        <div className="sp-container max-w-3xl text-[var(--sp-slate)] leading-relaxed space-y-8">
          <article>
            <h2 className="mb-4">Éditeur</h2>
            <p>
              SENSO PUR SAS<br />
              40 rue Antoine Condorcet, 38090 Vaulx-Milieu, France<br />
              Tél. 04 74 07 33 51<br />
              Email : contact@senso-pur.com<br />
              SIREN : à compléter — RCS Vienne<br />
              N° TVA intracommunautaire : à compléter
            </p>
          </article>
          <article>
            <h2 className="mb-4">Directeur de publication</h2>
            <p>Fabien Bully</p>
          </article>
          <article>
            <h2 className="mb-4">Hébergement</h2>
            <p>
              Vercel Inc.<br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
              vercel.com
            </p>
          </article>
          <article>
            <h2 className="mb-4">Propriété intellectuelle</h2>
            <p>
              Le contenu de ce site (textes, images, vidéos, logo Senso Pur, marques
              Bellecour Literie, Matelas Pour Tous, Olympe, Maison Aubertin) est
              la propriété exclusive de Senso Pur SAS. Toute reproduction sans
              autorisation préalable est interdite.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
