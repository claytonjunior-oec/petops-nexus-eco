import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import logo from "@/assets/petops-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PetOps — O futuro da operação pet" },
      {
        name: "description",
        content:
          "Ecossistema premium para o mercado pet. Tecnologia que automatiza e produtos que elevam a experiência. PetOps Tech + PetOps Care.",
      },
      { property: "og:title", content: "PetOps — O futuro da operação pet" },
      {
        property: "og:description",
        content: "Tech + Care. Um ecossistema premium para o novo mercado pet.",
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
      <Conceito />
      <TechSection />
      <CareSection />
      <Together />
      <ParaQuem />
      <Prova />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <main className="relative pt-16 min-h-dvh flex items-stretch">
      <div className="relative flex-1 flex min-h-[760px]">
        {/* Left — Tech */}
        <div className="w-1/2 relative border-r border-white/5 bg-grid-pattern overflow-hidden hidden md:flex flex-col justify-between p-8">
          <div className="absolute top-1/4 -left-1/4 size-[700px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="font-mono text-[10px] text-tech-cyan/70 tracking-[0.2em] leading-relaxed z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_8px_var(--color-tech-neon)] animate-pulse" />
              TECH.INFRA_ACTIVE
            </div>
            <div>LATENCY · 0.014ms</div>
            <div>NODES · 1,024 ON</div>
            <div>AUTOMATION · MAX</div>
          </div>
          <div className="text-[110px] xl:text-[140px] font-bold text-white/[0.025] tracking-tighter leading-none select-none -ml-2 z-10">
            TECH<br />CORE
          </div>
        </div>

        {/* Right — Care */}
        <div className="w-1/2 relative bg-grid-pattern overflow-hidden hidden md:flex flex-col justify-between p-8">
          <div className="absolute bottom-1/4 -right-1/4 size-[700px] bg-care-blue/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="font-mono text-[10px] text-care-blue/70 tracking-[0.2em] leading-relaxed text-right z-10">
            <div className="flex items-center justify-end gap-2 mb-3">
              <div className="size-1.5 bg-care-green rounded-full shadow-[0_0_8px_var(--color-care-green)]" />
              CARE.BIO_SYNCED
            </div>
            <div>WELFARE · NOMINAL</div>
            <div>EXPERIENCE · 99.8</div>
            <div>RECURRENCE · ACTIVE</div>
          </div>
          <div className="text-[110px] xl:text-[140px] font-bold text-white/[0.025] tracking-tighter leading-none select-none text-right -mr-2 z-10">
            CARE<br />SYNC
          </div>
        </div>

        {/* Mobile background */}
        <div className="md:hidden absolute inset-0 bg-grid-pattern">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 size-[500px] bg-tech-cyan/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 size-[500px] bg-care-blue/15 blur-[120px] rounded-full" />
        </div>

        {/* Center spine */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent pointer-events-none z-20 hidden md:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-28 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md bg-bg-base/50 shadow-[0_0_50px_rgba(255,255,255,0.06)]">
            <div className="size-14 border border-white/20 rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-tech-cyan/30 to-care-blue/30 blur-md" />
              <img src={logo} alt="" className="size-9 object-contain relative" />
            </div>
          </div>
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center z-30 px-6">
          <div className="max-w-4xl w-full flex flex-col items-center text-center">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-bg-base/80 backdrop-blur-xl mb-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
                Ecossistema Unificado
              </span>
              <div className="w-px h-3 bg-white/20" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                V. 2.0
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[80px] font-medium tracking-tight text-white leading-[1.02] text-balance mb-6">
              O futuro da operação pet{" "}
              <span className="text-gradient-brand">começa aqui.</span>
            </h1>

            <p className="text-base md:text-xl text-white/55 max-w-2xl text-pretty font-light leading-relaxed mb-10">
              Tecnologia para automatizar, organizar e vender mais. Cuidado e
              produtos para elevar a experiência do seu negócio pet.
            </p>

            <div className="flex flex-col gap-3 w-full max-w-md">
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/tech"
                  className="group relative px-5 py-4 bg-bg-surface border border-tech-cyan/30 rounded-md hover:border-tech-cyan hover:shadow-[0_0_24px_-4px_var(--color-tech-cyan)] transition-all"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-tech-cyan">
                    Conhecer Tech
                  </span>
                </Link>
                <Link
                  to="/care"
                  className="group relative px-5 py-4 bg-bg-surface border border-care-blue/30 rounded-md hover:border-care-blue hover:shadow-[0_0_24px_-4px_var(--color-care-blue)] transition-all"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-care-blue">
                    Conhecer Care
                  </span>
                </Link>
              </div>
              <Link
                to="/ecossistema"
                className="px-6 py-4 bg-white text-bg-base rounded-md hover:bg-white/90 font-mono text-[11px] uppercase tracking-widest font-semibold transition"
              >
                Ver o ecossistema completo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom UI bar */}
        <div className="absolute bottom-0 inset-x-0 h-12 border-t border-white/5 bg-bg-base/40 backdrop-blur flex items-center justify-between px-6 lg:px-10 z-40 hidden md:flex">
          <div className="font-mono text-[10px] text-white/30 tracking-widest">// SECURE_CONNECTION</div>
          <div className="flex gap-1">
            <div className="w-8 h-1 bg-white/30 rounded-full" />
            <div className="w-2 h-1 bg-white/10 rounded-full" />
            <div className="w-2 h-1 bg-white/10 rounded-full" />
          </div>
          <div className="font-mono text-[10px] text-white/30 tracking-widest">SYS.SCROLL ↓</div>
        </div>
      </div>
    </main>
  );
}

/* ---------------- CONCEITO ---------------- */
function Conceito() {
  const cards = [
    { t: "Automatize sua operação", d: "Agenda, WhatsApp, lembretes e gestão funcionando sozinhos." },
    { t: "Eleve a experiência do cliente", d: "Cuidado premium em cada toque, da recepção ao pós-serviço." },
    { t: "Gere mais valor com tecnologia e produtos", d: "Tech reduz custo. Care eleva margem. Juntos, multiplicam." },
  ];
  return (
    <Section
      eyebrow="Conceito"
      title={<>Mais que uma marca. Um ecossistema para o mercado pet.</>}
      intro="A PetOps integra tecnologia, automação e soluções de cuidado para transformar a rotina de negócios pet em operações mais inteligentes, mais lucrativas e mais desejadas pelos clientes."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map((c, i) => (
          <div
            key={c.t}
            className="p-8 rounded-xl border border-white/10 bg-bg-surface hover:bg-bg-elevated transition group relative overflow-hidden"
          >
            <div className="font-mono text-[10px] text-white/30 tracking-widest mb-4">
              {String(i + 1).padStart(2, "0")} / 03
            </div>
            <h3 className="text-xl font-medium text-white mb-3">{c.t}</h3>
            <p className="text-sm text-white/55 leading-relaxed">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- TECH SECTION ---------------- */
function TechSection() {
  const blocks = [
    "Agenda inteligente",
    "WhatsApp com IA",
    "Lembretes automáticos",
    "Check-in e acompanhamento",
    "Reativação e recorrência",
    "Gestão operacional",
  ];
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/2 left-0 size-[600px] bg-tech-cyan/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-tech-cyan/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
              MÓDULO 01 · PETOPS TECH
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
            A camada inteligente do seu negócio pet.
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-8">
            Sistema completo para automatizar a rotina, qualificar leads no
            WhatsApp e operar com previsibilidade — sem depender de planilha.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contato"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 bg-tech-cyan text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
            >
              Agendar demo
            </Link>
            <Link
              to="/tech"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 border border-white/15 rounded-sm hover:bg-white/5 transition"
            >
              Ver tudo que a Tech faz
            </Link>
          </div>
        </div>

        {/* Mock dashboard */}
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] glow-tech">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-mono text-[10px] text-white/40 tracking-widest">
                <div className="size-1.5 bg-tech-neon rounded-full animate-pulse" />
                PETOPS.TECH / DASH
              </div>
              <div className="flex gap-1.5">
                <div className="size-2 rounded-full bg-white/10" />
                <div className="size-2 rounded-full bg-white/10" />
                <div className="size-2 rounded-full bg-white/10" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <Stat label="Reativação" value="94.2%" trend="+12.4%" color="tech-neon" />
              <Stat label="No-show" value="3.1%" trend="-8.2%" color="tech-cyan" />
            </div>

            <div className="rounded-lg border border-white/5 bg-bg-base/60 p-5">
              <div className="font-mono text-[10px] text-white/40 tracking-widest mb-4">
                FLUXO · ÚLTIMOS 7 DIAS
              </div>
              <div className="flex items-end gap-2 h-24">
                {[40, 60, 35, 80, 55, 95, 70].map((h, i) => (
                  <div key={i} className="flex-1 relative">
                    <div
                      className={`w-full rounded-t-sm ${
                        i === 5
                          ? "bg-gradient-to-t from-tech-cyan to-tech-neon shadow-[0_0_15px_var(--color-tech-cyan)]"
                          : "bg-white/10"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {blocks.slice(0, 6).map((b) => (
                <div
                  key={b}
                  className="p-3 rounded-md border border-white/5 bg-bg-base/40 font-mono text-[10px] text-white/60 tracking-wider truncate"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -inset-4 bg-tech-cyan/5 blur-3xl -z-10 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, trend, color }: { label: string; value: string; trend: string; color: string }) {
  return (
    <div className="rounded-lg border border-white/5 bg-bg-base/60 p-4">
      <div className="font-mono text-[10px] text-white/40 tracking-widest mb-2">{label}</div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-light text-white tabular-nums">{value}</div>
        <div className={`text-[10px] font-mono text-${color} tabular-nums`}>{trend}</div>
      </div>
    </div>
  );
}

/* ---------------- CARE SECTION ---------------- */
function CareSection() {
  const cats = ["Higiene", "Hidratação", "Odorização", "Limpeza de ambiente", "Cuidados complementares", "Linha profissional"];
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute top-1/2 right-0 size-[600px] bg-care-blue/8 blur-[160px] rounded-full pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Mock products */}
        <div className="relative order-2 lg:order-1">
          <div className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] glow-care">
            <div className="flex items-center justify-between mb-8">
              <div className="font-mono text-[10px] text-white/40 tracking-widest">
                PETOPS.CARE / LINE
              </div>
              <div className="font-mono text-[10px] text-care-blue/70 tracking-widest">
                06 SKUs
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {cats.map((c, i) => (
                <div
                  key={c}
                  className="aspect-[3/4] rounded-lg border border-white/10 bg-gradient-to-b from-bg-base to-bg-elevated p-3 flex flex-col justify-between hover:border-care-blue/40 transition group relative overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-care-blue/15 to-transparent opacity-50 group-hover:opacity-100 transition" />
                  <div className="font-mono text-[9px] text-white/30 tracking-widest relative">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative">
                    <div className="size-8 rounded bg-gradient-to-br from-care-blue/40 to-care-green/20 mb-2" />
                    <div className="text-[10px] text-white/80 font-medium leading-tight">{c}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -inset-4 bg-care-blue/5 blur-3xl -z-10 rounded-3xl" />
        </div>

        <div className="order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-care-blue/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-care-blue">
              MÓDULO 02 · PETOPS CARE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
            Produtos para elevar o cuidado e o valor percebido.
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-8">
            Linha premium pensada para banho, tosa, clínica e revenda. Fórmulas
            de alta qualidade em embalagens que comunicam valor.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/care"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 bg-care-blue text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
            >
              Conhecer linha Care
            </Link>
            <Link
              to="/contato"
              className="font-mono text-[11px] uppercase tracking-widest px-5 py-3 border border-white/15 rounded-sm hover:bg-white/5 transition"
            >
              Quero revender
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TOGETHER ---------------- */
function Together() {
  const steps = ["Captação", "Atendimento", "Agendamento", "Execução", "Pós-serviço", "Recompra"];
  return (
    <Section
      eyebrow="Tech + Care"
      title={<>A nova geração de negócios pet não separa operação de experiência.</>}
      intro="Com a PetOps, sua empresa automatiza a rotina, melhora o atendimento e amplia valor com uma linha de cuidado pensada para elevar a percepção da marca."
    >
      <div className="relative rounded-2xl border border-white/10 bg-bg-surface/40 backdrop-blur p-6 md:p-10">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-tech-cyan/40 via-white/20 to-care-blue/40 hidden md:block" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center text-center group">
              <div className="size-12 rounded-full border border-white/15 bg-bg-base flex items-center justify-center mb-3 backdrop-blur group-hover:border-white/40 transition relative z-10">
                <div className="font-mono text-[10px] text-white/60">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div className="text-sm text-white font-medium">{s}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/ecossistema"
          className="inline-block font-mono text-[11px] uppercase tracking-widest px-6 py-3 border border-white/15 rounded-sm hover:bg-white/5 transition"
        >
          Ver ecossistema detalhado →
        </Link>
      </div>
    </Section>
  );
}

/* ---------------- PARA QUEM ---------------- */
function ParaQuem() {
  const items = [
    "Pet shops",
    "Banho e tosa",
    "Clínicas veterinárias",
    "Operações em expansão",
    "Negócios que querem elevar margem e experiência",
  ];
  return (
    <Section eyebrow="Para quem é" title="Construído para o novo negócio pet.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {items.map((it, i) => (
          <div
            key={it}
            className="p-6 rounded-lg border border-white/10 bg-bg-surface hover:border-white/30 hover:bg-bg-elevated transition group"
          >
            <div className="font-mono text-[10px] text-white/30 mb-4 tracking-widest">
              T.{String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-white font-medium leading-tight">{it}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROVA ---------------- */
function Prova() {
  return (
    <Section
      eyebrow="Construído com visão de ecossistema"
      title="Para quem quer evoluir o mercado pet."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { v: "2", l: "frentes integradas", c: "tech-cyan" },
          { v: "06+", l: "módulos operacionais", c: "tech-neon" },
          { v: "100%", l: "foco em negócios pet", c: "care-blue" },
        ].map((s) => (
          <div key={s.l} className="p-10 rounded-xl border border-white/10 bg-bg-surface text-center">
            <div className={`text-6xl font-light text-${s.c} tabular-nums tracking-tight mb-3`}>
              {s.v}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/50">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 size-[500px] bg-care-blue/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-bg-base/80 backdrop-blur mb-8">
          <div className="size-1.5 bg-tech-neon rounded-full animate-pulse shadow-[0_0_8px_var(--color-tech-neon)]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
            PRÓXIMO NÍVEL
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.02] text-balance mb-6">
          Escolha o próximo nível do seu{" "}
          <span className="text-gradient-brand">negócio pet.</span>
        </h2>
        <p className="text-lg text-white/50 max-w-xl mx-auto mb-12">
          Tech, Care ou ecossistema completo. Comece pela frente que faz mais
          sentido hoje.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/tech"
            className="font-mono text-[11px] uppercase tracking-widest px-6 py-4 bg-bg-surface border border-tech-cyan/30 rounded-md text-tech-cyan hover:border-tech-cyan transition"
          >
            Quero ver a Tech
          </Link>
          <Link
            to="/contato"
            className="font-mono text-[11px] uppercase tracking-widest px-8 py-4 bg-white text-bg-base rounded-md font-semibold hover:bg-white/90 transition"
          >
            Falar com a PetOps
          </Link>
          <Link
            to="/care"
            className="font-mono text-[11px] uppercase tracking-widest px-6 py-4 bg-bg-surface border border-care-blue/30 rounded-md text-care-blue hover:border-care-blue transition"
          >
            Quero ver a Care
          </Link>
        </div>
      </div>
    </section>
  );
}
