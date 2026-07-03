// removed: useState (moved to /vale-a-pena)
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquare, Bot, UserCheck, Headphones,
  CalendarCheck, Camera, Stethoscope, Home,
  ShoppingCart, Boxes, Wallet, Building2,
  Bell, RefreshCw, Image as ImageIcon, Syringe, BarChart3,
  Cloud, Smartphone, Send, ShieldCheck,
  Lock, Database, Zap, Activity,
  Check, Minus,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import dashboardImg from "@/assets/veja-dashboard-raw.png";
import atendimentoImg from "@/assets/veja-atendimento-raw.png";
import agendaImg from "@/assets/veja-agenda-raw.png";
import clientesImg from "@/assets/veja-clientes-raw.png";
import heroMockup from "@/assets/tech-hero-mockup.png";
import painsMockup from "@/assets/tech-pains-mockup.png";
import automacaoMockup from "@/assets/tech-automacao.png";
import frenteAtendimento from "@/assets/frente-atendimento-t.png";
import frenteAgenda from "@/assets/frente-agenda-t.png";
import frenteOperacao from "@/assets/frente-operacao-t.png";
import frenteCrescimento from "@/assets/frente-crescimento-t.png";


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
    icon: frenteAtendimento,
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
    icon: frenteAgenda,
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
    icon: frenteOperacao,
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
    icon: frenteCrescimento,
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
  { icon: Lock, label: "Conformidade com a LGPD" },
  { icon: Database, label: "Backups automáticos diários" },
  { icon: Activity, label: "Uptime 99,9% monitorado" },
  { icon: Zap, label: "Atualizações contínuas sem custo extra" },
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
          <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
                  MÓDULO 01 · TECH
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[64px] font-medium tracking-tight text-white leading-[1.05] text-balance">
                Automação e inteligência para{" "}
                <span className="text-tech-cyan">operar melhor</span>, vender mais
                e perder menos tempo
              </h1>
              <p className="mt-8 text-lg md:text-xl text-white/50 max-w-xl leading-relaxed">
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
                {/* <Link
                  to="/ecossistema"
                  className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 border border-white/15 rounded-sm hover:bg-white/5 transition"
                >
                  Ver ecossistema
                </Link> */}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-tech-cyan/15 blur-[100px] rounded-full pointer-events-none" />
              <img
                src={heroMockup}
                alt="PetOps Tech — dashboard, agenda e atendimento com IA"
                className="relative w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </section>

        {/* Veja na prática */}
        <Section
          eyebrow="Veja na prática"
          title="O sistema em ação"
          intro="Interface rápida, visual e intuitiva. Quem opera o caixa entende em minutos."
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {screens.map((s) => (
              <div
                key={s.label}
                className="group relative rounded-2xl transition-transform duration-500 hover:scale-[1.03] hover:z-10"
              >
                <div className="rounded-2xl overflow-hidden bg-white border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <img
                    src={s.img}
                    alt={`PetOps — ${s.label}`}
                    loading="lazy"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="px-2 pt-4 text-center">
                  <div className="text-sm font-medium text-white">{s.label}</div>
                  <div className="text-xs text-white/50 mt-0.5">{s.desc}</div>
                </div>
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
