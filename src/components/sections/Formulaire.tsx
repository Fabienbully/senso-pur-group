"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

/**
 * Endpoint Formspree à créer (gratuit, marche en statique sur Hostinger) :
 * 1. Compte sur formspree.io
 * 2. Créer un nouveau formulaire pointant sur contact@senso-pur.com
 * 3. Copier l'ID (ex: "xpwrqkno") dans la variable ci-dessous.
 * Sans ID configuré → ouverture de l'app email du visiteur en fallback.
 */
const FORMSPREE_ID = ""; // ex: "xpwrqkno" — laisser vide pour fallback mailto

const SUJETS = [
  "Demande d'information générale",
  "Hôtellerie / projet professionnel",
  "Presse",
  "Carrière / candidature",
  "SAV / réclamation",
  "Investisseur / partenaire institutionnel",
  "Autre",
];

export function Formulaire() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot — bot fills this, humans never see it
    if (fd.get("website")) return;

    if (!FORMSPREE_ID) {
      // Fallback : ouvre l'app email du visiteur avec un message pré-rempli
      const subject = encodeURIComponent(`[Site] ${fd.get("subject") ?? "Contact"}`);
      const body = encodeURIComponent(
        `Nom : ${fd.get("name") ?? ""}\nEmail : ${fd.get("email") ?? ""}\nSociété : ${fd.get("company") ?? ""}\n\n${fd.get("message") ?? ""}`
      );
      window.location.href = `mailto:contact@senso-pur.com?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="sp-section bg-[var(--sp-bg)]">
      <div className="sp-container max-w-3xl">
        <FadeIn className="mb-12">
          <p className="sp-eyebrow mb-3">FORMULAIRE</p>
          <h2 id="formulaire">Écrivez-nous</h2>
        </FadeIn>

        <FadeIn delay={120}>
          <form onSubmit={onSubmit} className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Nom" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Société (optionnel)" name="company" />
              <div>
                <label className="block text-sm font-medium text-[var(--sp-mahogany)] mb-2">
                  Sujet *
                </label>
                <select
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-[var(--sp-radius-md)] border border-[var(--sp-bronze-soft)] bg-[var(--sp-bg-soft)] focus:border-[var(--sp-pewter)] focus:outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choisir un sujet
                  </option>
                  {SUJETS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--sp-mahogany)] mb-2">
                Votre message *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-[var(--sp-radius-md)] border border-[var(--sp-bronze-soft)] bg-[var(--sp-bg-soft)] focus:border-[var(--sp-pewter)] focus:outline-none transition-colors resize-y"
              />
            </div>

            {/* Honeypot */}
            <input type="text" name="website" tabIndex={-1} aria-hidden style={{ position: "absolute", left: "-9999px" }} />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="sp-btn sp-btn--primary disabled:opacity-60"
              >
                {status === "sending" ? "Envoi…" : "Envoyer le message"}
              </button>
              {status === "ok" && (
                <p className="text-sm text-[var(--sp-pewter)]">
                  Merci, votre message est bien parti. Nous revenons vers vous sous 48h.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-[var(--sp-mahogany)]">
                  Une erreur est survenue. Réessayez ou écrivez-nous à contact@senso-pur.com.
                </p>
              )}
            </div>
            <p className="text-xs text-[var(--sp-bronze)] mt-2">
              Vos données ne sont pas utilisées à des fins commerciales tierces.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[var(--sp-mahogany)] mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 rounded-[var(--sp-radius-md)] border border-[var(--sp-bronze-soft)] bg-[var(--sp-bg-soft)] focus:border-[var(--sp-pewter)] focus:outline-none transition-colors"
      />
    </div>
  );
}
