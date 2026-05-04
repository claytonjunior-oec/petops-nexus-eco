import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquare, Bot, UserCheck, Headphones,
  CalendarCheck, Camera, Stethoscope, Home,
  ShoppingCart, Boxes, Wallet, Building2,
  Bell, RefreshCw, Image as ImageIcon, Syringe, BarChart3,
  Cloud, Smartphone, Send, ShieldCheck,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import dashboardImg from "@/assets/petops-dashboard.png";
import atendimentoImg from "@/assets/petops-atendimento.png";
import agendaImg from "@/assets/petops-agenda.png";
import clientesImg from "@/assets/petops-clientes.png";

export const Route = createFileRoute("/tech")({
  head: () => ({
    meta: [
      { title: "PetOps Tech — Sistema operacional para negócios pet" },
      {
        name: "description",
        content:
          "Plataforma com agenda inteligente, WhatsApp com IA, PDV, financeiro, portal do tutor e automações para pet shops, clínicas, banho e tosa, daycare e hotel.",
      },
      { property: "og:title", content: "PetOps Tech" },
      { property: "og:description", content: "A camada inteligente do seu negócio pet." },
      { property: "og:image", content: "/src/assets/petops-dashboard.png" },
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

        {/* Frentes do sistema */}
        <Section
          eyebrow="O sistema"
          title="Quatro frentes integradas, um só ecossistema."
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
