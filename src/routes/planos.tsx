import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  ChevronRight,
  MessageCircle,
  Minus,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

const URL_CANONICAL = "https://petops.org/planos";
const WHATSAPP_URL =
  "https://wa.me/5511918967593?text=Ol%C3%A1!%20Quero%20entender%20qual%20plano%20PetOps%20%C3%A9%20ideal%20para%20meu%20neg%C3%B3cio.";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos PetOps | Sistema para petshop a partir de R$ 0" },
      {
        name: "description",
        content:
          "Compare os planos PetOps para petshop, banho e tosa, clínica veterinária, creche e hotel. Plano Profissional por R$ 257/mês em condição promocional.",
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
  originalPrice?: string;
  promo?: string;
  audience: string;
  tagline: string;
  users: string;
  highlight: boolean;
  badge?: string;
  cta: string;
  primary: string[];
  extra: string[];
  note: string;
  icon: typeof Users;
};

const planos: Plano[] = [
  {
    id: "gratuito",
    name: "Gratuito",
    price: "R$ 0",
    audience: "Para autônomos e operações que estão começando",
    tagline: "Organize seus primeiros clientes sem assumir custo mensal.",
    users: "1 usuário",
    highlight: false,
    cta: "Começar grátis",
    primary: ["Agenda básica", "Cadastro de clientes e pets", "Dashboard da operação", "Até 30 agendamentos por mês"],
    extra: ["Até 50 clientes", "Configurações básicas"],
    note: "Gratuito permanente e sem cartão de crédito.",
    icon: Users,
  },
  {
    id: "essencial",
    name: "Essencial",
    price: "R$ 197",
    audience: "Para banho e tosa e petshops em crescimento",
    tagline: "Centralize recepção, agenda, vendas e estoque em uma única rotina.",
    users: "Até 3 usuários",
    highlight: false,
    cta: "Escolher Essencial",
    primary: ["Agenda ilimitada", "Atendimento pelo WhatsApp", "Comandas e PDV", "Controle de estoque"],
    extra: ["Financeiro básico", "Portal do tutor", "Cadastro de serviços e preços", "Painel TV"],
    note: "Ideal para sair de planilhas, cadernos e ferramentas separadas.",
    icon: Zap,
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "R$ 257",
    originalPrice: "R$ 297",
    promo: "Preço promocional",
    audience: "Para petshops com clínica, creche, hotel ou equipe maior",
    tagline: "A gestão completa da operação, com módulos avançados e visão financeira.",
    users: "Até 8 usuários",
    highlight: true,
    badge: "Melhor escolha",
    cta: "Garantir preço promocional",
    primary: [
      "Tudo do Essencial",
      "Clínica veterinária e prontuários",
      "Creche e hotel com reservas",
      "Relatórios financeiros e DRE",
    ],
    extra: [
      "Assinaturas recorrentes",
      "Lembretes de vacina e retorno",
      "Check-in e fotos",
      "Recorrência de clientes",
    ],
    note: "Economize R$ 40 por mês enquanto a condição promocional estiver disponível.",
    icon: Sparkles,
  },
  {
    id: "premium",
    name: "Premium",
    price: "R$ 497",
    audience: "Para operações que querem automatizar atendimento e relacionamento",
    tagline: "Haku no WhatsApp e automações trabalhando junto com sua equipe.",
    users: "Usuários ilimitados",
    highlight: false,
    cta: "Quero automatizar",
    primary: ["Tudo do Profissional", "Haku atendendo no WhatsApp", "Agendamento automático por IA", "Automações personalizadas"],
    extra: ["IA treinada com as regras da empresa", "Transferência para atendente", "Reativação automática", "Suporte prioritário"],
    note: "Para alto volume de conversas e uma operação com menos tarefas manuais.",
    icon: Bot,
  },
];

const comparativo: {
  mod: string;
  g: boolean | string;
  e: boolean | string;
  p: boolean | string;
  x: boolean | string;
}[] = [
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
        <section className="relative px-4 sm:px-6 lg:px-10 pt-14 pb-12 md:pt-24 md:pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-0 right-0 size-[560px] bg-tech-cyan/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-52 left-0 size-[360px] bg-tech-neon/5 blur-[130px] rounded-full pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
              <div className="inline-flex items-center gap-3 mb-5 rounded-full border border-tech-cyan/20 bg-tech-cyan/5 px-4 py-2">
                <span className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-tech-cyan">Planos PetOps Tech</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.02] text-balance">
                Um plano para cada fase da <span className="text-gradient-brand">sua operação</span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                Comece gratuitamente, centralize a gestão e avance até uma operação automatizada com IA. Sem fidelidade e sem esconder recursos importantes em letras miúdas.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-white/60">
                <span className="flex items-center gap-2"><ShieldCheck className="size-4 text-tech-cyan" /> Sem fidelidade</span>
                <span className="flex items-center gap-2"><Check className="size-4 text-tech-cyan" /> Suporte incluso</span>
                <span className="flex items-center gap-2"><Sparkles className="size-4 text-tech-cyan" /> Celular e computador</span>
              </div>
            </div>

            <div className="mb-8 rounded-2xl border border-tech-cyan/20 bg-gradient-to-r from-tech-cyan/10 via-bg-surface/70 to-tech-neon/10 p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-tech-cyan mb-2">Condição de lançamento</div>
                <h2 className="text-xl md:text-2xl font-medium text-white">Plano Profissional de <span className="line-through text-white/35">R$ 297</span> por <span className="text-tech-cyan">R$ 257/mês</span></h2>
                <p className="text-sm text-white/55 mt-2">Acesso à gestão completa com economia de R$ 40 por mês.</p>
              </div>
              <Link
                to="/assinar"
                search={{ plano: "profissional" }}
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-md bg-tech-cyan px-6 py-3.5 font-mono text-[11px] uppercase tracking-widest font-semibold text-bg-base hover:opacity-90 transition"
              >
                Garantir condição <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 items-stretch">
              {planos.map((p) => {
                const Icon = p.icon;
                return (
                  <article
                    key={p.id}
                    className={`relative rounded-2xl border p-5 sm:p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                      p.highlight
                        ? "border-tech-cyan/60 bg-gradient-to-b from-tech-cyan/10 via-bg-surface to-bg-surface glow-tech xl:scale-[1.035] z-10"
                        : "border-white/10 bg-bg-surface/60 hover:border-white/20"
                    }`}
                  >
                    {p.badge && (
                      <span className="absolute -top-3 left-5 font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 bg-tech-cyan text-bg-base rounded-sm font-semibold shadow-[0_8px_25px_-8px_var(--color-tech-cyan)]">
                        {p.badge}
                      </span>
                    )}

                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div>
                        <h2 className="text-2xl font-medium text-white tracking-tight">{p.name}</h2>
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-tech-cyan mt-2 leading-relaxed">{p.audience}</p>
                      </div>
                      <div className={`size-10 rounded-lg border grid place-items-center ${p.highlight ? "border-tech-cyan/40 bg-tech-cyan/10" : "border-white/10 bg-white/[0.03]"}`}>
                        <Icon className="size-5 text-tech-cyan" />
                      </div>
                    </div>

                    <p className="text-sm text-white/55 leading-relaxed min-h-[60px]">{p.tagline}</p>

                    <div className="my-5 pb-5 border-b border-white/10">
                      {p.originalPrice && (
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-sm text-white/35 line-through">{p.originalPrice}/mês</span>
                          <span className="rounded-full bg-tech-neon/10 border border-tech-neon/20 px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-tech-neon">{p.promo}</span>
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl md:text-[42px] font-medium text-white tracking-tight">{p.price}</span>
                        <span className="text-xs text-white/40">/mês</span>
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-tech-cyan mt-2">{p.users}</div>
                    </div>

                    <div className="mb-5">
                      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 mb-3">O que resolve agora</div>
                      <ul className="space-y-2.5" aria-label={`Principais recursos do plano ${p.name}`}>
                        {p.primary.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm text-white/80 leading-snug">
                            <Check className="size-4 text-tech-cyan shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <details className="group mb-6 rounded-lg border border-white/8 bg-white/[0.02]">
                      <summary className="cursor-pointer list-none flex items-center justify-between gap-2 px-3.5 py-3 font-mono text-[9px] uppercase tracking-widest text-white/50">
                        Ver todos os recursos
                        <ChevronRight className="size-3.5 transition-transform group-open:rotate-90" />
                      </summary>
                      <ul className="space-y-2 px-3.5 pb-3.5">
                        {p.extra.map((item) => (
                          <li key={item} className="flex gap-2 text-xs text-white/60 leading-snug">
                            <Check className="size-3.5 text-tech-cyan shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </details>

                    <div className="mt-auto">
                      <p className={`text-[11px] leading-relaxed mb-4 ${p.highlight ? "text-tech-cyan/80" : "text-white/40"}`}>{p.note}</p>
                      <Link
                        to="/assinar"
                        search={{ plano: p.id }}
                        className={`flex items-center justify-center gap-2 text-center font-mono text-[10px] uppercase tracking-widest px-4 py-3.5 rounded-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tech-cyan ${
                          p.highlight
                            ? "bg-tech-cyan text-bg-base hover:opacity-90 font-semibold shadow-[0_12px_35px_-15px_var(--color-tech-cyan)]"
                            : "border border-white/15 text-white hover:bg-white/5 hover:border-white/30"
                        }`}
                      >
                        {p.cta} <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <Section eyebrow="Recomendação rápida" title="Qual plano combina com sua operação?" intro="Escolha pelo momento do negócio, não apenas pela quantidade de funções.">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              ["Quero organizar", "Gratuito ou Essencial", "Para quem ainda trabalha com agenda manual, planilhas ou ferramentas separadas."],
              ["Quero profissionalizar", "Profissional", "Para operações com equipe, clínica, hotel, creche ou necessidade de relatórios completos."],
              ["Quero automatizar", "Premium", "Para reduzir atendimento manual e colocar a Haku e as automações no fluxo comercial."],
            ].map(([goal, plan, text], index) => (
              <div key={goal} className="rounded-xl border border-white/10 bg-bg-surface/50 p-6">
                <div className="font-mono text-[9px] uppercase tracking-widest text-white/30 mb-4">0{index + 1}</div>
                <div className="text-sm text-tech-cyan mb-2">{goal}</div>
                <h3 className="text-xl font-medium text-white mb-3">{plan}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Comparativo" title="Compare os recursos sem letras miúdas" intro="Veja rapidamente em qual etapa cada recurso entra e escolha com segurança.">
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
                    <td className="text-center px-3 py-4 bg-tech-cyan/[0.05]">
                      <div className="text-[10px] text-white/30 line-through">R$ 297</div>
                      <div className="text-tech-cyan font-mono text-sm font-semibold">R$ 257</div>
                    </td>
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
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Ainda não sabe qual plano escolher?</h2>
              <p className="text-white/55 mb-8 max-w-xl mx-auto leading-relaxed">Conte como funciona sua operação. Em uma conversa rápida, indicamos o melhor caminho sem empurrar recursos que você não precisa.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link to="/contato" className="inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-widest px-7 py-4 bg-tech-cyan text-bg-base rounded-sm font-semibold hover:opacity-90 transition">Agendar demonstração</Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest px-7 py-4 border border-white/15 text-white rounded-sm hover:bg-white/5 hover:border-white/30 transition">
                  <MessageCircle className="size-4" /> Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <div className="fixed bottom-3 inset-x-3 z-50 md:hidden grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-bg-base/90 backdrop-blur-xl p-2 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.9)]">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border border-white/15 px-3 py-3 font-mono text-[10px] uppercase tracking-widest text-white">
          <MessageCircle className="size-4 text-tech-cyan" /> WhatsApp
        </a>
        <Link to="/assinar" search={{ plano: "profissional" }} className="flex items-center justify-center rounded-lg bg-tech-cyan px-3 py-3 font-mono text-[10px] uppercase tracking-widest font-semibold text-bg-base">Profissional R$ 257</Link>
      </div>

      <Footer />
    </div>
  );
}
