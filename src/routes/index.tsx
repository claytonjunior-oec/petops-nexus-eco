import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import heroHusky from "@/assets/hero-husky.jpg";
import heroTech from "@/assets/hero-tech.jpg";
import heroCare from "@/assets/hero-care.jpg";

import ogImage from "@/assets/og-petops.jpg";
import { Heart, Sparkles, Star, MessageCircle } from "lucide-react";
import { careProducts } from "@/data/care-products";

const SITE_URL = "https://petops-nexus-eco.lovable.app";
const OG_IMAGE_URL = `${SITE_URL}${ogImage}`;

const faqs = [
  {
    q: "Qual o melhor sistema de gestão para petshop em 2026?",
    a: "O PetOps é o sistema mais completo para petshops modernos: une agenda inteligente, atendimento automatizado no WhatsApp com IA, prontuário veterinário, PDV, financeiro e a linha Care de produtos premium — tudo em uma única plataforma, sem integração frágil.",
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
    q: "Como começar a vender produtos premium no meu petshop?",
    a: "A linha PetOps Care entrega shampoos, condicionadores, colônias e produtos de cuidado em embalagens gourmet, com planos de assinatura mensal (Start, Pro e Max) que abastecem o salão e o balcão de revenda — com margem real e previsibilidade.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema para Petshop com Automação no WhatsApp | PetOps" },
      {
        name: "description",
        content:
          "Sistema completo para petshop, clínica vet, banho & tosa, daycare e hotel pet. Agenda inteligente, atendimento com IA no WhatsApp, prontuário, PDV e linha premium de produtos. Reduza no-show em 42%.",
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
          "Tech + Care. O ecossistema que automatiza a operação e eleva a margem do petshop moderno. Demo gratuita.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "PetOps · Tech + Care · O futuro da operação pet" },
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
            "Sistema de gestão para petshop, clínica veterinária, banho & tosa, daycare e hotel pet com automação no WhatsApp e linha premium de produtos de cuidado.",
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
      <Numeros />
      <Problema />
      <AntesDepois />
      <Conceito />
      <TechSection />
      <CareSection />
      <Together />
      <ParaQuem />
      <CalculadoraROI />
      <Prova />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileFloatingCTA />
    </div>
  );
}

/* ---------------- ANTES / DEPOIS ---------------- */
function AntesDepois() {
  const rows = [
    { antes: "Agenda em caderno e WhatsApp", depois: "Agenda inteligente com IA" },
    { antes: "No-show de 25–35%", depois: "No-show abaixo de 10%" },
    { antes: "Atendente respondendo o mesmo todo dia", depois: "Haku IA responde, qualifica e agenda" },
    { antes: "Cliente some e ninguém percebe", depois: "Reativação automática + recompra" },
    { antes: "Margem fina em banho e tosa", depois: "Care premium na sacola eleva o ticket" },
    { antes: "Receita imprevisível", depois: "Assinatura recorrente + DRE em tempo real" },
  ];
  return (
    <Section
      eyebrow="Antes / Depois"
      title="O salto da operação manual para a operação automatizada."
      intro="O que muda na rotina do petshop quando o ecossistema PetOps entra no lugar do improviso."
    >
      <div className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur overflow-hidden">
        <div className="grid grid-cols-2">
          <div className="p-5 md:p-6 border-r border-white/10 bg-red-500/5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-400/70 flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-red-400/60" />
              Antes
            </div>
          </div>
          <div className="p-5 md:p-6 bg-tech-cyan/5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-tech-cyan flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-tech-neon shadow-[0_0_8px_var(--color-tech-neon)]" />
              Depois · com PetOps
            </div>
          </div>
        </div>
        {rows.map((r, i) => (
          <div key={r.depois} className="grid grid-cols-2 border-t border-white/5">
            <div className="p-5 md:p-6 border-r border-white/10 text-sm text-white/55 line-through decoration-white/15 flex items-start gap-3">
              <span className="font-mono text-[9px] text-white/25 tracking-widest shrink-0 mt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">{r.antes}</span>
            </div>
            <div className="p-5 md:p-6 text-sm text-white font-medium flex items-start gap-3">
              <span className="font-mono text-[9px] text-tech-cyan tracking-widest shrink-0 mt-1">
                →
              </span>
              <span className="leading-relaxed">{r.depois}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CALCULADORA ROI ---------------- */
function CalculadoraROI() {
  const [banhos, setBanhos] = useState(200);
  const [ticket, setTicket] = useState(80);
  const [noshowAtual, setNoshowAtual] = useState(25);

  const noshowAlvo = 8;
  const perdaAtual = Math.round((banhos * (noshowAtual / 100)) * ticket);
  const perdaPetops = Math.round((banhos * (noshowAlvo / 100)) * ticket);
  const economiaMes = perdaAtual - perdaPetops;
  const economiaAno = economiaMes * 12;
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const mensagem = encodeURIComponent(
    `Olá! Calculei meu ROI no site da PetOps:\n\n• ${banhos} banhos/mês\n• Ticket médio R$ ${ticket}\n• No-show atual ${noshowAtual}%\n\nEconomia projetada: R$ ${fmt(economiaMes)}/mês (R$ ${fmt(economiaAno)}/ano).\n\nQuero ver uma demo.`,
  );

  return (
    <Section
      eyebrow="Calculadora · ROI"
      title="Quanto o no-show está custando ao seu petshop?"
      intro="Ajuste os controles abaixo com a realidade da sua operação e veja a economia projetada ao operar com o PetOps."
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur p-6 md:p-8">
        {/* Inputs */}
        <div className="space-y-7">
          <RangeField
            label="Banhos por mês"
            value={banhos}
            min={30}
            max={1500}
            step={10}
            display={fmt(banhos)}
            color="tech-cyan"
            onChange={setBanhos}
          />
          <RangeField
            label="Ticket médio (R$)"
            value={ticket}
            min={40}
            max={300}
            step={5}
            display={`R$ ${fmt(ticket)}`}
            color="care-blue"
            onChange={setTicket}
          />
          <RangeField
            label="No-show atual (%)"
            value={noshowAtual}
            min={5}
            max={50}
            step={1}
            display={`${noshowAtual}%`}
            color="tech-neon"
            onChange={setNoshowAtual}
          />
        </div>

        {/* Result */}
        <div className="relative rounded-xl border border-tech-cyan/30 bg-gradient-to-br from-bg-base via-bg-surface to-tech-cyan/10 p-6 md:p-8 glow-tech overflow-hidden">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan mb-6 flex items-center gap-2">
            <div className="size-1.5 bg-tech-neon rounded-full animate-pulse" />
            Projeção PetOps
          </div>

          <div className="space-y-5 mb-6">
            <div>
              <div className="font-mono text-[10px] text-white/40 tracking-widest mb-1">
                Você está perdendo hoje
              </div>
              <div className="text-2xl md:text-3xl font-medium text-red-300/90 line-through decoration-red-300/30">
                R$ {fmt(perdaAtual)} <span className="text-xs text-white/40 no-underline">/ mês</span>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] text-tech-cyan tracking-widest mb-1">
                Com PetOps (no-show ≤ 8%)
              </div>
              <div className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-none">
                R$ {fmt(economiaMes)}
              </div>
              <div className="text-xs text-white/50 mt-1">de economia projetada por mês</div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Em 12 meses
              </span>
              <span className="text-2xl font-medium text-tech-neon">
                R$ {fmt(economiaAno)}
              </span>
            </div>
          </div>

          <a
            href={`https://wa.me/5511918967593?text=${mensagem}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-mono text-[11px] uppercase tracking-widest px-5 py-4 bg-white text-bg-base rounded-md font-semibold hover:bg-white/90 transition"
          >
            Quero esse ROI no meu petshop →
          </a>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-widest text-white/30 text-center">
            Cálculo estimado. Base: petshops PetOps 2024–2026.
          </p>
        </div>
      </div>
    </Section>
  );
}

function RangeField({
  label,
  value,
  min,
  max,
  step,
  display,
  color,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  color: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="font-mono text-[10px] uppercase tracking-widest text-white/50">
          {label}
        </label>
        <span className={`font-medium text-xl text-${color}`}>{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-tech-cyan"
        aria-label={label}
      />
      <div className="flex justify-between font-mono text-[9px] text-white/25 tracking-widest mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
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
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-care-green text-bg-base rounded-md font-mono text-[11px] uppercase tracking-widest font-semibold shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)]"
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
    { n: "3.2×", l: "Recompra média do tutor", c: "care-blue" },
    { n: "+R$ 18k", l: "Margem extra/mês com Care", c: "tech-neon" },
    { n: "120+", l: "Petshops operando", c: "care-green" },
  ];
  return (
    <Section
      eyebrow="Resultados"
      title="Os números do novo petshop automatizado."
      intro="Dados consolidados de petshops, clínicas e daycares operando com o ecossistema PetOps entre 2024 e 2026."
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
      title="Tudo que você precisa saber antes de modernizar seu petshop."
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

        {/* Right — Care (image) */}
        <div className="w-1/2 relative overflow-hidden hidden">
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
          <div className="absolute top-8 right-8 font-mono text-[10px] text-care-blue tracking-[0.25em] z-10 flex items-center gap-2">
            CARE · CUIDADO
            <div className="size-1.5 bg-care-green rounded-full shadow-[0_0_8px_var(--color-care-green)]" />
          </div>

          {/* Floating product/rating card */}
          <div className="absolute top-24 right-8 z-10 rounded-lg border border-white/10 bg-bg-base/70 backdrop-blur-md px-4 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
            <div className="font-mono text-[9px] uppercase tracking-widest text-white/50 mb-1">
              Recompra
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-medium text-white">3.2×</span>
              <Heart className="size-3 text-care-blue fill-care-blue" />
            </div>
          </div>
        </div>

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
                Ecossistema Unificado
              </span>
              <div className="w-px h-3 bg-white/20" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                Tech + Care
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-medium tracking-tight text-white leading-[1.02] text-balance mb-6 [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]">
              O futuro da operação pet{" "}
              <span className="text-gradient-brand">começa aqui.</span>
            </h1>

            <p className="text-base md:text-xl text-white/70 max-w-2xl text-pretty font-light leading-relaxed mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
              Menos no-show, mais recompra e a sua equipe livre do WhatsApp manual. Tecnologia que opera sozinha + uma linha premium de cuidado que eleva a sua margem.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45 mb-10">
              Pet shops · Clínicas · Banho &amp; tosa · Daycare · Hotel
            </p>

            <div className="flex flex-col gap-3 w-full max-w-md">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/tech"
                  className="group relative px-5 py-4 bg-bg-surface/80 backdrop-blur-md border border-tech-cyan/30 rounded-md hover:border-tech-cyan hover:shadow-[0_0_24px_-4px_var(--color-tech-cyan)] transition-all"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-tech-cyan">
                    Conhecer Tech
                  </span>
                </Link>
                <Link
                  to="/care"
                  className="group relative px-5 py-4 bg-bg-surface/80 backdrop-blur-md border border-care-blue/30 rounded-md hover:border-care-blue hover:shadow-[0_0_24px_-4px_var(--color-care-blue)] transition-all"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-care-blue">
                    Conhecer Care
                  </span>
                </Link>
              </div>
              <Link
                to="/ecossistema"
                className="px-6 py-4 bg-white text-bg-base rounded-md hover:bg-white/90 font-mono text-[11px] uppercase tracking-widest font-semibold transition"
              >
                Ver o ecossistema completo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom UI bar */}
        <div className="absolute bottom-0 inset-x-0 h-12 border-t border-white/5 bg-bg-base/60 backdrop-blur items-center justify-between px-6 lg:px-10 z-40 hidden md:flex">
          <div className="font-mono text-[10px] text-white/40 tracking-widest">// PETOPS · ECOSSISTEMA</div>
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
    { t: "Eleve a experiência do cliente", d: "Cuidado premium em cada toque, da recepção ao pós-serviço." },
    { t: "Gere mais valor com tecnologia e produtos", d: "Tech reduz custo. Care eleva margem. Juntos, multiplicam." },
  ];
  return (
    <Section
      eyebrow="Conceito"
      title={<>Mais que uma marca. Um ecossistema para o mercado pet.</>}
      intro="A PetOps integra tecnologia, automação e soluções de cuidado para transformar a rotina de negócios pet em operações mais inteligentes, mais lucrativas e mais desejadas pelos clientes."
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

        {/* Mock dashboard */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] glow-tech">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 tracking-widest">
                <div className="size-1.5 bg-tech-neon rounded-full animate-pulse" />
                PETOPS · TECH
              </div>
              <div className="flex gap-1.5">
                <div className="size-2 rounded-full bg-white/10" />
                <div className="size-2 rounded-full bg-white/10" />
                <div className="size-2 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <Stat label="Reativação" color="tech-neon" />
              <Stat label="No-show" color="tech-cyan" />
            </div>

            <div className="rounded-lg border border-white/5 bg-bg-base/60 p-5">
              <div className="font-mono text-[10px] text-white/40 tracking-widest mb-4">
                FLUXO OPERACIONAL
              </div>
              <div className="flex items-end gap-2 h-24">
                {[40, 60, 35, 80, 55, 95, 70].map((h, i) => (
                  <div key={i} className="flex-1 relative">
                    <div
                      className={`w-full rounded-t-sm ${
                        i === 5
                          ? "bg-gradient-to-t from-tech-cyan to-tech-neon shadow-[0_0_15px_var(--color-tech-cyan)]"
                          : "bg-white/10"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {blocks.slice(0, 6).map((b) => (
                <div
                  key={b}
                  className="p-3 rounded-md border border-white/5 bg-bg-base/40 font-mono text-[10px] text-white/60 tracking-wider truncate"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -inset-4 bg-tech-cyan/5 blur-3xl -z-10 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, color }: { label: string; color: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/60 p-4">
      <div className="font-mono text-[10px] text-white/40 tracking-widest mb-2">{label}</div>
      <div className="flex items-end justify-between">
        <div className="h-6 w-16 rounded bg-white/5" />
        <div className={`h-1 w-8 rounded-full bg-${color}/40`} />
      </div>
    </div>
  );
}

/* ---------------- CARE SECTION ---------------- */
function CareSection() {
  const featured = careProducts.slice(0, 6);
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/2 right-0 size-[600px] bg-care-blue/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Real Care products */}
        <div className="relative order-2 lg:order-1">
          <div className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-6 md:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] glow-care">
            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-[10px] text-white/40 tracking-widest">
                PETOPS · CARE
              </div>
              <div className="font-mono text-[10px] text-care-blue/70 tracking-widest">
                LINHA PROFISSIONAL
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {featured.map((p) => (
                <Link
                  key={p.id}
                  to="/care"
                  className="group relative rounded-lg border border-white/10 bg-gradient-to-b from-bg-base to-bg-elevated p-3 flex flex-col hover:border-care-blue/40 transition overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-care-blue/15 to-transparent opacity-50 group-hover:opacity-100 transition" />
                  <div className="font-mono text-[9px] text-white/30 tracking-widest relative mb-2">
                    {p.code}
                  </div>
                  <div className="relative aspect-square rounded-md bg-white/[0.02] border border-white/5 flex items-center justify-center overflow-hidden mb-3">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="size-full object-contain p-2 group-hover:scale-105 transition"
                      />
                    ) : (
                      <div className="size-8 rounded bg-gradient-to-br from-care-blue/40 to-care-green/20" />
                    )}
                  </div>
                  <div className="relative">
                    <div className="text-[10px] text-care-blue/70 font-mono tracking-widest uppercase mb-1">
                      {p.category}
                    </div>
                    <div className="text-[11px] text-white/85 font-medium leading-tight line-clamp-2">
                      {p.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-white/40 tracking-widest">
              <span>{careProducts.length} produtos na linha</span>
              <Link to="/care" className="text-care-blue hover:text-white transition">
                Ver todos →
              </Link>
            </div>
          </div>
          <div className="absolute -inset-4 bg-care-blue/5 blur-3xl -z-10 rounded-3xl" />
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-care-blue/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-care-blue">
              MÓDULO 02 · PETOPS CARE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
            Produtos para elevar o cuidado e o valor percebido.
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-8">
            Linha premium pensada para banho, tosa, clínica e revenda. Fórmulas
            de alta qualidade em embalagens que comunicam valor.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/care"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 bg-care-blue text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
            >
              Conhecer linha Care
            </Link>
            <Link
              to="/contato"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 border border-white/15 rounded-sm hover:bg-white/5 transition"
            >
              Quero revender
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEMA ---------------- */
function Problema() {
  const dores = [
    "Agenda bagunçada no WhatsApp",
    "Cliente que some e ninguém percebe",
    "Atendente respondendo o mesmo todo dia",
    "Sem previsibilidade de receita no fim do mês",
    "Ficha do pet em caderno e planilha",
    "Tutor sem lembrete de vacina",
  ];
  return (
    <Section
      eyebrow="O problema"
      title={<>Operar pet hoje é apagar incêndio o dia inteiro.</>}
      intro="Se algum desses pontos parece familiar, a sua operação está deixando dinheiro e cliente na mesa."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {dores.map((d, i) => (
          <div
            key={d}
            className="flex items-start gap-3 p-5 rounded-lg border border-white/8 bg-bg-surface/50"
          >
            <div className="mt-1 size-1.5 rounded-full bg-red-400/60 shrink-0 shadow-[0_0_8px_rgba(248,113,113,0.4)]" />
            <div>
              <div className="font-mono text-[9px] text-white/30 tracking-widest mb-1">
                DOR.{String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-sm text-white/70 line-through decoration-white/15">
                {d}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TOGETHER ---------------- */
function Together() {
  const steps = ["Captação", "Atendimento", "Agendamento", "Execução", "Pós-serviço", "Recompra"];
  return (
    <Section
      eyebrow="Tech + Care"
      title={<>Sozinhos, já entregam. Juntos, viram um <span className="text-gradient-brand">multiplicador</span>.</>}
      intro="Tech reduz o custo de operar. Care eleva a margem por serviço. No mesmo ecossistema, viram recompra automatizada com produto na sacola."
    >
      <div className="grid md:grid-cols-3 gap-4 mb-10">
        <div className="p-8 rounded-xl border border-tech-cyan/20 bg-bg-surface relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-tech-cyan/40" />
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-tech-cyan mb-4">
            PetOps Tech
          </div>
          <div className="text-2xl font-medium text-white tracking-tight mb-2">
            Reduz custo operacional
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            Agenda, IA no WhatsApp, lembretes e gestão. Sua equipe para de
            digitar e volta a vender.
          </p>
        </div>

        <div className="p-8 rounded-xl border border-white/15 bg-gradient-to-br from-tech-cyan/10 via-bg-surface to-care-blue/10 relative overflow-hidden md:scale-105 md:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-tech-cyan to-care-blue" />
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/80 mb-4 flex items-center gap-2">
            <span className="text-tech-cyan">Tech</span>
            <span className="text-white/40">+</span>
            <span className="text-care-blue">Care</span>
          </div>
          <div className="text-2xl font-medium text-white tracking-tight mb-2">
            Multiplica o LTV do cliente
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-4">
            Recompra automatizada, produto premium na sacola e tutor fidelizado
            por experiência — não por desconto.
          </p>
          <div className="font-mono text-[10px] text-white/50 tracking-widest">
            1 + 1 = 3
          </div>
        </div>

        <div className="p-8 rounded-xl border border-care-blue/20 bg-bg-surface relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-care-blue/40" />
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-care-blue mb-4">
            PetOps Care
          </div>
          <div className="text-2xl font-medium text-white tracking-tight mb-2">
            Eleva margem por serviço
          </div>
          <p className="text-sm text-white/55 leading-relaxed">
            Linha premium de cuidado em embalagens que comunicam valor — para
            usar, vender e fidelizar.
          </p>
        </div>
      </div>

      <div className="relative rounded-2xl border border-white/10 bg-bg-surface/40 backdrop-blur p-6 md:p-8">
        <div className="font-mono text-[10px] text-white/40 tracking-widest mb-6 text-center">
          FLUXO UNIFICADO DA JORNADA DO TUTOR
        </div>
        <div className="absolute top-[60%] left-6 right-6 h-px bg-gradient-to-r from-tech-cyan/40 via-white/20 to-care-blue/40 hidden md:block" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center text-center group">
              <div className="size-10 rounded-full border border-white/15 bg-bg-base flex items-center justify-center mb-2 backdrop-blur group-hover:border-white/40 transition relative z-10">
                <div className="font-mono text-[9px] text-white/60">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div className="text-xs text-white/80 font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/ecossistema"
          className="inline-block font-mono text-[11px] uppercase tracking-widest px-6 py-3 border border-white/15 rounded-sm hover:bg-white/5 transition"
        >
          Ver ecossistema detalhado →
        </Link>
      </div>
    </Section>
  );
}

/* ---------------- PARA QUEM ---------------- */
function ParaQuem() {
  const personas = [
    {
      tag: "Pet shop em expansão",
      pain: "Equipe travada no WhatsApp e sem padrão entre lojas.",
      solve: "Atendimento centralizado, multi-unidade e linha Care para revenda.",
    },
    {
      tag: "Banho & tosa de bairro",
      pain: "Agenda no caderno, no-show alto e cliente que some.",
      solve: "Agenda inteligente, lembretes automáticos e reativação no WhatsApp.",
    },
    {
      tag: "Clínica veterinária",
      pain: "Prontuário disperso e tutor que esquece reforço de vacina.",
      solve: "Prontuário digital, alerta de vacina automático e portal do tutor.",
    },
    {
      tag: "Daycare / Hotel",
      pain: "Pais ansiosos pedindo notícia do pet o dia todo.",
      solve: "Check-in com foto, atualizações no WhatsApp e Care premium na hospedagem.",
    },
  ];
  return (
    <Section eyebrow="Para quem é" title="Construído para o novo negócio pet.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {personas.map((p, i) => (
          <div
            key={p.tag}
            className="p-6 rounded-xl border border-white/10 bg-bg-surface hover:border-white/25 transition flex flex-col"
          >
            <div className="font-mono text-[10px] text-white/30 mb-3 tracking-widest">
              T.{String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-white font-medium leading-tight mb-4">{p.tag}</div>
            <div className="space-y-3 mt-auto">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-red-400/60 mb-1">Dor</div>
                <p className="text-xs text-white/55 leading-relaxed">{p.pain}</p>
              </div>
              <div className="h-px bg-white/5" />
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-tech-neon/70 mb-1">PetOps</div>
                <p className="text-xs text-white/75 leading-relaxed">{p.solve}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROVA ---------------- */
function Prova() {
  const pillars = [
    {
      t: "Construído por quem opera",
      d: "Nasceu dentro de operações pet reais — cada módulo resolve uma dor que vivemos no balcão.",
      c: "tech-cyan",
    },
    {
      t: "Plataforma única, não um Frankenstein",
      d: "Agenda, atendimento, financeiro, prontuário e produto no mesmo lugar. Sem integração frágil, sem retrabalho.",
      c: "tech-neon",
    },
    {
      t: "Pronto para escalar",
      d: "Multi-unidade com dados isolados, app no celular online e offline e sistema seguro em nuvem.",
      c: "care-blue",
    },
  ];
  return (
    <Section
      eyebrow="Por que PetOps"
      title="Três motivos para começar agora."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <div key={p.t} className="p-10 rounded-xl border border-white/10 bg-bg-surface relative">
            <div className="font-mono text-[10px] text-white/30 tracking-widest mb-6">
              {String(i + 1).padStart(2, "0")} / 03
            </div>
            <div className={`h-px w-10 bg-${p.c}/60 mb-6`} />
            <div className="text-2xl font-medium text-white tracking-tight mb-3">
              {p.t}
            </div>
            <p className="text-sm text-white/55 leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 size-[500px] bg-care-blue/10 blur-[140px] rounded-full pointer-events-none" />

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
          Em 20 minutos a gente mostra como o ecossistema PetOps se encaixa na
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
              ← Ver a Tech
            </Link>
            <div className="w-px h-3 bg-white/15" />
            <Link
              to="/care"
              className="font-mono text-[11px] uppercase tracking-widest text-care-blue/80 hover:text-care-blue transition"
            >
              Ver a Care →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

