import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité — Senso Pur SAS.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Politique de confidentialité" }]}
        eyebrow="LÉGAL"
        title="Politique de confidentialité"
      />

      <section className="sp-section bg-[var(--sp-bg)]">
        <div className="sp-container max-w-3xl text-[var(--sp-slate)] leading-relaxed space-y-8">
          <article>
            <h2 className="mb-4">Données collectées</h2>
            <p>
              Le formulaire de contact collecte uniquement les informations que
              vous renseignez (nom, email, société, sujet, message). Aucune
              donnée n'est collectée à votre insu.
            </p>
          </article>
          <article>
            <h2 className="mb-4">Utilisation</h2>
            <p>
              Vos données ne servent qu'à répondre à votre demande. Elles ne
              sont ni revendues, ni cédées à des tiers, ni utilisées à des fins
              de prospection commerciale.
            </p>
          </article>
          <article>
            <h2 className="mb-4">Analytics</h2>
            <p>
              Ce site utilise <strong>Plausible Analytics</strong>, une solution
              respectueuse de la vie privée, sans cookies et sans collecte de
              données personnelles. Aucun bandeau cookie n'est nécessaire.
            </p>
          </article>
          <article>
            <h2 className="mb-4">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d'un droit d'accès, de
              rectification, et d'effacement de vos données. Pour l'exercer,
              écrivez à contact@senso-pur.com.
            </p>
          </article>
          <article>
            <h2 className="mb-4">Conservation</h2>
            <p>
              Les messages envoyés via le formulaire de contact sont conservés
              maximum 3 ans après le dernier échange.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
