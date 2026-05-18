import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a PetOps — Ecossistema premium para o mercado pet" },
      {
        name: "description",
        content:
          "Construído para quem quer evoluir o mercado pet. Conheça a visão por trás do ecossistema PetOps.",
      },
      { property: "og:title", content: "Sobre a PetOps" },
      { property: "og:description", content: "Construído para quem quer evoluir o mercado pet." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        <section className="relative px-6 lg:px-10 pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="relative max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-white/30" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                SOBRE
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.02] max-w-4xl text-balance">
              Construído para quem quer{" "}
              <span className="text-gradient-brand">evoluir o mercado pet</span>
            </h1>
          </div>
        </section>

        <Section>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <p className="text-lg text-white/70 leading-relaxed">
              A PetOps nasceu de uma visão simples: o mercado pet merece um
              ecossistema completo, não soluções isoladas.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Reunimos tecnologia de ponta e uma linha premium de cuidado para
              elevar simultaneamente a operação e a experiência do cliente final.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Pet shops, banho e tosa, clínicas e operações em expansão ganham
              uma camada inteligente que automatiza, organiza e amplia margem.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Mais que uma marca: um padrão para o que vem por aí no setor.
            </p>
          </div>
        </Section>

        <Section eyebrow="Princípios">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Tecnologia que simplifica", d: "Sistema invisível, decisão visível." },
              { t: "Cuidado que gera valor", d: "Cada produto eleva a percepção da marca." },
              { t: "Inteligência integrada", d: "Tech e Care trabalham na mesma direção." },
            ].map((p) => (
              <div key={p.t} className="p-8 rounded-xl border border-white/10 bg-bg-surface">
                <h3 className="text-xl font-medium text-white mb-3">{p.t}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <ParaQuem />
        <Prova />
      </main>
      <Footer />
    </div>
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
    <Section eyebrow="Para quem é" title="Construído para o novo negócio pet">
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
    <Section eyebrow="Por que PetOps" title="Três motivos para começar agora">
      <div className="grid md:grid-cols-3 gap-4">
        {pillars.map((p, i) => (
          <div key={p.t} className="p-10 rounded-xl border border-white/10 bg-bg-surface relative">
            <div className="font-mono text-[10px] text-white/30 tracking-widest mb-6">
              {String(i + 1).padStart(2, "0")} / 03
            </div>
            <div className={`h-px w-10 bg-${p.c}/60 mb-6`} />
            <div className="text-2xl font-medium text-white tracking-tight mb-3">{p.t}</div>
            <p className="text-sm text-white/55 leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
