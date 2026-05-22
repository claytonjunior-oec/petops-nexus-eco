import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { TrendingUp, Clock, HeartHandshake, Sparkles } from "lucide-react";

const URL = "https://petops-nexus-eco.lovable.app/vale-a-pena";

export const Route = createFileRoute("/vale-a-pena")({
  head: () => ({
    meta: [
      { title: "Vale a pena? — Calcule seu ROI com PetOps Tech" },
      {
        name: "description",
        content:
          "Descubra em segundos quanto o seu petshop está perdendo com no-show, agenda manual e clientes que somem. Calculadora de ROI e comparativo antes/depois com PetOps.",
      },
      { property: "og:title", content: "Vale a pena investir em PetOps Tech?" },
      {
        property: "og:description",
        content: "Calcule o ROI da automação no seu petshop. Compare antes e depois.",
      },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ValeAPenaPage,
});

function ValeAPenaPage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        <Hero />
        <Problema />
        <AntesDepois />
        <CalculadoraROI />
        <Garantias />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-6 lg:px-10 pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
            Vale a pena? · Faça as contas
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] text-balance">
          Antes de assinar, descubra{" "}
          <span className="text-tech-cyan">quanto você está perdendo</span> hoje
        </h1>
        <p className="mt-6 text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
          O custo de operar no improviso quase sempre é maior que o de assinar o
          PetOps. Veja os números da sua operação em segundos.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a
            href="#calculadora"
            className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 bg-tech-cyan text-bg-base rounded-sm hover:opacity-90 transition font-semibold"
          >
            Calcular meu ROI agora
          </a>
          <a
            href="#antes-depois"
            className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 border border-white/15 rounded-sm hover:bg-white/5 transition"
          >
            Ver antes e depois
          </a>
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
      title={<>Operar pet hoje é apagar incêndio o dia inteiro</>}
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
    <div id="antes-depois">
      <Section
        eyebrow="Antes / Depois"
        title="O salto da operação manual para a operação automatizada"
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
    </div>
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
    <div id="calculadora">
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
    </div>
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

/* ---------------- GARANTIAS ---------------- */
function Garantias() {
  const items = [
    { icon: Clock, title: "Implantação em 7 dias", desc: "Sua equipe rodando no sistema em uma semana, com migração assistida." },
    { icon: HeartHandshake, title: "Suporte humano de verdade", desc: "Time PetOps junto da sua operação — WhatsApp, vídeo e Academy." },
    { icon: TrendingUp, title: "ROI no primeiro mês", desc: "Reduzir no-show e reativar clientes já paga o plano logo no início." },
    { icon: Sparkles, title: "Sem fidelidade longa", desc: "Plano mensal. Se não fizer sentido, você cancela quando quiser." },
  ];
  return (
    <Section
      eyebrow="Por que faz sentido"
      title="O risco de assinar é menor que o risco de continuar como está"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it) => (
          <div
            key={it.title}
            className="p-6 rounded-2xl border border-white/10 bg-bg-surface/50 hover:border-tech-cyan/30 transition"
          >
            <div className="size-10 rounded-lg bg-tech-cyan/10 border border-tech-cyan/20 flex items-center justify-center mb-4">
              <it.icon className="size-5 text-tech-cyan" />
            </div>
            <div className="text-base font-medium text-white">{it.title}</div>
            <p className="text-xs text-white/55 leading-relaxed mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function CTAFinal() {
  return (
    <Section align="center">
      <div className="rounded-2xl border border-tech-cyan/20 bg-bg-surface/60 backdrop-blur p-12 text-center max-w-3xl mx-auto glow-tech">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan mb-4">
          Próximo passo
        </div>
        <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
          As contas fecharam? Bora colocar pra rodar.
        </h3>
        <p className="text-white/55 mb-8 max-w-xl mx-auto">
          Agende uma demo de 30 min, personalizada com os números do seu petshop —
          ou comece a assinar agora.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            to="/contato"
            className="inline-block font-mono text-[11px] uppercase tracking-widest px-8 py-4 bg-tech-cyan text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
          >
            Agendar demonstração
          </Link>
          <Link
            to="/assinar"
            search={{ plano: "profissional" }}
            className="inline-block font-mono text-[11px] uppercase tracking-widest px-8 py-4 border border-white/15 rounded-sm hover:bg-white/5 transition"
          >
            Ver planos e assinar
          </Link>
        </div>
      </div>
    </Section>
  );
}
