import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
  id?: string;
  align?: "left" | "center";
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  id,
  align = "left",
}: SectionProps) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "items-start";
  return (
    <section id={id} className={`relative py-24 md:py-32 px-6 lg:px-10 ${className}`}>
      <div className="max-w-[1440px] mx-auto">
        {(eyebrow || title || intro) && (
          <div className={`flex flex-col gap-5 max-w-3xl mb-16 ${alignCls}`}>
            {eyebrow && (
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-white/30" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] text-balance">
                {title}
              </h2>
            )}
            {intro && (
              <p className="text-lg text-white/50 leading-relaxed text-pretty max-w-2xl">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
