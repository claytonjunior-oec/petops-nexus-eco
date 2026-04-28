import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/tech")({
  head: () => ({
    meta: [
      { title: "PetOps Tech — Automação e IA para negócios pet" },
      {
        name: "description",
        content:
          "Plataforma com agenda inteligente, WhatsApp com IA, automações e gestão operacional para pet shops, clínicas e banho e tosa.",
      },
      { property: "og:title", content: "PetOps Tech" },
      {
        property: "og:description",
        content: "A camada inteligente do seu negócio pet.",
      },
    ],
  }),
  component: TechPage,
});

const modules = [
  { name: "Agenda inteligente", desc: "Encaixe automático, otimização de horários e visão completa do dia." },
  { name: "WhatsApp com IA", desc: "Atendimento automatizado, qualificação e confirmação em tempo real." },
  { name: "Lembretes automáticos", desc: "Reduza no-shows com mensagens disparadas no momento certo." },
  { name: "Check-in com foto", desc: "Recepção digital com registro visual e acompanhamento de cada serviço." },
  { name: "Reativação e recorrência", desc: "Réguas inteligentes para trazer cliente de volta sem esforço manual." },
  { name: "Gestão operacional", desc: "Caixa, estoque, comissões e relatórios em uma camada só." },
];

const dores = [
  "Cliente que esquece o agendamento",
  "Atendente sobrecarregado no WhatsApp",
  "Falta de previsibilidade de receita",
  "Cliente que some e não volta",
  "Operação dependente de planilhas",
];

function TechPage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative px-6 lg:px-10 pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 size-[600px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
                MÓDULO 01 · TECH
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05] max-w-4xl text-balance">
              Automação e inteligência para{" "}
              <span className="text-tech-cyan">operar melhor</span>, vender mais
              e perder menos tempo.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
              A camada inteligente do seu negócio pet. Um sistema operacional
              completo para automatizar a rotina, organizar a operação e
              destravar crescimento.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 bg-tech-cyan text-bg-base rounded-sm hover:opacity-90 transition font-semibold"
              >
                Agendar demonstração
              </Link>
              <Link
                to="/ecossistema"
                className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 border border-white/15 rounded-sm hover:bg-white/5 transition"
              >
                Ver ecossistema
              </Link>
            </div>
          </div>
        </section>

        {/* Dores */}
        <Section
          eyebrow="Dores que resolvemos"
          title={<>O dia a dia do pet shop não pode depender de planilha e memória.</>}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dores.map((d) => (
              <div
                key={d}
                className="p-6 rounded-lg border border-white/10 bg-bg-surface/50 backdrop-blur-sm flex items-start gap-3"
              >
                <div className="font-mono text-[10px] text-tech-cyan/70 mt-1">×</div>
                <p className="text-white/80 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Módulos */}
        <Section
          eyebrow="Módulos"
          title="Tudo que sua operação precisa, em um só sistema."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            {modules.map((m, i) => (
              <div
                key={m.name}
                className="bg-bg-surface p-8 hover:bg-bg-elevated transition-colors group relative"
              >
                <div className="font-mono text-[10px] text-tech-cyan/60 mb-3 tracking-widest">
                  M.{String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-medium text-white mb-2">{m.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{m.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-tech-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section align="center">
          <div className="rounded-2xl border border-tech-cyan/20 bg-bg-surface/60 backdrop-blur p-12 text-center max-w-3xl mx-auto glow-tech">
            <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
              Pronto para ver o sistema operando no seu negócio?
            </h3>
            <p className="text-white/50 mb-8">
              Demonstração ao vivo, personalizada para o seu fluxo.
            </p>
            <Link
              to="/contato"
              className="inline-block font-mono text-[11px] uppercase tracking-widest px-8 py-4 bg-tech-cyan text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
            >
              Agendar demonstração
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
