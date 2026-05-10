import { FadeIn } from "@/components/animations/FadeIn";

interface TextBlockProps {
  eyebrow?: string;
  title?: string;
  body: string | React.ReactNode;
  /** "narrow" max-w 760px (default), "wide" max-w 980px */
  width?: "narrow" | "wide";
  align?: "left" | "center";
  bg?: "default" | "soft" | "obsidian";
}

export function TextBlock({
  eyebrow,
  title,
  body,
  width = "narrow",
  align = "left",
  bg = "default",
}: TextBlockProps) {
  const bgClass =
    bg === "soft"
      ? "bg-[var(--sp-bg-soft)]"
      : bg === "obsidian"
      ? "bg-[var(--sp-obsidian)] text-[var(--sp-alabaster)]"
      : "bg-[var(--sp-bg)]";
  const isDark = bg === "obsidian";

  return (
    <section className={`sp-section ${bgClass}`}>
      <div className="sp-container">
        <FadeIn
          className={`${width === "wide" ? "max-w-[980px]" : "max-w-[760px]"} ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {eyebrow && (
            <p
              className="sp-eyebrow mb-4"
              style={{ color: isDark ? "var(--sp-pewter)" : undefined }}
            >
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              className="mb-8"
              style={{
                color: isDark ? "var(--sp-alabaster)" : undefined,
              }}
            >
              {title}
            </h2>
          )}
          <div
            className={`text-lg leading-relaxed space-y-5 ${
              isDark ? "text-[rgba(238,236,233,0.85)]" : "text-[var(--sp-slate)]"
            }`}
          >
            {typeof body === "string"
              ? body.split("\n").map((p, i) => <p key={i}>{p}</p>)
              : body}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
