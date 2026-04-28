import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a PetOps — Ecossistema premium para o mercado pet" },
      {
        name: "description",
        content:
          "Construído para quem quer evoluir o mercado pet. Conheça a visão por trás do ecossistema PetOps.",
      },
      { property: "og:title", content: "Sobre a PetOps" },
      { property: "og:description", content: "Construído para quem quer evoluir o mercado pet." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        <section className="relative px-6 lg:px-10 pt-24 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="relative max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-white/30" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                SOBRE
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.02] max-w-4xl text-balance">
              Construído para quem quer{" "}
              <span className="text-gradient-brand">evoluir o mercado pet.</span>
            </h1>
          </div>
        </section>

        <Section>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <p className="text-lg text-white/70 leading-relaxed">
              A PetOps nasceu de uma visão simples: o mercado pet merece um
              ecossistema completo, não soluções isoladas.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Reunimos tecnologia de ponta e uma linha premium de cuidado para
              elevar simultaneamente a operação e a experiência do cliente final.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Pet shops, banho e tosa, clínicas e operações em expansão ganham
              uma camada inteligente que automatiza, organiza e amplia margem.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Mais que uma marca: um padrão para o que vem por aí no setor.
            </p>
          </div>
        </Section>

        <Section eyebrow="Princípios">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { t: "Tecnologia que simplifica", d: "Sistema invisível, decisão visível." },
              { t: "Cuidado que gera valor", d: "Cada produto eleva a percepção da marca." },
              { t: "Inteligência integrada", d: "Tech e Care trabalham na mesma direção." },
            ].map((p) => (
              <div key={p.t} className="p-8 rounded-xl border border-white/10 bg-bg-surface">
                <h3 className="text-xl font-medium text-white mb-3">{p.t}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
