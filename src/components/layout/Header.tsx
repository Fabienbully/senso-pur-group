"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Le groupe", href: "/notre-direction" },
  { label: "Nos maisons", href: "/nos-maisons" },
  { label: "Fabrication", href: "/notre-fabrication" },
  { label: "Engagements", href: "/engagements-rse" },
  { label: "Doctrine d'achat", href: "/doctrine-achat" },
  { label: "Presse", href: "/espace-presse" },
  { label: "Carrières", href: "/carrieres" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer open
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  // En haut de la home (hero sombre) : version claire ; après scroll : version sombre.
  // Quand le menu mobile est ouvert, on force la version sombre (le drawer est crème).
  const onLight = scrolled || open;
  const logoSrc = onLight
    ? "/images/brand/Senso-Pur-logo-bleu_nuit.svg"
    : "/images/brand/Senso-Pur-logo-blanc.svg";
  const linkColor = onLight ? "var(--sp-slate)" : "var(--sp-alabaster)";
  const linkHover = onLight ? "var(--sp-mahogany)" : "var(--sp-pewter)";
  const burgerColor = onLight ? "var(--sp-slate)" : "var(--sp-alabaster)";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,box-shadow] duration-500",
        scrolled || open
          ? "bg-[rgba(238,236,233,0.92)] backdrop-blur-md shadow-[0_1px_0_rgba(27,40,36,0.06)]"
          : "bg-transparent"
      )}
      data-scrolled={scrolled || open}
    >
      <div className="sp-container-wide flex items-center justify-between gap-6 h-[var(--sp-header-h)]">
        <Link
          href="/"
          aria-label="Senso Pur Group — Accueil"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/*
            width/height = ratio réel du SVG (1860×1582 ≈ 1.176:1).
            Le style explicite force le navigateur à respecter la contrainte
            même si le SVG embarque des dimensions énormes (pt) en interne.
          */}
          <img
            src={logoSrc}
            alt="Senso Pur Group"
            width={42}
            height={36}
            className="transition-opacity duration-500"
            style={{ height: 36, width: "auto", maxHeight: 36, display: "block" }}
          />
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden lg:flex items-center gap-7"
          style={{ color: linkColor }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.86rem] font-medium tracking-wide transition-colors"
              style={{ color: linkColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={onLight ? "sp-btn sp-btn--ghost" : "sp-btn sp-btn--secondary"}
          >
            Nous contacter
          </Link>
        </div>

        {/* Burger button — toujours visible <lg, toujours contrasté */}
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="sp-mobile-nav"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden relative w-10 h-10 -mr-2 flex flex-col items-center justify-center gap-[6px]"
        >
          <span
            aria-hidden
            className="block h-[2px] w-7 rounded-full transition-[transform,opacity,background] duration-300"
            style={{
              background: burgerColor,
              transform: open ? "translateY(8px) rotate(45deg)" : "none",
            }}
          />
          <span
            aria-hidden
            className="block h-[2px] w-7 rounded-full transition-[opacity,background] duration-300"
            style={{
              background: burgerColor,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            aria-hidden
            className="block h-[2px] w-7 rounded-full transition-[transform,background] duration-300"
            style={{
              background: burgerColor,
              transform: open ? "translateY(-8px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="sp-mobile-nav"
        className={cn(
          "lg:hidden fixed inset-x-0 top-[var(--sp-header-h)] bottom-0 bg-[var(--sp-alabaster)] transition-[opacity,transform] duration-500 overflow-y-auto",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <nav aria-label="Menu mobile" className="flex flex-col p-8 gap-5">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-heading text-[2rem] leading-tight text-[var(--sp-mahogany)] hover:text-[var(--sp-bronze)] transition-colors py-2 border-b border-[var(--sp-bronze-soft)]/40"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="sp-btn sp-btn--primary mt-6 w-fit"
          >
            Nous contacter
          </Link>
          <div className="mt-8 text-sm text-[var(--sp-slate)] space-y-1">
            <p>40 rue Antoine Condorcet</p>
            <p>38090 Vaulx-Milieu</p>
            <p>
              <a href="tel:+33474073351" className="hover:text-[var(--sp-mahogany)]">
                04 74 07 33 51
              </a>
            </p>
            <p>
              <a href="mailto:contact@senso-pur.com" className="hover:text-[var(--sp-mahogany)]">
                contact@senso-pur.com
              </a>
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
