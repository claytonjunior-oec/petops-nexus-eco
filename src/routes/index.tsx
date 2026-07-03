
import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import heroHusky from "@/assets/hero-husky.jpg";
import heroTech from "@/assets/hero-tech.jpg";

import ogImage from "@/assets/og-petops.jpg";
import { Heart, Sparkles, Star, MessageCircle } from "lucide-react";

const SITE_URL = "https://petops-nexus-eco.lovable.app";
const OG_IMAGE_URL = `${SITE_URL}${ogImage}`;

const faqs = [
  {
    q: "Qual o melhor sistema de gestão para petshop em 2026?",
    a: "O PetOps é o sistema mais completo para petshops modernos: une agenda inteligente, atendimento automatizado no WhatsApp com IA, prontuário veterinário, PDV e financeiro — tudo em uma única plataforma, sem integração frágil.",
  },
  {
    q: "Como reduzir no-show no petshop e banho & tosa?",
    a: "Petshops que usam o PetOps reduzem o no-show em até 42% combinando lembretes automáticos no WhatsApp, confirmação em um clique e reagendamento por IA. O tutor é avisado nas horas certas e a sua agenda não fura mais.",
  },
  {
    q: "Vale a pena automatizar o WhatsApp do petshop?",
    a: "Sim. A maioria dos petshops perde de 3 a 6 horas por dia respondendo o mesmo no WhatsApp. Com a Haku, a IA do PetOps, o atendimento qualifica, agenda, cobra e relembra sozinho — sua equipe volta a vender e cuidar do pet.",
  },
  {
    q: "Quanto custa um sistema de gestão completo para petshop?",
    a: "O PetOps começa em R$ 0 (plano Gratuito) e vai até R$ 497/mês no plano Premium com IA, multi-unidade e automações. Os planos Essencial (R$ 149) e Profissional (R$ 297) cobrem 90% das operações de banho & tosa, clínicas e daycare.",
  },
  {
    q: "O PetOps funciona para clínica veterinária e hotel pet?",
    a: "Funciona. Os planos Profissional e Premium incluem módulos de clínica veterinária (prontuário, vacinas, receitas), creche & hotel (check-in com foto, atualizações ao tutor) e assinaturas recorrentes — pensados para a operação real do mercado.",
  },
  {
    q: "O PetOps substitui planilhas e cadernos de anotação?",
    a: "Sim. O prontuário digital, agenda inteligente e controle financeiro integrado eliminam planilhas, cadernos e anotações soltas. Tudo fica centralizado, acessível de qualquer dispositivo e protegido na nuvem.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema para Petshop com Automação no WhatsApp | PetOps" },
      {
        name: "description",
        content:
          "Sistema completo para petshop, clínica vet, banho & tosa, daycare e hotel pet. Agenda inteligente, atendimento com IA no WhatsApp, prontuário, PDV e financeiro. Reduza no-show em 42%.",
      },
      {
        name: "keywords",
        content:
          "sistema para petshop, software petshop, gestão petshop, automação petshop, agenda petshop, whatsapp petshop, sistema clínica veterinária, sistema banho e tosa, shampoo profissional pet",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "PetOps" },
      { property: "og:title", content: "PetOps — Sistema + Produtos Premium para Petshop" },
      {
        property: "og:description",
        content:
          "O sistema que automatiza a operação e eleva a margem do petshop moderno. Demo gratuita.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "PetOps · Sistema completo · O futuro da operação pet" },
      { name: "twitter:title", content: "PetOps — Sistema + Produtos Premium para Petshop" },
      {
        name: "twitter:description",
        content: "Automação no WhatsApp, agenda inteligente e linha premium. Demo gratuita.",
      },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "PetOps",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, iOS, Android",
          description:
            "Sistema de gestão para petshop, clínica veterinária, banho & tosa, daycare e hotel pet com automação no WhatsApp e inteligência artificial.",
          url: `${SITE_URL}/`,
          image: OG_IMAGE_URL,
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "0",
            highPrice: "497",
            offerCount: "4",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "120",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium overflow-x-hidden">
      <Nav />
      <Hero />
      <TechSection />
      <FinalCTA />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}

/* ---------------- MOBILE FLOATING CTA ---------------- */
function MobileFloatingCTA() {
  return (
    <div className="fixed bottom-4 inset-x-4 z-50 md:hidden flex gap-2">
      <a
        href="https://wa.me/5511918967593?text=Ol%C3%A1!%20Quero%20conhecer%20o%20PetOps."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-tech-neon text-bg-base rounded-md font-mono text-[11px] uppercase tracking-widest font-semibold shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)]"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
      <Link
        to="/contato"
        className="flex-1 flex items-center justify-center px-4 py-3 bg-white text-bg-base rounded-md font-mono text-[11px] uppercase tracking-widest font-semibold shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)]"
      >
        Demo grátis
      </Link>
    </div>
  );
}

/* ---------------- NÚMEROS ---------------- */
function Numeros() {
  const stats = [
    { n: "−42%", l: "No-show em banho & tosa", c: "tech-cyan" },
    { n: "3.2×", l: "Retenção de tutores", c: "tech-cyan" },
    { n: "+R$ 12k", l: "Economia operacional/mês", c: "tech-neon" },
    { n: "120+", l: "Petshops operando", c: "tech-neon" },
  ];
  return (
    <Section
      eyebrow="Resultados"
      title="Os números do novo petshop automatizado"
      intro="Dados consolidados de petshops, clínicas e daycares operando com o PetOps entre 2024 e 2026."
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div
            key={s.l}
            className="p-6 md:p-8 rounded-xl border border-white/10 bg-bg-surface/60 backdrop-blur relative overflow-hidden"
          >
            <div className={`absolute top-0 left-0 right-0 h-px bg-${s.c}/60`} />
            <div className="font-mono text-[9px] text-white/30 tracking-widest mb-4">
              MET.{String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">
              {s.n}
            </div>
            <div className="text-xs text-white/55 leading-relaxed">{s.l}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-white/30">
        Base: amostra de 120 estabelecimentos · período 2024–2026
      </p>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  return (
    <Section
      eyebrow="Perguntas frequentes"
      title="Tudo que você precisa saber antes de modernizar seu petshop"
      intro="Respostas diretas para as dúvidas que ouvimos toda semana de donos e gestores de petshop."
    >
      <div className="grid gap-3 max-w-4xl">
        {faqs.map((item, i) => (
          <details
            key={item.q}
            className="group rounded-xl border border-white/10 bg-bg-surface/60 backdrop-blur p-5 md:p-6 open:bg-bg-elevated transition"
          >
            <summary className="cursor-pointer list-none flex items-start gap-4">
              <span className="font-mono text-[10px] text-white/30 tracking-widest mt-1 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="flex-1 text-base md:text-lg font-medium text-white leading-snug">
                {item.q}
              </h3>
              <span className="font-mono text-tech-cyan text-xl leading-none mt-0.5 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 ml-10 text-sm md:text-base text-white/65 leading-relaxed">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <main className="relative pt-16 min-h-dvh flex items-stretch">
      {/* Full-bleed husky hero background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroHusky}
          alt="Sistema de gestão para petshop em uso — husky feliz com tutores"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1920}
          height={800}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Cinematic vignette + brand grade */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-base/70 via-bg-base/40 to-bg-base" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base/80 via-transparent to-bg-base/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 via-transparent to-care-blue/15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-1/4 -left-1/4 size-[700px] bg-tech-cyan/15 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 size-[700px] bg-care-blue/15 blur-[160px] rounded-full pointer-events-none" />
      </div>

      <div className="relative flex-1 flex min-h-[760px] z-10">
        {/* Left — Tech (image) */}
        <div className="w-1/2 relative border-r border-white/5 overflow-hidden hidden">

          <img
            src={heroTech}
            alt="Profissional de petshop sorrindo enquanto opera tablet ao lado de um golden retriever"
            className="absolute inset-0 w-full h-full object-cover"
            width={1024}
            height={1280}
          />
          {/* Color grade + readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-bg-base/70 via-bg-base/40 to-tech-cyan/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-base/85" />
          <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-1/4 -left-1/4 size-[700px] bg-tech-cyan/15 blur-[140px] rounded-full pointer-events-none" />

          {/* Top label */}
          <div className="absolute top-8 left-8 font-mono text-[10px] text-tech-cyan tracking-[0.25em] z-10 flex items-center gap-2">
            <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_8px_var(--color-tech-neon)] animate-pulse" />
            TECH · AUTOMAÇÃO
          </div>

          {/* Floating live stat */}
          <div className="absolute top-24 left-8 z-10 rounded-lg border border-white/10 bg-bg-base/70 backdrop-blur-md px-4 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <div className="font-mono text-[9px] uppercase tracking-widest text-white/50 mb-1">
              No-show
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-medium text-white">−42%</span>
              <span className="text-tech-neon text-[10px] font-mono">↓</span>
            </div>
          </div>
        </div>

        {/* Right — Care (image) desativado */}
        {/* <div className="w-1/2 relative overflow-hidden hidden">
          <img
            src={heroCare}
            alt="Cachorro branco fofinho enrolado em toalha após o banho, segurado pela tutora"
            className="absolute inset-0 w-full h-full object-cover"
            width={1024}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-bg-base/70 via-bg-base/40 to-care-blue/10" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-bg-base/85" />
          <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-overlay pointer-events-none" />
          <div className="absolute bottom-1/4 -right-1/4 size-[700px] bg-care-blue/15 blur-[140px] rounded-full pointer-events-none" />

          {/* Top label */}
          {/* <div className="absolute top-8 right-8 font-mono text-[10px] text-care-blue tracking-[0.25em] z-10 flex items-center gap-2">
            CARE · CUIDADO
            <div className="size-1.5 bg-care-green rounded-full shadow-[0_0_8px_var(--color-care-green)]" />
          </div> */}

          {/* Floating product/rating card */}
          {/* <div className="absolute top-24 right-8 z-10 rounded-lg border border-white/10 bg-bg-base/70 backdrop-blur-md px-4 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <div className="font-mono text-[9px] uppercase tracking-widest text-white/50 mb-1">
              Recompra
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-medium text-white">3.2×</span>
              <Heart className="size-3 text-care-blue fill-care-blue" />
            </div>
          </div> */}
        {/* </div> */}

        {/* Mobile background handled by full-bleed husky above */}

        {/* Center spine with pet polaroid */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none z-20 hidden md:block" />

        {/* Floating reviews card — bottom left */}
        <div className="absolute bottom-24 left-8 lg:left-16 z-30 hidden lg:flex items-center gap-3 rounded-full border border-white/10 bg-bg-base/70 backdrop-blur-md pl-3 pr-5 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
          <div className="flex -space-x-2">
            <div className="size-7 rounded-full border-2 border-bg-base bg-gradient-to-br from-tech-cyan to-tech-neon" />
            <div className="size-7 rounded-full border-2 border-bg-base bg-gradient-to-br from-care-blue to-care-green" />
            <div className="size-7 rounded-full border-2 border-bg-base bg-gradient-to-br from-brand-amber to-tech-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-tech-neon">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-3 fill-current" />
              ))}
            </div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-white/60">
              +120 petshops já operam
            </div>
          </div>
        </div>

        {/* Floating "feito com cuidado" badge — bottom right */}
        <div className="absolute bottom-24 right-8 lg:right-16 z-30 hidden lg:flex items-center gap-2 rounded-full border border-care-blue/30 bg-care-blue/10 backdrop-blur-md px-4 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
          <Sparkles className="size-3.5 text-care-blue" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
            90% natural · 0% crueldade
          </span>
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center z-30 px-6">
          <div className="max-w-4xl w-full flex flex-col items-center text-center">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-bg-base/80 backdrop-blur-xl mb-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
                Tecnologia para Petshop
              </span>
              <div className="w-px h-3 bg-white/20" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Automação Inteligente
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-medium tracking-tight text-white leading-[1.02] text-balance mb-6 [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]">
              O futuro da operação pet{" "}
              <span className="text-gradient-brand">começa aqui</span>
            </h1>

            <p className="text-base md:text-xl text-white/70 max-w-2xl text-pretty font-light leading-relaxed mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
              Menos no-show, mais recompra e a sua equipe livre do WhatsApp manual. Tecnologia que opera sozinha para você focar no que importa: o pet e o tutor.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45 mb-10">
              Pet shops · Clínicas · Banho &amp; tosa · Daycare · Hotel
            </p>

            <div className="flex flex-col gap-3 w-full max-w-md">
              <Link
                to="/tech"
                className="group relative px-5 py-4 bg-bg-surface/80 backdrop-blur-md border border-tech-cyan/30 rounded-md hover:border-tech-cyan hover:shadow-[0_0_24px_-4px_var(--color-tech-cyan)] transition-all text-center"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-tech-cyan">
                  Conhecer Tech
                </span>
              </Link>
              {/* <Link
                to="/ecossistema"
                className="px-6 py-4 bg-white text-bg-base rounded-md hover:bg-white/90 font-mono text-[11px] uppercase tracking-widest font-semibold transition text-center"
              >
                Ver o ecossistema completo
              </Link> */}
            </div>
          </div>
        </div>

        {/* Bottom UI bar */}
        <div className="absolute bottom-0 inset-x-0 h-12 border-t border-white/5 bg-bg-base/60 backdrop-blur items-center justify-between px-6 lg:px-10 z-40 hidden md:flex">
          <div className="font-mono text-[10px] text-white/40 tracking-widest">// PETOPS · TECH</div>
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-white/30 rounded-full" />
            <div className="w-2 h-1 bg-white/10 rounded-full" />
            <div className="w-2 h-1 bg-white/10 rounded-full" />
          </div>
          <div className="font-mono text-[10px] text-white/40 tracking-widest">EXPLORAR ↓</div>
        </div>
      </div>
    </main>
  );
}

/* ---------------- CONCEITO ---------------- */
function Conceito() {
  const cards = [
    { t: "Automatize sua operação", d: "Agenda, WhatsApp, lembretes e gestão funcionando sozinhos." },
    { t: "Eleve a experiência do cliente", d: "Comunicação personalizada, lembretes automáticos e atendimento que encanta." },
    { t: "Gere mais valor com tecnologia", d: "Tech reduz custo, aumenta produtividade e libera sua equipe para vender mais." },
  ];
  return (
    <Section
      eyebrow="Conceito"
      title={<>Mais que uma marca. Uma <span className="text-gradient-brand">plataforma</span> para o mercado pet</>}
      intro="A PetOps integra tecnologia e automação para transformar a rotina de negócios pet em operações mais inteligentes, mais lucrativas e mais desejadas pelos clientes."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <div
            key={c.t}
            className="p-8 rounded-xl border border-white/10 bg-bg-surface hover:bg-bg-elevated transition group relative overflow-hidden"
          >
            <div className="font-mono text-[10px] text-white/30 tracking-widest mb-4">
              {String(i + 1).padStart(2, "0")} / 03
            </div>
            <h3 className="text-xl font-medium text-white mb-3">{c.t}</h3>
            <p className="text-sm text-white/55 leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TECH SECTION ---------------- */
function TechSection() {
  const blocks = [
    "Agenda inteligente",
    "WhatsApp com IA",
    "Lembretes automáticos",
    "Check-in e acompanhamento",
    "Reativação e recorrência",
    "Gestão operacional",
  ];
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/2 left-0 size-[600px] bg-tech-cyan/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-tech-cyan/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
              MÓDULO 01 · PETOPS TECH
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
            A camada inteligente do seu negócio pet.
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-8">
            Sistema completo para automatizar a rotina, qualificar leads no
            WhatsApp e operar com previsibilidade — sem depender de planilha.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 bg-tech-cyan text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
            >
              Agendar demo
            </Link>
            <Link
              to="/tech"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 border border-white/15 rounded-sm hover:bg-white/5 transition"
            >
              Ver tudo que a Tech faz
            </Link>
          </div>
        </div>

        {/* Mock dashboard — live */}
        <LiveTechPanel blocks={blocks} />
      </div>
    </section>
  );
}

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options ?? { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function LiveTechPanel({ blocks }: { blocks: string[] }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reativ = useCountUp(38, inView);
  const noshow = useCountUp(42, inView);

  // Rotating "active module" highlight
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setActive((a) => (a + 1) % blocks.length), 1600);
    return () => clearInterval(id);
  }, [inView, blocks.length]);

  // Live-updating bars
  const [bars, setBars] = useState<number[]>([40, 60, 35, 80, 55, 95, 70]);
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setBars((prev) =>
        prev.map((v) => {
          const delta = (Math.random() - 0.5) * 22;
          return Math.max(20, Math.min(100, v + delta));
        }),
      );
    }, 1400);
    return () => clearInterval(id);
  }, [inView]);

  const peakIndex = bars.indexOf(Math.max(...bars));

  return (
    <div ref={ref} className="relative">
      <div className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] glow-tech">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 tracking-widest">
            <div className="size-1.5 bg-tech-neon rounded-full animate-pulse" />
            PETOPS · TECH · LIVE
          </div>
          <div className="font-mono text-[9px] text-white/30 tracking-widest tabular-nums">
            BENCHMARK · 412 PETSHOPS
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <LiveStat
            label="Reativação"
            value={`+${reativ.toFixed(0)}%`}
            sub="vs. mês anterior"
            color="tech-neon"
            progress={Math.min(100, (reativ / 50) * 100)}
          />
          <LiveStat
            label="No-show"
            value={`−${noshow.toFixed(0)}%`}
            sub="banho & tosa"
            color="tech-cyan"
            progress={Math.min(100, (noshow / 50) * 100)}
          />
        </div>

        <div className="rounded-lg border border-white/5 bg-bg-base/60 p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="font-mono text-[10px] text-white/40 tracking-widest">
              FLUXO OPERACIONAL · 7 DIAS
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[9px] text-tech-neon/80 tracking-widest">
              <div className="size-1 rounded-full bg-tech-neon animate-pulse" />
              AO VIVO
            </div>
          </div>
          <div className="flex items-end gap-2 h-24">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 relative group">
                <div
                  className={`w-full rounded-t-sm transition-[height,background] duration-700 ease-out ${
                    i === peakIndex
                      ? "bg-gradient-to-t from-tech-cyan to-tech-neon shadow-[0_0_15px_var(--color-tech-cyan)]"
                      : "bg-white/10"
                  }`}
                  style={{ height: `${inView ? h : 0}%` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[9px] text-white/30 tracking-widest">
            {["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {blocks.slice(0, 6).map((b, i) => (
            <div
              key={b}
              className={`p-3 rounded-md border font-mono text-[10px] tracking-wider truncate transition-all duration-500 ${
                i === active
                  ? "border-tech-cyan/50 bg-tech-cyan/10 text-white shadow-[0_0_20px_-5px_var(--color-tech-cyan)]"
                  : "border-white/5 bg-bg-base/40 text-white/60"
              }`}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -inset-4 bg-tech-cyan/5 blur-3xl -z-10 rounded-3xl" />
    </div>
  );
}

function LiveStat({
  label,
  value,
  sub,
  color,
  progress,
}: {
  label: string;
  value: string;
  sub: string;
  color: string;
  progress: number;
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/60 p-4">
      <div className="font-mono text-[10px] text-white/40 tracking-widest mb-2">{label}</div>
      <div className={`text-2xl font-medium tabular-nums text-${color} leading-none`}>{value}</div>
      <div className="font-mono text-[9px] text-white/35 tracking-wider mt-1">{sub}</div>
      <div className="mt-3 h-1 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full bg-${color} rounded-full transition-[width] duration-1000 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

/* ---------------- CARE SECTION ---------------- */
// function CareSection() { // desativado
//   const featured = careProducts.slice(0, 6);
//   const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
//   return (
//     <section className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
//       <div className="absolute top-1/2 right-0 size-[600px] bg-care-blue/8 blur-[160px] rounded-full pointer-events-none" />
//       <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
//         {/* Real Care products */}
//         <div ref={ref} className="relative order-2 lg:order-1">
//           <div
//             className={`rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-6 md:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] glow-care transition-all duration-[1200ms] ease-out ${
//               inView
//                 ? "opacity-100 translate-y-0 blur-0"
//                 : "opacity-0 translate-y-8 blur-md"
//             }`}
//           >
//             <div
//               className={`flex items-center justify-between mb-6 transition-all duration-700 delay-150 ${
//                 inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
//               }`}
//             >
//               <div className="font-mono text-[10px] text-white/40 tracking-widest">
//                 PETOPS · CARE
//               </div>
//               <div className="font-mono text-[10px] text-care-blue/70 tracking-widest">
//                 LINHA PROFISSIONAL
//               </div>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//               {featured.map((p, i) => (
//                 <Link
//                   key={p.id}
//                   to="/care"
//                   style={{
//                     transitionDelay: inView ? `${200 + i * 90}ms` : "0ms",
//                   }}
//                   className={`group relative rounded-lg border border-white/10 bg-gradient-to-b from-bg-base to-bg-elevated p-3 flex flex-col hover:border-care-blue/40 hover:-translate-y-0.5 overflow-hidden transition-all duration-700 ease-out ${
//                     inView
//                       ? "opacity-100 translate-y-0 blur-0"
//                       : "opacity-0 translate-y-6 blur-sm"
//                   }`}
//                 >
//                   <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-care-blue/15 to-transparent opacity-50 group-hover:opacity-100 transition" />
//                   <div className="font-mono text-[9px] text-white/30 tracking-widest relative mb-2">
//                     {p.code}
//                   </div>
//                   <div className="relative aspect-square rounded-md bg-white/[0.02] border border-white/5 flex items-center justify-center overflow-hidden mb-3">
//                     {/* shimmer sweep */}
//                     <div
//                       className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent"
//                     />
//                     {p.image ? (
//                       <img
//                         src={p.image}
//                         alt={p.name}
//                         loading="lazy"
//                         style={{
//                           transitionDelay: inView ? `${350 + i * 90}ms` : "0ms",
//                         }}
//                         className={`size-full object-contain p-2 transition-all duration-[1100ms] ease-out group-hover:scale-110 ${
//                           inView
//                             ? "opacity-100 scale-100 blur-0"
//                             : "opacity-0 scale-95 blur-sm"
//                         }`}
//                       />
//                     ) : (
//                       <div className="size-8 rounded bg-gradient-to-br from-care-blue/40 to-care-green/20" />
//                     )}
//                   </div>
//                   <div className="relative">
//                     <div className="text-[10px] text-care-blue/70 font-mono tracking-widest uppercase mb-1">
//                       {p.category}
//                     </div>
//                     <div className="text-[11px] text-white/85 font-medium leading-tight line-clamp-2">
//                       {p.name}
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//             <div
//               className={`mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/40 tracking-widest transition-all duration-700 ${
//                 inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
//               }`}
//               style={{ transitionDelay: inView ? "900ms" : "0ms" }}
//             >
//               <span>{careProducts.length} produtos na linha</span>
//               <Link to="/care" className="text-care-blue hover:text-white transition">
//                 Ver todos →
//               </Link>
//             </div>
//           </div>
//           <div className="absolute -inset-4 bg-care-blue/5 blur-3xl -z-10 rounded-3xl" />
//         </div>
//
//         <div className="order-1 lg:order-2">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="h-px w-8 bg-care-blue/40" />
//             <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-care-blue">
//               MÓDULO 02 · PETOPS CARE
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
//             Produtos para elevar o cuidado e o valor percebido.
//           </h2>
//           <p className="text-white/55 text-lg leading-relaxed mb-8">
//             Linha premium pensada para banho, tosa, clínica e revenda. Fórmulas
//             de alta qualidade em embalagens que comunicam valor.
//           </p>
//           <div className="flex flex-wrap gap-3">
//             <Link
//               to="/care"
//               className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 bg-care-blue text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
//             >
//               Conhecer linha Care
//             </Link>
//             <Link
//               to="/contato"
//               className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 border border-white/15 rounded-sm hover:bg-white/5 transition"
//             >
//               Quero revender
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------------- PROBLEMA ---------------- */
/* ---------------- TOGETHER ---------------- */
function Together() {
  const steps = ["Captação", "Atendimento", "Agendamento", "Execução", "Pós-serviço", "Recompra"];
  const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>({ threshold: 0.25 });
  const { ref: flowRef, inView: flowInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  // Cycle the active step
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    if (!flowInView) return;
    const id = setInterval(() => setActiveStep((s) => (s + 1) % steps.length), 1400);
    return () => clearInterval(id);
  }, [flowInView, steps.length]);

  const cards = [
    {
      eyebrow: <span className="text-tech-cyan">PetOps Tech</span>,
      title: "Reduz custo operacional",
      desc: "Agenda, IA no WhatsApp, lembretes e gestão. Sua equipe para de digitar e volta a vender.",
      border: "border-tech-cyan/20",
      bg: "bg-bg-surface",
      topBar: "bg-tech-cyan/40",
      footer: null as React.ReactNode,
      featured: false,
    },
    {
      eyebrow: (
        <>
          <span className="text-tech-cyan">Tech</span>
          <span className="text-white/40">+</span>
          <span className="text-tech-neon">Resultado</span>
        </>
      ),
      title: "Multiplica o LTV do cliente",
      desc: "Recompra automatizada, lembretes inteligentes e tutor fidelizado por experiência — não por desconto.",
      border: "border-white/15",
      bg: "bg-gradient-to-br from-tech-cyan/10 via-bg-surface to-tech-neon/10",
      topBar: "bg-gradient-to-r from-tech-cyan to-tech-neon",
      footer: (
        <div className="font-mono text-[10px] text-white/50 tracking-widest">1 + 1 = 3</div>
      ),
      featured: true,
    },
    {
      eyebrow: <span className="text-tech-neon">Automação Total</span>,
      title: "Operação sem atrito",
      desc: "Do agendamento ao pós-serviço, tudo conectado. Sua equipe para de reagir e começa a criar valor.",
      border: "border-tech-neon/20",
      bg: "bg-bg-surface",
      topBar: "bg-tech-neon/40",
      footer: null as React.ReactNode,
      featured: false,
    },
  ];

  return (
    <Section
      eyebrow="Automação + Resultado"
      title={<>Sozinhos, já entregam. Juntos, viram um <span className="text-gradient-brand">multiplicador</span>.</>}
      intro="Automação reduz o custo de operar. Inteligência artificial eleva a retenção. No mesmo sistema, viram recompra automatizada e tutor fidelizado."
    >
      <div ref={cardsRef} className="grid md:grid-cols-3 gap-4 mb-10">
        {cards.map((c, i) => (
          <div
            key={i}
            style={{ transitionDelay: cardsInView ? `${i * 140}ms` : "0ms" }}
            className={`group relative p-8 rounded-xl border ${c.border} ${c.bg} overflow-hidden transition-all duration-[900ms] ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ${
              c.featured ? "md:scale-105 md:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]" : ""
            } ${
              cardsInView
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-8 blur-md"
            }`}
          >
            <div className={`absolute top-0 left-0 right-0 h-px ${c.topBar}`} />
            {/* shimmer sweep on hover */}
            <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1400ms] ease-out bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            {/* radial glow on hover */}
            <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

            <div className={`font-mono text-[10px] uppercase tracking-[0.25em] mb-4 flex items-center gap-2 ${c.featured ? "text-white/80" : ""}`}>
              {c.eyebrow}
            </div>
            <div className="text-2xl font-medium text-white tracking-tight mb-2">
              {c.title}
            </div>
            <p className={`text-sm leading-relaxed ${c.featured ? "text-white/70 mb-4" : "text-white/55"}`}>
              {c.desc}
            </p>
            {c.footer}
          </div>
        ))}
      </div>

      <div
        ref={flowRef}
        className={`relative rounded-2xl border border-white/10 bg-bg-surface/40 backdrop-blur p-6 md:p-8 transition-all duration-1000 ${
          flowInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="font-mono text-[10px] text-white/40 tracking-widest mb-6 text-center">
          FLUXO UNIFICADO DA JORNADA DO TUTOR
        </div>

        {/* Track */}
        <div className="absolute top-[60%] left-6 right-6 h-px bg-gradient-to-r from-tech-cyan/40 via-white/20 to-care-blue/40 hidden md:block" />

        {/* Traveling packet */}
        <div
          className="hidden md:block absolute top-[60%] left-6 right-6 h-px pointer-events-none"
          aria-hidden
        >
          <div
            className="absolute -top-[3px] size-1.5 rounded-full bg-gradient-to-r from-tech-cyan to-care-blue shadow-[0_0_14px_var(--color-tech-cyan)] transition-[left] duration-[1300ms] ease-in-out"
            style={{
              left: `${(activeStep / Math.max(1, steps.length - 1)) * 100}%`,
              transform: "translateX(-50%)",
            }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
          {steps.map((s, i) => {
            const active = i === activeStep;
            return (
              <div
                key={s}
                style={{ transitionDelay: flowInView ? `${i * 110}ms` : "0ms" }}
                className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  flowInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
              >
                <div
                  className={`size-10 rounded-full border flex items-center justify-center mb-2 backdrop-blur relative z-10 transition-all duration-500 ${
                    active
                      ? "border-tech-cyan/70 bg-bg-base scale-110 shadow-[0_0_24px_-2px_var(--color-tech-cyan)]"
                      : "border-white/15 bg-bg-base hover:border-white/40"
                  }`}
                >
                  <div
                    className={`font-mono text-[9px] transition-colors ${
                      active ? "text-white" : "text-white/60"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div
                  className={`text-xs font-medium transition-colors ${
                    active ? "text-white" : "text-white/80"
                  }`}
                >
                  {s}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="mt-8 text-center">
        <Link
          to="/ecossistema"
          className="inline-block font-mono text-[11px] uppercase tracking-widest px-6 py-3 border border-white/15 rounded-sm hover:bg-white/5 hover:border-white/30 transition"
        >
          Ver ecossistema detalhado →
        </Link>
      </div> */}
    </Section>
  );
}

/* ---------------- PARA QUEM ---------------- */
/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-bg-base/80 backdrop-blur mb-8">
          <div className="size-1.5 bg-tech-neon rounded-full animate-pulse shadow-[0_0_8px_var(--color-tech-neon)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
            PRÓXIMO NÍVEL
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.02] text-balance mb-6">
          Vamos colocar o seu negócio pet no{" "}
          <span className="text-gradient-brand">próximo nível?</span>
        </h2>
        <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
          Em 20 minutos a gente mostra como o PetOps se encaixa na
          sua operação — sem compromisso.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            to="/contato"
            className="font-mono text-[12px] uppercase tracking-widest px-10 py-5 bg-white text-bg-base rounded-md font-semibold hover:bg-white/90 transition shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)]"
          >
            Falar com a PetOps →
          </Link>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
            Demo de 20 min · sem compromisso
          </div>

          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/5 w-full max-w-md justify-center">
            <Link
              to="/tech"
              className="font-mono text-[11px] uppercase tracking-widest text-tech-cyan/80 hover:text-tech-cyan transition"
            >
              Ver a Tech →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

