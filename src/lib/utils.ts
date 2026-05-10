import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Format numbers FR style: 50000 → "50 000" */
export function formatFR(value: number): string {
  return new Intl.NumberFormat("fr-FR").format(value);
}

/** Site URL shortcut — par défaut le domaine de production Hostinger. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://senso-pur-group.com";
