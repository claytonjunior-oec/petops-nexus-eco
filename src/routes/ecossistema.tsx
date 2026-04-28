import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/ecossistema")({
  head: () => ({
    meta: [
      { title: "Ecossistema PetOps — Tech + Care unificados" },
      {
        name: "description",
        content:
          "Como tecnologia e cuidado se conectam em cada etapa do ciclo: captação, atendimento, agendamento, execução, pós-serviço e recompra.",
      },
      { property: "og:title", content: "Ecossistema PetOps" },
      {
        property: "og:description",
        content: "Uma operação mais inteligente. Uma experiência mais valiosa.",
      },
    ],
  }),
  component: EcoPage,
});

const flow = [
  { stage: "Captação", tech: "Lead capturado por IA no WhatsApp", care: "Branding premium atrai público qualificado" },
  { stage: "Atendimento", tech: "Bot qualifica e agenda", care: "Tom de voz da marca em cada toque" },
  { stage: "Agendamento", tech: "Encaixe automático na agenda", care: "Confirmação com identidade visual cuidada" },
  { stage: "Execução", tech: "Check-in com foto e timer", care: "Produtos premium na execução do serviço" },
  { stage: "Pós-serviço", tech: "Relato automático ao tutor", care: "Mimo e produto de revenda na sacola" },
  { stage: "Recompra", tech: "Régua inteligente reativa o cliente", care: "Linha de cuidado em casa fideliza" },
];

function EcoPage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative px-6 lg:px-10 pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-tech-cyan/5 blur-[160px] rounded-full pointer-events-none" />
          <div className="relative max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-white/30" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                ECOSSISTEMA
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.02] max-w-4xl text-balance">
              Uma operação mais inteligente. Uma experiência mais{" "}
              <span className="text-gradient-brand">valiosa.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
              A nova geração de negócios pet não separa operação de experiência.
              Tech e Care trabalham juntas em cada ponto da jornada.
            </p>
          </div>
        </section>

        {/* Flow */}
        <Section eyebrow="Jornada conectada" title="Em cada etapa, Tech e Care entram juntas.">
          <div className="space-y-px bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            {flow.map((f, i) => (
              <div
                key={f.stage}
                className="grid md:grid-cols-[200px_1fr_1fr] bg-bg-surface hover:bg-bg-elevated transition group"
              >
                <div className="p-6 border-r border-white/5 flex items-center gap-4">
                  <div className="font-mono text-[10px] text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-medium text-white">{f.stage}</div>
                </div>
                <div className="p-6 border-r border-white/5 flex items-start gap-3">
                  <div className="font-mono text-[10px] text-tech-cyan tracking-widest mt-1">TECH</div>
                  <p className="text-sm text-white/70 leading-relaxed">{f.tech}</p>
                </div>
                <div className="p-6 flex items-start gap-3">
                  <div className="font-mono text-[10px] text-care-blue tracking-widest mt-1">CARE</div>
                  <p className="text-sm text-white/70 leading-relaxed">{f.care}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Statement */}
        <Section align="center">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-3xl md:text-4xl font-medium text-white leading-tight tracking-tight text-balance">
              PetOps não é só software. <br />
              PetOps não é só produto. <br />
              <span className="text-gradient-brand">
                PetOps é infraestrutura de crescimento para negócios pet.
              </span>
            </p>
            <div className="mt-12 flex justify-center gap-3 flex-wrap">
              <Link
                to="/contato"
                className="font-mono text-[11px] uppercase tracking-widest px-8 py-4 bg-white text-bg-base rounded-sm font-semibold hover:bg-white/90 transition"
              >
                Falar com a PetOps
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
