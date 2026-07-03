import { Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import {
  Check,
  MessageCircle,
  Calendar,
  Bell,
  Users,
  Sparkles,
  TrendingUp,
  Zap,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import type { ReactNode } from "react";

const WHATSAPP_NUMBER = "5511918967593";

export interface LandingPageProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  whatsappMessage: string;
  pains: string[];
  features: { icon: "calendar" | "message" | "bell" | "users" | "sparkles" | "trending"; title: string; desc: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
}

const iconMap = {
  calendar: Calendar,
  message: MessageCircle,
  bell: Bell,
  users: Users,
  sparkles: Sparkles,
  trending: TrendingUp,
};

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function CTAButton({
  msg,
  variant = "primary",
  className = "",
}: {
  msg: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 rounded-sm transition font-semibold";
  const styles =
    variant === "primary"
      ? "bg-tech-cyan text-bg-base hover:opacity-90 shadow-[0_0_40px_-8px_var(--color-tech-cyan)]"
      : "border border-white/15 text-white hover:bg-white/5";
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <MessageCircle className="size-4" />
      Receber diagnóstico pelo WhatsApp
    </a>
  );
}

function SecondaryCTA() {
  return (
    <Link
      to="/assinar"
      className="inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 rounded-sm transition border border-white/15 text-white/80 hover:text-white hover:border-white/40"
    >
      Ver planos do PetOps
    </Link>
  );
}

export function LandingPage({
  eyebrow,
  title,
  subtitle,
  whatsappMessage,
  pains,
  features,
  benefits,
  faq,
}: LandingPageProps) {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        {/* HERO */}
        <section className="relative px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-1/4 left-1/3 size-[520px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative max-w-[1100px] mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
                {eyebrow}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] text-balance">
              {title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <CTAButton msg={whatsappMessage} />
              <SecondaryCTA />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center text-[11px] font-mono uppercase tracking-[0.18em] text-white/40">
              <span className="flex items-center gap-1.5"><Check className="size-3 text-tech-cyan" /> Sem cartão</span>
              <span className="flex items-center gap-1.5"><Check className="size-3 text-tech-cyan" /> Implantação guiada</span>
              <span className="flex items-center gap-1.5"><Check className="size-3 text-tech-cyan" /> Suporte humano</span>
            </div>
          </div>
        </section>

        {/* FUNCIONALIDADES */}
        <Section
          eyebrow="O que o PetOps faz"
          title="Tudo em um só lugar"
          intro="Sem planilha, sem caderno, sem confusão."
          className="bg-bg-surface/40"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <div
                  key={i}
                  className="group p-6 rounded-lg border border-white/10 bg-bg-base hover:border-tech-cyan/40 transition"
                >
                  <div className="size-10 rounded-md bg-tech-cyan/10 border border-tech-cyan/20 flex items-center justify-center mb-4 group-hover:bg-tech-cyan/20 transition">
                    <Icon className="size-5 text-tech-cyan" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <CTAButton msg={whatsappMessage} />
            <SecondaryCTA />
          </div>
        </Section>


        {/* CTA FINAL */}
        <section className="relative px-6 lg:px-10 py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-cyan/5 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-tech-cyan/10 blur-[160px] rounded-full pointer-events-none" />
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.05] text-balance">
              Pronto para <span className="text-tech-cyan">desencalhar</span> sua operação?
            </h2>
            <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto">
              Fale agora com nosso time e receba um diagnóstico gratuito do seu petshop pelo WhatsApp.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <CTAButton msg={whatsappMessage} />
              <SecondaryCTA />
            </div>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <a
        href={waLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 inset-x-4 z-40 flex items-center justify-center gap-2 bg-tech-cyan text-bg-base font-mono text-[11px] uppercase tracking-widest px-6 py-4 rounded-sm font-semibold shadow-[0_8px_40px_-4px_var(--color-tech-cyan)]"
      >
        <MessageCircle className="size-4" />
        Falar no WhatsApp
      </a>

      <Footer />
    </div>
  );
}
