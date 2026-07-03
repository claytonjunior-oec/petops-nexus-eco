import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

const URL_CANONICAL = "https://petops-nexus-eco.lovable.app/planos";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos PetOps — Sistema para petshop a partir de R$ 0" },
      {
        name: "description",
        content:
          "Planos PetOps: Gratuito, Essencial (R$ 197), Profissional (R$ 257) e Premium (R$ 497). Escolha o tamanho do seu negócio e comece hoje.",
      },
      { property: "og:title", content: "Planos PetOps" },
      {
        property: "og:description",
        content: "Do gratuito ao Premium com IA. Sem fidelidade.",
      },
      { property: "og:url", content: URL_CANONICAL },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
  }),
  component: PlanosPage,
});

const planos = [
  {
    id: "gratuito",
    name: "Gratuito",
    price: "R$ 0",
    tagline: "Para começar a organizar a operação.",
    users: "1 usuário",
    limits: "Até 30 agendamentos · 50 clientes · 14 dias de teste",
    highlight: false,
    cta: "Começar grátis",
    modulos: ["Dashboard", "Agenda básica", "Clientes & Pets", "Configurações"],
  },
  {
    id: "essencial",
    name: "Essencial",
    price: "R$ 197",
    tagline: "Recepção, loja e estoque rodando juntos.",
    users: "Até 3 usuários",
    limits: "Agenda ilimitada · Portal do Tutor",
    highlight: false,
    cta: "Assinar Essencial",
    modulos: [
      "Tudo do Gratuito",
      "Atendimento WhatsApp",
      "Agenda ilimitada",
      "Comandas",
      "PDV",
      "Estoque",
      "Financeiro básico",
      "Serviços (cadastro/preços)",
      "Painel TV",
    ],
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "R$ 257",
    tagline: "Clínica, hotel e gestão completa.",
    users: "Até 8 usuários",
    limits: "DRE · Assinaturas digitais · Lembretes",
    highlight: true,
    badge: "Mais escolhido",
    cta: "Assinar Profissional",
    modulos: [
      "Tudo do Essencial",
      "Clínica Vet (prontuário, vacinas, exames)",
      "Creche & Hotel (reservas, check-in, fotos)",
      "Assinaturas recorrentes",
      "Lembretes (vacina, retorno, aniversário)",
      "Relatórios & DRE",
      "Recorrência de clientes",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "R$ 497",
    tagline: "IA + automações no piloto automático.",
    users: "Usuários ilimitados",
    limits: "Suporte prioritário · Integração Make.com",
    highlight: false,
    cta: "Assinar Premium",
    modulos: [
      "Tudo do Profissional",
      "Bot IA Haku (WhatsApp)",
      "FAQs e calibração de estilo",
      "Handover humano + agendamento por IA",
      "Automações completas",
      "Integração Make.com",
      "Usuários ilimitados",
    ],
  },
] as const;

const comparativo: { mod: string; g: boolean | string; e: boolean | string; p: boolean | string; x: boolean | string }[] = [
  { mod: "Dashboard", g: true, e: true, p: true, x: true },
  { mod: "Agenda", g: "30", e: "ilim.", p: "ilim.", x: "ilim." },
  { mod: "Clientes & Pets", g: "50", e: true, p: true, x: true },
  { mod: "Atendimento WhatsApp", g: false, e: true, p: true, x: true },
  { mod: "PDV / Estoque / Financeiro", g: false, e: true, p: true, x: true },
  { mod: "Clínica Vet", g: false, e: false, p: true, x: true },
  { mod: "Creche & Hotel", g: false, e: false, p: true, x: true },
  { mod: "Lembretes / Recorrência", g: false, e: false, p: true, x: true },
  { mod: "Bot IA (Haku)", g: false, e: false, p: false, x: true },
  { mod: "Automações", g: false, e: false, p: false, x: true },
  { mod: "Máx. usuários", g: "1", e: "3", p: "8", x: "∞" },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="size-4 text-tech-cyan mx-auto" />;
  if (v === false) return <Minus className="size-4 text-white/20 mx-auto" />;
  return <span className="text-xs text-white/70 font-mono">{v}</span>;
}

function PlanosPage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        {/* Hero + cards */}
        <section className="relative px-6 lg:px-10 pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-0 right-0 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
                  Planos · PetOps
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] text-balance">
                Escolha seu <span className="text-tech-cyan">plano</span>
              </h1>
              <p className="mt-5 text-lg text-white/60">
                Sem fidelidade. Cancele quando quiser.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {planos.map((p) => (
                <div
                  key={p.id}
                  className={`relative rounded-2xl border p-7 flex flex-col ${
                    p.highlight
                      ? "border-tech-cyan/50 bg-bg-surface glow-tech"
                      : "border-white/10 bg-bg-surface/60"
                  }`}
                >
                  {p.highlight && "badge" in p && (
                    <span className="absolute -top-3 left-7 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-tech-cyan text-bg-base rounded-sm font-semibold">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-medium text-white tracking-tight">{p.name}</h3>
                  <p className="text-xs text-white/50 mt-1.5 leading-relaxed min-h-[32px]">{p.tagline}</p>
                  <div className="mt-5 mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-medium text-white tracking-tight">{p.price}</span>
                      <span className="text-xs text-white/40">/mês</span>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-tech-cyan mt-2">{p.users}</div>
                    <div className="text-xs text-white/45 mt-1">{p.limits}</div>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.modulos.map((m) => (
                      <li key={m} className="flex gap-2 text-sm text-white/75 leading-snug">
                        <Check className="size-4 text-tech-cyan shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/assinar"
                    search={{ plano: p.id as "gratuito" | "essencial" | "profissional" | "premium" }}
                    className={`block text-center font-mono text-[11px] uppercase tracking-widest px-5 py-3 rounded-sm transition ${
                      p.highlight
                        ? "bg-tech-cyan text-bg-base hover:opacity-90 font-semibold"
                        : "border border-white/15 text-white hover:bg-white/5"
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparativo */}
        <Section eyebrow="Comparativo" title="O que cada plano inclui">
          <div className="rounded-2xl border border-white/10 bg-bg-surface/40 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10 bg-bg-surface/60">
                    <th className="text-left font-mono text-[10px] uppercase tracking-widest text-white/50 px-5 py-4">Módulo</th>
                    <th className="font-mono text-[10px] uppercase tracking-widest text-white/50 px-3 py-4">Grátis</th>
                    <th className="font-mono text-[10px] uppercase tracking-widest text-white/50 px-3 py-4">Essencial</th>
                    <th className="font-mono text-[10px] uppercase tracking-widest text-tech-cyan px-3 py-4">Profissional</th>
                    <th className="font-mono text-[10px] uppercase tracking-widest text-white/50 px-3 py-4">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparativo.map((row, i) => (
                    <tr key={row.mod} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                      <td className="text-white/80 px-5 py-3 border-b border-white/5">{row.mod}</td>
                      <td className="text-center px-3 py-3 border-b border-white/5"><Cell v={row.g} /></td>
                      <td className="text-center px-3 py-3 border-b border-white/5"><Cell v={row.e} /></td>
                      <td className="text-center px-3 py-3 border-b border-white/5 bg-tech-cyan/[0.03]"><Cell v={row.p} /></td>
                      <td className="text-center px-3 py-3 border-b border-white/5"><Cell v={row.x} /></td>
                    </tr>
                  ))}
                  <tr className="bg-bg-surface/60">
                    <td className="text-white/80 px-5 py-4 font-medium">Preço/mês</td>
                    <td className="text-center px-3 py-4 text-white font-mono text-sm">R$ 0</td>
                    <td className="text-center px-3 py-4 text-white font-mono text-sm">R$ 197</td>
                    <td className="text-center px-3 py-4 text-tech-cyan font-mono text-sm font-semibold bg-tech-cyan/[0.05]">R$ 257</td>
                    <td className="text-center px-3 py-4 text-white font-mono text-sm">R$ 497</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section align="center">
          <div className="rounded-2xl border border-tech-cyan/20 bg-bg-surface/60 backdrop-blur p-12 text-center max-w-3xl mx-auto glow-tech">
            <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
              Ainda em dúvida?
            </h3>
            <p className="text-white/50 mb-8">
              Agende uma demo de 20 minutos e a gente encontra o plano certo pra você.
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
