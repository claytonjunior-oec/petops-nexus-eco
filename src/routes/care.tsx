import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/care")({
  head: () => ({
    meta: [
      { title: "PetOps Care — Linha premium de cuidado pet" },
      {
        name: "description",
        content:
          "Produtos profissionais de higiene, hidratação e cuidado para elevar a experiência e o valor do seu negócio pet.",
      },
      { property: "og:title", content: "PetOps Care" },
      {
        property: "og:description",
        content:
          "Uma linha de cuidado pensada para elevar a experiência do mercado pet.",
      },
    ],
  }),
  component: CarePage,
});

const categorias = [
  { name: "Higiene", desc: "Shampoos e condicionadores de alta performance." },
  { name: "Hidratação", desc: "Máscaras e tratamentos para pelagens nobres." },
  { name: "Odorização", desc: "Perfumaria pet com fixação profissional." },
  { name: "Limpeza de ambiente", desc: "Soluções para banho e tosa, clínica e canil." },
  { name: "Cuidados complementares", desc: "Linha de finalização, escovação e proteção." },
  { name: "Linha profissional", desc: "Embalagens e custo pensados para revenda." },
];

const diferenciais = [
  "Fórmulas de alta qualidade",
  "Apresentação premium",
  "Experiência sensorial de cuidado",
  "Potencial real de revenda",
  "Condições profissionais para parceiros",
];

function CarePage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative px-6 lg:px-10 pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 size-[600px] bg-care-blue/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="relative max-w-[1440px] mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-1.5 bg-care-green rounded-full shadow-[0_0_10px_var(--color-care-green)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-care-blue">
                MÓDULO 02 · CARE
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05] max-w-4xl text-balance">
              Uma linha de cuidado pensada para{" "}
              <span className="text-care-blue">elevar a experiência</span> do
              mercado pet.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
              Produtos premium para banho, tosa, clínica e revenda. Fórmulas de
              alto nível em embalagens que comunicam valor desde a prateleira.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 bg-care-blue text-bg-base rounded-sm hover:opacity-90 transition font-semibold"
              >
                Solicitar catálogo
              </Link>
              <Link
                to="/contato"
                className="font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 border border-white/15 rounded-sm hover:bg-white/5 transition"
              >
                Quero revender
              </Link>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <Section eyebrow="Categorias" title="Uma linha completa de cuidado profissional.">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorias.map((c, i) => (
              <div
                key={c.name}
                className="group relative rounded-xl border border-white/10 bg-bg-surface p-8 hover:border-care-blue/40 transition-all overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 size-32 bg-care-blue/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="font-mono text-[10px] text-care-blue/70 mb-4 tracking-widest">
                    LINE.{String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="size-14 rounded-lg border border-care-blue/20 bg-care-blue/5 mb-6 flex items-center justify-center">
                    <div className="size-6 rounded-sm bg-gradient-to-br from-care-blue/40 to-care-green/20" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{c.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Diferenciais */}
        <Section
          eyebrow="Diferenciais"
          title="O que torna a Care diferente do que existe na prateleira."
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {diferenciais.map((d, i) => (
              <div
                key={d}
                className="p-6 rounded-lg border border-white/10 bg-bg-surface/50 flex items-center gap-4"
              >
                <div className="font-mono text-xs text-care-blue tracking-widest min-w-[2.5rem]">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-white/85">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section align="center">
          <div className="rounded-2xl border border-care-blue/20 bg-bg-surface/60 backdrop-blur p-12 text-center max-w-3xl mx-auto glow-care">
            <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
              Quer levar a Care para o seu negócio?
            </h3>
            <p className="text-white/50 mb-8">
              Catálogo, condições profissionais e parceria de revenda.
            </p>
            <Link
              to="/contato"
              className="inline-block font-mono text-[11px] uppercase tracking-widest px-8 py-4 bg-care-blue text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
            >
              Falar com a PetOps
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
