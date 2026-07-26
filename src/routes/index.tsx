import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import heroHusky from "@/assets/hero-husky.jpg";
import heroTech from "@/assets/hero-tech.jpg";
import ogImage from "@/assets/og-petops.jpg";
import { MessageCircle } from "lucide-react";

const SITE_URL = "https://petops.org";
const OG_IMAGE_URL = `${SITE_URL}${ogImage}`;

const faqs = [
  {
    q: "O que um sistema de gestão para petshop precisa ter?",
    a: "Uma boa plataforma precisa reunir agenda, cadastro de clientes e pets, atendimento, comandas, vendas, estoque e financeiro. Operações com clínica, creche ou hotel também precisam de módulos específicos para prontuários, reservas e acompanhamento.",
  },
  {
    q: "Como o PetOps ajuda a reduzir faltas nos agendamentos?",
    a: "O PetOps permite organizar a agenda, enviar lembretes e facilitar confirmações e reagendamentos. Isso reduz o trabalho manual da equipe e ajuda o tutor a não esquecer o horário marcado.",
  },
  {
    q: "O PetOps automatiza o atendimento pelo WhatsApp?",
    a: "Sim. No plano Premium, a Haku pode responder dúvidas, conduzir agendamentos e transferir a conversa para uma pessoa da equipe quando necessário, seguindo as regras configuradas para a empresa.",
  },
  {
    q: "Quanto custa o PetOps?",
    a: "Existe um plano gratuito permanente e planos pagos para operações que precisam de mais usuários, módulos e automações. Os valores e recursos atualizados estão disponíveis na página de planos.",
  },
  {
    q: "O PetOps funciona para clínica veterinária, creche e hotel pet?",
    a: "Sim. Os planos Profissional e Premium incluem recursos para prontuários, vacinas, exames, reservas, check-in, acompanhamento e assinaturas recorrentes.",
  },
  {
    q: "O PetOps substitui planilhas e cadernos?",
    a: "O sistema centraliza informações da operação em um único lugar, reduzindo a dependência de planilhas, cadernos e anotações espalhadas. A equipe passa a consultar agenda, clientes, serviços e dados financeiros no mesmo ambiente.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sistema de gestão para petshop com WhatsApp e IA | PetOps" },
      {
        name: "description",
        content:
          "Organize agenda, clientes, atendimento, vendas, estoque e financeiro do seu petshop. Automação no WhatsApp, módulos para clínica, creche e hotel pet.",
      },
      {
        name: "keywords",
        content:
          "sistema para petshop, software petshop, gestão petshop, agenda petshop, whatsapp petshop, sistema clínica veterinária, sistema banho e tosa",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: "PetOps" },
      { property: "og:title", content: "PetOps | Sistema de gestão para negócios pet" },
      {
        property: "og:description",
        content:
          "Agenda, atendimento, vendas, estoque, financeiro e automações em uma única plataforma para negócios pet.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "PetOps, sistema de gestão para negócios pet" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PetOps | Sistema de gestão para negócios pet" },
      {
        name: "twitter:description",
        content: "Organize e automatize a operação do seu petshop em uma única plataforma.",
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
          operatingSystem: "Web",
          description:
            "Sistema de gestão para petshop, clínica veterinária, banho e tosa, creche e hotel pet com automação no WhatsApp.",
          url: `${SITE_URL}/`,
          image: OG_IMAGE_URL,
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "0",
            highPrice: "497",
            offerCount: "4",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
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
        Ver demo
      </Link>
    </div>
  );
}

function FAQ() {
  return (
    <Section
      eyebrow="Perguntas frequentes"
      title="O que você precisa saber antes de modernizar seu petshop"
      intro="Respostas diretas sobre implantação, recursos e uso do PetOps."
    >
      <div className="grid gap-3 max-w-4xl">
        {faqs.map((item, index) => (
          <details
            key={item.q}
            className="group rounded-xl border border-white/10 bg-bg-surface/60 backdrop-blur p-5 md:p-6 open:bg-bg-elevated transition"
          >
            <summary className="cursor-pointer list-none flex items-start gap-4">
              <span className="font-mono text-[10px] text-white/30 tracking-widest mt-1 shrink-0">
                {String(index + 1).padStart(2, "0")}
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

function Hero() {
  return (
    <main className="relative pt-16 min-h-dvh flex items-stretch">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroHusky}
          alt="Cachorro da raça husky representando a PetOps"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1920}
          height={800}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-base/75 via-bg-base/45 to-bg-base" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-base/85 via-transparent to-bg-base/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 via-transparent to-care-blue/15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-25 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="relative flex-1 flex min-h-[720px] z-10">
        <div className="w-1/2 relative border-r border-white/5 overflow-hidden hidden">
          <img
            src={heroTech}
            alt="Profissional de petshop operando um tablet ao lado de um cachorro"
            className="absolute inset-0 w-full h-full object-cover"
            width={1024}
            height={1280}
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-30 px-5 sm:px-6">
          <div className="max-w-4xl w-full flex flex-col items-center text-center">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-bg-base/80 backdrop-blur-xl mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
                Sistema de gestão para negócios pet
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-medium tracking-tight text-white leading-[1.02] text-balance mb-6 [text-shadow:0_4px_30px_rgba(0,0,0,0.5)]">
              Sua operação organizada. Seu atendimento <span className="text-gradient-brand">mais inteligente</span>
            </h1>

            <p className="text-base md:text-xl text-white/72 max-w-2xl text-pretty font-light leading-relaxed mb-4 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
              Agenda, clientes, WhatsApp, vendas, estoque, financeiro e automações em uma única plataforma para petshops, clínicas, banho e tosa, creches e hotéis pet.
            </p>

            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 mb-9">
              Plano gratuito permanente · sem fidelidade
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                to="/contato"
                className="px-7 py-4 bg-tech-cyan text-bg-base rounded-md hover:opacity-90 font-mono text-[11px] uppercase tracking-widest font-semibold transition text-center shadow-[0_18px_45px_-20px_var(--color-tech-cyan)]"
              >
                Ver demonstração
              </Link>
              <Link
                to="/planos"
                className="px-7 py-4 bg-bg-surface/80 backdrop-blur-md border border-white/20 rounded-md hover:border-white/40 transition text-center"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-white">
                  Conhecer planos
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-12 border-t border-white/5 bg-bg-base/60 backdrop-blur items-center justify-between px-6 lg:px-10 z-40 hidden md:flex">
          <div className="font-mono text-[10px] text-white/40 tracking-widest">// PETOPS · TECH</div>
          <div className="font-mono text-[10px] text-white/40 tracking-widest">EXPLORAR ↓</div>
        </div>
      </div>
    </main>
  );
}

function TechSection() {
  const blocks = [
    "Agenda inteligente",
    "WhatsApp com IA",
    "Lembretes automáticos",
    "Check-in e acompanhamento",
    "Reativação de clientes",
    "Gestão operacional",
  ];

  return (
    <section className="relative py-20 md:py-28 px-5 sm:px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/2 left-0 size-[600px] bg-tech-cyan/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-tech-cyan/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
              Operação centralizada
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
            Menos ferramentas espalhadas. Mais controle da operação.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Centralize a rotina do seu negócio e reduza tarefas manuais. Sua equipe acompanha agenda, atendimento, serviços e resultados sem depender de planilhas e anotações soltas.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 bg-tech-cyan text-bg-base rounded-md font-semibold hover:opacity-90 transition"
            >
              Ver demonstração
            </Link>
            <Link
              to="/tech"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 border border-white/15 rounded-md hover:bg-white/5 transition"
            >
              Explorar recursos
            </Link>
          </div>
        </div>

        <LiveTechPanel blocks={blocks} />
      </div>
    </section>
  );
}

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.35 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function LiveTechPanel({ blocks }: { blocks: string[] }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setActive((current) => (current + 1) % blocks.length), 1600);
    return () => clearInterval(id);
  }, [inView, blocks.length]);

  return (
    <div ref={ref} className="relative">
      <div className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] glow-tech">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 font-mono text-[10px] text-white/45 tracking-widest">
            <div className="size-1.5 bg-tech-neon rounded-full animate-pulse" />
            PETOPS · OPERAÇÃO
          </div>
          <div className="font-mono text-[9px] text-white/30 tracking-widest">VISÃO UNIFICADA</div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <LiveStat label="Agenda" value="Organizada" sub="serviços e profissionais" />
          <LiveStat label="Atendimento" value="Centralizado" sub="histórico por cliente" />
        </div>

        <div className="rounded-lg border border-white/5 bg-bg-base/60 p-5">
          <div className="font-mono text-[10px] text-white/40 tracking-widest mb-4">
            FLUXO DA OPERAÇÃO
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {blocks.map((block, index) => (
              <div
                key={block}
                className={`p-3 rounded-md border font-mono text-[10px] tracking-wider transition-all duration-500 ${
                  index === active
                    ? "border-tech-cyan/50 bg-tech-cyan/10 text-white shadow-[0_0_20px_-5px_var(--color-tech-cyan)]"
                    : "border-white/5 bg-bg-base/40 text-white/60"
                }`}
              >
                {block}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -inset-4 bg-tech-cyan/5 blur-3xl -z-10 rounded-3xl" />
    </div>
  );
}

function LiveStat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/60 p-4">
      <div className="font-mono text-[10px] text-white/40 tracking-widest mb-2">{label}</div>
      <div className="text-lg sm:text-xl font-medium text-tech-cyan leading-none">{value}</div>
      <div className="font-mono text-[9px] text-white/35 tracking-wider mt-2">{sub}</div>
    </div>
  );
}

function FinalCTA() {
  return (
    <>
      <FAQ />
      <section className="relative py-24 md:py-32 px-5 sm:px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-bg-base/80 backdrop-blur mb-8">
            <div className="size-1.5 bg-tech-neon rounded-full animate-pulse shadow-[0_0_8px_var(--color-tech-neon)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
              Demonstração personalizada
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.02] text-balance mb-6">
            Veja como o PetOps se encaixa na <span className="text-gradient-brand">sua rotina.</span>
          </h2>
          <p className="text-lg text-white/55 max-w-xl mx-auto mb-10">
            Conte como sua operação funciona e receba uma apresentação focada nos módulos que realmente fazem sentido para o seu negócio.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Link
              to="/contato"
              className="font-mono text-[12px] uppercase tracking-widest px-10 py-5 bg-white text-bg-base rounded-md font-semibold hover:bg-white/90 transition shadow-[0_20px_60px_-15px_rgba(255,255,255,0.3)]"
            >
              Solicitar demonstração →
            </Link>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
              Sem compromisso · atendimento pelo WhatsApp
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
