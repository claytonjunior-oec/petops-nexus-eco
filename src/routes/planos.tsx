import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Minus, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

const URL_CANONICAL = "https://petops.org/planos";
const WHATSAPP_URL =
  "https://wa.me/5511918967593?text=Ol%C3%A1!%20Quero%20entender%20qual%20plano%20PetOps%20%C3%A9%20ideal%20para%20meu%20neg%C3%B3cio.";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos PetOps | Gestão para petshop a partir de R$ 0" },
      {
        name: "description",
        content:
          "Compare os planos PetOps para petshop, banho e tosa, clínica veterinária, creche e hotel. Comece grátis e evolua até automações com IA.",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Planos PetOps para negócios pet" },
      {
        property: "og:description",
        content: "Gestão, atendimento, clínica, hotel e automações com IA. Sem fidelidade.",
      },
      { property: "og:url", content: URL_CANONICAL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL_CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "PetOps",
          description: "Sistema de gestão e automação para negócios pet.",
          brand: { "@type": "Brand", name: "PetOps" },
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "BRL",
            lowPrice: "0",
            highPrice: "497",
            offerCount: "4",
            url: URL_CANONICAL,
          },
        }),
      },
    ],
  }),
  component: PlanosPage,
});

type PlanId = "gratuito" | "essencial" | "profissional" | "premium";

type Plano = {
  id: PlanId;
  name: string;
  price: string;
  audience: string;
  tagline: string;
  users: string;
  limits: string;
  highlight: boolean;
  badge?: string;
  cta: string;
  modulos: string[];
  note: string;
};

const planos: Plano[] = [
  {
    id: "gratuito",
    name: "Gratuito",
    price: "R$ 0",
    audience: "Para autônomos e operações que estão começando",
    tagline: "Organize os primeiros clientes sem custo mensal.",
    users: "1 usuário",
    limits: "Até 30 agendamentos por mês · até 50 clientes",
    highlight: false,
    cta: "Começar grátis",
    modulos: ["Dashboard", "Agenda básica", "Clientes e pets", "Configurações"],
    note: "Plano gratuito permanente. Sem cartão de crédito.",
  },
  {
    id: "essencial",
    name: "Essencial",
    price: "R$ 197",
    audience: "Para banho e tosa e petshops em crescimento",
    tagline: "Agenda, atendimento, vendas e estoque em um só lugar.",
    users: "Até 3 usuários",
    limits: "Agenda ilimitada · Portal do Tutor",
    highlight: false,
    cta: "Assinar Essencial",
    modulos: [
      "Tudo do Gratuito",
      "Atendimento pelo WhatsApp",
      "Agenda ilimitada",
      "Comandas e PDV",
      "Controle de estoque",
      "Financeiro básico",
      "Cadastro de serviços e preços",
      "Painel TV",
    ],
    note: "Ideal para centralizar a rotina da recepção.",
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "R$ 257",
    audience: "Para petshops com clínica, creche ou hotel",
    tagline: "Gestão completa para operações com mais serviços e equipe.",
    users: "Até 8 usuários",
    limits: "Prontuários · Reservas · Assinaturas · Relatórios",
    highlight: true,
    badge: "Mais escolhido",
    cta: "Escolher Profissional",
    modulos: [
      "Tudo do Essencial",
      "Clínica veterinária: prontuário, vacinas e exames",
      "Creche e hotel: reservas, check-in e fotos",
      "Planos e assinaturas recorrentes",
      "Lembretes de vacina, retorno e aniversário",
      "Relatórios financeiros e DRE",
      "Identificação de clientes que demoraram a voltar",
    ],
    note: "Melhor equilíbrio entre gestão, recursos e investimento.",
  },
  {
    id: "premium",
    name: "Premium",
    price: "R$ 497",
    audience: "Para negócios que querem automatizar atendimento e relacionamento",
    tagline: "Haku no WhatsApp e automações trabalhando com sua equipe.",
    users: "Usuários ilimitados",
    limits: "IA no WhatsApp · Automações · Suporte prioritário",
    highlight: false,
    cta: "Quero automatizar",
    modulos: [
      "Tudo do Profissional",
      "Haku atendendo clientes no WhatsApp",
      "IA treinada com as regras e o estilo da empresa",
      "Agendamento automático pela IA",
      "Transferência para a equipe quando necessário",
      "Reativação e mensagens automáticas",
      "Integrações e automações personalizadas",
      "Usuários ilimitados",
    ],
    note: "Recomendado para operações com alto volume de atendimento.",
  },
];

const comparativo: {
  mod: string;
  g: boolean | string;
  e: boolean | string;
  p: boolean | string;
  x: boolean | string;
}[] = [
  { mod: "Dashboard", g: true, e: true, p: true, x: true },
  { mod: "Agenda mensal", g: "30", e: "Ilimitada", p: "Ilimitada", x: "Ilimitada" },
  { mod: "Clientes", g: "50", e: "Ilimitados", p: "Ilimitados", x: "Ilimitados" },
  { mod: "Atendimento WhatsApp", g: false, e: true, p: true, x: true },
  { mod: "PDV, estoque e financeiro", g: false, e: true, p: true, x: true },
  { mod: "Clínica veterinária", g: false, e: false, p: true, x: true },
  { mod: "Creche e hotel", g: false, e: false, p: true, x: true },
  { mod: "Lembretes e recorrência", g: false, e: false, p: true, x: true },
  { mod: "Haku no WhatsApp", g: false, e: false, p: false, x: true },
  { mod: "Automações personalizadas", g: false, e: false, p: false, x: true },
  { mod: "Máximo de usuários", g: "1", e: "3", p: "8", x: "Ilimitados" },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check aria-label="Incluído" className="size-4 text-tech-cyan mx-auto" />;
  if (v === false) return <Minus aria-label="Não incluído" className="size-4 text-white/20 mx-auto" />;
  return <span className="text-xs text-white/70 font-mono whitespace-nowrap">{v}</span>;
}

function PlanosPage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium overflow-x-hidden">
      <Nav />
      <main className="pt-16 pb-20 md:pb-0">
        <section className="relative px-4 sm:px-6 lg:px-10 pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-0 right-0 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
                  Planos · PetOps
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] text-balance">
                Escolha o plano que acompanha o <span className="text-tech-cyan">seu crescimento</span>
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                Comece organizando a operação e evolua até atendimento e automações com IA. Sem fidelidade e com suporte para escolher o plano certo.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-white/55">
                <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-tech-cyan" /> Sem fidelidade</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-tech-cyan" /> Suporte incluso</span>
                <span className="flex items-center gap-2"><Sparkles className="size-4 text-tech-cyan" /> Funciona no celular e computador</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 items-stretch">
              {planos.map((p) => (
                <article
                  key={p.id}
                  className={`relative rounded-2xl border p-5 sm:p-6 md:p-7 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                    p.highlight
                      ? "border-tech-cyan/60 bg-bg-surface glow-tech xl:scale-[1.025]"
                      : "border-white/10 bg-bg-surface/60"
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-5 md:left-7 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 bg-tech-cyan text-bg-base rounded-sm font-semibold shadow-[0_8px_25px_-8px_var(--color-tech-cyan)]">
                      {p.badge}
                    </span>
                  )}

                  <div className="mb-5">
                    <h2 className="text-2xl font-medium text-white tracking-tight">{p.name}</h2>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-tech-cyan mt-2 leading-relaxed">
                      {p.audience}
                    </p>
                    <p className="text-sm text-white/55 mt-3 leading-relaxed min-h-0 md:min-h-[44px]">
                      {p.tagline}
                    </p>
                  </div>

                  <div className="mb-5 pb-5 border-b border-white/8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-[42px] font-medium text-white tracking-tight">{p.price}</span>
                      <span className="text-xs text-white/40">/mês</span>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-tech-cyan mt-2">{p.users}</div>
                    <div className="text-xs text-white/45 mt-2 leading-relaxed">{p.limits}</div>
                  </div>

                  <ul className="space-y-2.5 mb-6 flex-1" aria-label={`Recursos do plano ${p.name}`}>
                    {p.modulos.map((m) => (
                      <li key={m} className="flex gap-2.5 text-sm text-white/75 leading-snug">
                        <Check className="size-4 text-tech-cyan shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[11px] text-white/40 leading-relaxed mb-4">{p.note}</p>

                  <Link
                    to="/assinar"
                    search={{ plano: p.id }}
                    className={`block text-center font-mono text-[11px] uppercase tracking-widest px-5 py-3.5 rounded-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-cyan ${
                      p.highlight
                        ? "bg-tech-cyan text-bg-base hover:opacity-90 font-semibold"
                        : "border border-white/15 text-white hover:bg-white/5 hover:border-white/30"
                    }`}
                  >
                    {p.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Section
          eyebrow="Comparativo"
          title="Compare os recursos sem letras miúdas"
          intro="Veja rapidamente em qual etapa cada recurso entra e escolha com mais segurança."
        >
          <div className="rounded-2xl border border-white/10 bg-bg-surface/40 overflow-hidden">
            <div className="overflow-x-auto" role="region" aria-label="Tabela comparativa de planos" tabIndex={0}>
              <table className="w-full text-sm min-w-[760px]">
                <thead>
                  <tr className="border-b border-white/10 bg-bg-surface/60">
                    <th scope="col" className="text-left font-mono text-[10px] uppercase tracking-widest text-white/50 px-5 py-4">Recurso</th>
                    <th scope="col" className="font-mono text-[10px] uppercase tracking-widest text-white/50 px-3 py-4">Gratuito</th>
                    <th scope="col" className="font-mono text-[10px] uppercase tracking-widest text-white/50 px-3 py-4">Essencial</th>
                    <th scope="col" className="font-mono text-[10px] uppercase tracking-widest text-tech-cyan px-3 py-4">Profissional</th>
                    <th scope="col" className="font-mono text-[10px] uppercase tracking-widest text-white/50 px-3 py-4">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {comparativo.map((row, i) => (
                    <tr key={row.mod} className={i % 2 === 0 ? "bg-white/[0.015]" : ""}>
                      <th scope="row" className="text-left font-normal text-white/80 px-5 py-3 border-b border-white/5">{row.mod}</th>
                      <td className="text-center px-3 py-3 border-b border-white/5"><Cell v={row.g} /></td>
                      <td className="text-center px-3 py-3 border-b border-white/5"><Cell v={row.e} /></td>
                      <td className="text-center px-3 py-3 border-b border-white/5 bg-tech-cyan/[0.03]"><Cell v={row.p} /></td>
                      <td className="text-center px-3 py-3 border-b border-white/5"><Cell v={row.x} /></td>
                    </tr>
                  ))}
                  <tr className="bg-bg-surface/60">
                    <th scope="row" className="text-left text-white/80 px-5 py-4 font-medium">Preço por mês</th>
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

        <Section align="center">
          <div className="relative rounded-2xl border border-tech-cyan/20 bg-bg-surface/60 backdrop-blur px-6 py-10 md:p-12 text-center max-w-3xl mx-auto glow-tech overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
                Não sabe qual plano escolher?
              </h2>
              <p className="text-white/55 mb-8 max-w-xl mx-auto leading-relaxed">
                Conte como funciona sua operação. Em uma conversa rápida, mostramos o melhor caminho sem empurrar recursos que você não precisa.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-widest px-7 py-4 bg-tech-cyan text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
                >
                  Agendar demonstração
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest px-7 py-4 border border-white/15 text-white rounded-sm hover:bg-white/5 hover:border-white/30 transition"
                >
                  <MessageCircle className="size-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <div className="fixed bottom-3 inset-x-3 z-50 md:hidden grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-bg-base/90 backdrop-blur-xl p-2 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.9)]">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-3 font-mono text-[10px] uppercase tracking-widest text-white"
        >
          <MessageCircle className="size-4 text-tech-cyan" /> WhatsApp
        </a>
        <Link
          to="/contato"
          className="flex items-center justify-center rounded-lg bg-tech-cyan px-3 py-3 font-mono text-[10px] uppercase tracking-widest font-semibold text-bg-base"
        >
          Agendar demo
        </Link>
      </div>

      <Footer />
    </div>
  );
}
