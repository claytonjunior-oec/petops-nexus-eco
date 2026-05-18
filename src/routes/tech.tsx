import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquare, Bot, UserCheck, Headphones,
  CalendarCheck, Camera, Stethoscope, Home,
  ShoppingCart, Boxes, Wallet, Building2,
  Bell, RefreshCw, Image as ImageIcon, Syringe, BarChart3,
  Cloud, Smartphone, Send, ShieldCheck,
  Check, Minus,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import dashboardImg from "@/assets/petops-dashboard.png";
import atendimentoImg from "@/assets/petops-atendimento.png";
import agendaImg from "@/assets/petops-agenda.png";
import clientesImg from "@/assets/petops-clientes.png";

const TECH_URL = "https://petops-nexus-eco.lovable.app/tech";
const TECH_OG = "https://petops-nexus-eco.lovable.app/src/assets/og-petops.jpg";

export const Route = createFileRoute("/tech")({
  head: () => ({
    meta: [
      { title: "PetOps Tech — Sistema para Petshop com IA no WhatsApp" },
      {
        name: "description",
        content:
          "PetOps Tech: sistema completo para petshop, clínica vet, banho & tosa, daycare e hotel pet. Agenda inteligente, atendimento com IA no WhatsApp (Haku), PDV, financeiro, prontuário e automações. Planos a partir de R$ 0.",
      },
      {
        name: "keywords",
        content:
          "sistema petshop, software petshop, gestão petshop, agenda petshop, whatsapp petshop com IA, PDV pet, sistema clínica veterinária, sistema banho e tosa, automação petshop",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "PetOps Tech — Sistema operacional para o petshop moderno" },
      {
        property: "og:description",
        content:
          "Agenda inteligente, IA no WhatsApp, PDV, financeiro e portal do tutor. A camada inteligente do seu negócio pet.",
      },
      { property: "og:url", content: TECH_URL },
      { property: "og:image", content: TECH_OG },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PetOps Tech — Sistema para petshop com IA" },
      {
        name: "twitter:description",
        content: "Agenda, WhatsApp com IA, PDV e financeiro em uma plataforma só.",
      },
      { name: "twitter:image", content: TECH_OG },
    ],
    links: [{ rel: "canonical", href: TECH_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "PetOps Tech",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, iOS, Android",
          description:
            "Sistema operacional para petshops, clínicas veterinárias, banho & tosa, daycare e hotel pet com IA no WhatsApp.",
          url: TECH_URL,
          image: TECH_OG,
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://petops-nexus-eco.lovable.app/" },
            { "@type": "ListItem", position: 2, name: "Tech", item: TECH_URL },
          ],
        }),
      },
    ],
  }),
  component: TechPage,
});

const dores = [
  "Agenda bagunçada no WhatsApp",
  "Cliente esquece o horário e não comparece",
  "Atendente sobrecarregado respondendo o mesmo todo dia",
  "Ficha do pet espalhada em cadernos e planilhas",
  "Cliente que some e ninguém percebe",
  "Sem previsibilidade de receita no fim do mês",
];

const frentes = [
  {
    label: "Atendimento",
    title: "Recepção 24h sem ninguém na linha",
    items: [
      { icon: MessageSquare, name: "WhatsApp central", desc: "Todas as conversas em um painel único, com contexto e histórico." },
      { icon: Bot, name: "IA de atendimento", desc: "Responde dúvidas, agenda e envia orçamento — modo conservador anti-erro." },
      { icon: Headphones, name: "Handover humano", desc: "Quando precisar, transfere com todo o histórico para o atendente." },
      { icon: UserCheck, name: "Portal do tutor", desc: "Cliente agenda, vê histórico e acompanha o pet sem precisar ligar." },
    ],
  },
  {
    label: "Agenda & Serviço",
    title: "Lotação otimizada, zero conflito",
    items: [
      { icon: CalendarCheck, name: "Agenda multi-profissional", desc: "Visão diária e semanal, encaixe automático e bloqueios inteligentes." },
      { icon: Camera, name: "Check-in com foto", desc: "Recepção digital com registro visual de cada serviço." },
      { icon: Stethoscope, name: "Clínica veterinária", desc: "Prontuário, vacinas, prescrições e fluxo clínico integrado." },
      { icon: Home, name: "Daycare & Hotel", desc: "Diárias, hospedagem e ocupação organizadas no mesmo sistema." },
    ],
  },
  {
    label: "Operação",
    title: "Caixa, estoque e equipe sem retrabalho",
    items: [
      { icon: ShoppingCart, name: "PDV & Comandas", desc: "Cada serviço vira receita automaticamente, sem dupla digitação." },
      { icon: Boxes, name: "Estoque", desc: "Controle de produtos, consumo por serviço e alertas de reposição." },
      { icon: Wallet, name: "Financeiro & Comissões", desc: "Fechamento de caixa, comissão por profissional e relatórios prontos." },
      { icon: Building2, name: "Multi-unidade", desc: "Uma plataforma, todas as filiais — cada loja com dados isolados." },
    ],
  },
  {
    label: "Crescimento",
    title: "Cliente voltando no piloto automático",
    items: [
      { icon: Bell, name: "Lembretes automáticos", desc: "Aviso pré-agendamento que reduz drasticamente o no-show." },
      { icon: RefreshCw, name: "Reativação & recorrência", desc: "Detecta quem sumiu e dispara mensagem personalizada." },
      { icon: ImageIcon, name: "Foto pós-serviço", desc: "Tutor recebe a foto do pet ao fim do atendimento — fidelização instantânea." },
      { icon: Syringe, name: "Alerta de vacina", desc: "Aviso 7 dias antes do vencimento, direto no WhatsApp do tutor." },
    ],
  },
];

const screens = [
  { label: "Dashboard", desc: "Visão geral da operação em tempo real", img: dashboardImg },
  { label: "Atendimento", desc: "Chat WhatsApp centralizado com IA + humano", img: atendimentoImg },
  { label: "Agenda", desc: "Calendário inteligente multi-profissional", img: agendaImg },
  { label: "Clientes & Pets", desc: "Ficha completa de tutores e pets", img: clientesImg },
];

const automacoes = [
  { icon: Bell, title: "Lembrete antes do horário", desc: "Mensagem automática no WhatsApp 24h antes — cliente confirma respondendo." },
  { icon: RefreshCw, title: "Reativação de cliente sumido", desc: "Detecta quem não volta há semanas e dispara régua personalizada." },
  { icon: ImageIcon, title: "Foto pós-serviço", desc: "Ao finalizar, o tutor recebe a foto do pet sem ninguém precisar enviar." },
  { icon: Syringe, title: "Alerta de vacina vencendo", desc: "Aviso 7 dias antes da data, com link direto para reagendar." },
  { icon: BarChart3, title: "Relatório semanal", desc: "Resumo de faturamento, ocupação e clientes novos entregue automaticamente." },
];

const selos = [
  { icon: Cloud, label: "Sistema seguro em nuvem" },
  { icon: Smartphone, label: "App online e offline no celular" },
  { icon: Send, label: "WhatsApp oficial integrado" },
  { icon: ShieldCheck, label: "IA com modo conservador + handover humano" },
];

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
    modulos: [
      "Dashboard",
      "Agenda básica",
      "Clientes & Pets",
      "Configurações",
    ],
  },
  {
    id: "essencial",
    name: "Essencial",
    price: "R$ 149",
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
    price: "R$ 297",
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
];

const comparativo = [
  { mod: "Dashboard", g: true, e: true, p: true, x: true },
  { mod: "Agenda", g: "30", e: "ilim.", p: "ilim.", x: "ilim." },
  { mod: "Clientes & Pets", g: "50", e: true, p: true, x: true },
  { mod: "Configurações", g: true, e: true, p: true, x: true },
  { mod: "Atendimento WhatsApp", g: false, e: true, p: true, x: true },
  { mod: "Comandas", g: false, e: true, p: true, x: true },
  { mod: "PDV", g: false, e: true, p: true, x: true },
  { mod: "Estoque", g: false, e: true, p: true, x: true },
  { mod: "Financeiro", g: false, e: true, p: true, x: true },
  { mod: "Serviços (cadastro)", g: false, e: true, p: true, x: true },
  { mod: "Painel TV", g: false, e: true, p: true, x: true },
  { mod: "Clínica Vet", g: false, e: false, p: true, x: true },
  { mod: "Creche & Hotel", g: false, e: false, p: true, x: true },
  { mod: "Assinaturas", g: false, e: false, p: true, x: true },
  { mod: "Lembretes", g: false, e: false, p: true, x: true },
  { mod: "Relatórios / DRE", g: false, e: false, p: true, x: true },
  { mod: "Recorrência", g: false, e: false, p: true, x: true },
  { mod: "Bot IA (Haku)", g: false, e: false, p: false, x: true },
  { mod: "Automações", g: false, e: false, p: false, x: true },
  { mod: "Suporte / Academy", g: true, e: true, p: true, x: true },
  { mod: "Máx. usuários", g: "1", e: "3", p: "8", x: "∞" },
];

function Cell({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="size-4 text-tech-cyan mx-auto" />;
  if (v === false) return <Minus className="size-4 text-white/20 mx-auto" />;
  return <span className="text-xs text-white/70 font-mono">{v}</span>;
}

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
              e perder menos tempo
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
          title={<>O dia a dia do pet shop não pode depender de planilha e memória</>}
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

        {/* Frentes do sistema */}
        <Section
          eyebrow="O sistema"
          title="Quatro frentes integradas, um só ecossistema"
          intro="Atendimento, agenda, operação e crescimento conversando entre si — sem retrabalho, sem planilha, sem boleto solto."
        >
          <div className="grid lg:grid-cols-2 gap-6">
            {frentes.map((f, i) => (
              <div
                key={f.label}
                className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-sm p-8 hover:border-tech-cyan/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-tech-cyan tracking-widest">
                    F.{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                    {f.label}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-white mb-6 tracking-tight">
                  {f.title}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {f.items.map((it) => (
                    <div key={it.name} className="flex gap-3">
                      <div className="size-9 rounded-lg bg-tech-cyan/10 border border-tech-cyan/20 flex items-center justify-center shrink-0">
                        <it.icon className="size-4 text-tech-cyan" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{it.name}</div>
                        <p className="text-xs text-white/50 leading-relaxed mt-0.5">
                          {it.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Veja na prática */}
        <Section
          eyebrow="Veja na prática"
          title="Interface pensada para a rotina do pet shop."
          intro="Rápido, visual e intuitivo. Quem opera o caixa entende em minutos."
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {screens.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 overflow-hidden bg-bg-surface group hover:border-tech-cyan/30 transition"
              >
                <div className="aspect-video bg-bg-base overflow-hidden">
                  <img
                    src={s.img}
                    alt={`PetOps — ${s.label}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="px-6 py-4 border-t border-white/5">
                  <div className="text-sm font-medium text-white">{s.label}</div>
                  <div className="text-xs text-white/50 mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Automação */}
        <Section
          eyebrow="Automação"
          title="Seu pet shop funcionando no piloto automático."
          intro="O sistema cuida das tarefas repetitivas enquanto sua equipe foca no que importa: cuidar dos pets."
        >
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {automacoes.map((a) => (
              <div
                key={a.title}
                className="flex gap-4 p-5 rounded-xl border border-white/10 bg-bg-surface/50 hover:bg-bg-surface transition"
              >
                <div className="size-10 rounded-lg bg-tech-cyan/10 border border-tech-cyan/20 flex items-center justify-center shrink-0">
                  <a.icon className="size-5 text-tech-cyan" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{a.title}</div>
                  <p className="text-xs text-white/55 leading-relaxed mt-1">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Selos */}
        <Section eyebrow="Confiança técnica">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selos.map((s) => (
              <div
                key={s.label}
                className="p-5 rounded-lg border border-white/10 bg-bg-surface/40 flex items-center gap-3"
              >
                <s.icon className="size-5 text-tech-cyan shrink-0" />
                <span className="text-sm text-white/80 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Planos */}
        <Section
          eyebrow="Planos · PetOps Tech"
          title="Escolha o plano que cabe no tamanho do seu negócio."
          intro="Do petshop começando a estruturar a operação à rede com múltiplas unidades. Todos os planos incluem suporte e Academy."
        >
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
                {p.highlight && p.badge && (
                  <span className="absolute -top-3 left-7 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-tech-cyan text-bg-base rounded-sm font-semibold">
                    {p.badge}
                  </span>
                )}
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-medium text-white tracking-tight">{p.name}</h3>
                </div>
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
        </Section>

        {/* Comparativo */}
        <Section
          eyebrow="Comparativo"
          title="Tudo que você ganha em cada plano."
          intro="Todos os módulos do sistema, lado a lado."
        >
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
                    <td className="text-center px-3 py-4 text-white font-mono text-sm">R$ 149</td>
                    <td className="text-center px-3 py-4 text-tech-cyan font-mono text-sm font-semibold bg-tech-cyan/[0.05]">R$ 297</td>
                    <td className="text-center px-3 py-4 text-white font-mono text-sm">R$ 497</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Problema />
        <AntesDepois />
        <CalculadoraROI />

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
      intro="O que muda na rotina do petshop quando o PetOps Tech entra no lugar do improviso."
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
        <div className="space-y-7">
          <RangeField label="Banhos por mês" value={banhos} min={30} max={1500} step={10} display={fmt(banhos)} color="tech-cyan" onChange={setBanhos} />
          <RangeField label="Ticket médio (R$)" value={ticket} min={40} max={300} step={5} display={`R$ ${fmt(ticket)}`} color="care-blue" onChange={setTicket} />
          <RangeField label="No-show atual (%)" value={noshowAtual} min={5} max={50} step={1} display={`${noshowAtual}%`} color="tech-neon" onChange={setNoshowAtual} />
        </div>

        <div className="relative rounded-xl border border-tech-cyan/30 bg-gradient-to-br from-bg-base via-bg-surface to-tech-cyan/10 p-6 md:p-8 glow-tech overflow-hidden">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan mb-6 flex items-center gap-2">
            <div className="size-1.5 bg-tech-neon rounded-full animate-pulse" />
            Projeção PetOps
          </div>

          <div className="space-y-5 mb-6">
            <div>
              <div className="font-mono text-[10px] text-white/40 tracking-widest mb-1">Você está perdendo hoje</div>
              <div className="text-2xl md:text-3xl font-medium text-red-300/90 line-through decoration-red-300/30">
                R$ {fmt(perdaAtual)} <span className="text-xs text-white/40 no-underline">/ mês</span>
              </div>
            </div>

            <div>
              <div className="font-mono text-[10px] text-tech-cyan tracking-widest mb-1">Com PetOps (no-show ≤ 8%)</div>
              <div className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-none">
                R$ {fmt(economiaMes)}
              </div>
              <div className="text-xs text-white/50 mt-1">de economia projetada por mês</div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Em 12 meses</span>
              <span className="text-2xl font-medium text-tech-neon">R$ {fmt(economiaAno)}</span>
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
  label, value, min, max, step, display, color, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number;
  display: string; color: string; onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="font-mono text-[10px] uppercase tracking-widest text-white/50">{label}</label>
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
