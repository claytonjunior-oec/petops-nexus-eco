import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { Link } from "@tanstack/react-router";
import { ImageIcon, Leaf, FlaskConical, HeartHandshake } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { careKits, careProducts } from "@/data/care-products";

export const Route = createFileRoute("/care")({
  head: () => ({
    meta: [
      { title: "PetOps Care — Linha profissional 90% natural para pet" },
      {
        name: "description",
        content:
          "Linha profissional PetOps Care: shampoos, condicionadores, colônias, cuidado bucal e bálsamos veganos. 90% natural, pensada para revenda no petshop.",
      },
      { property: "og:title", content: "PetOps Care — Linha profissional pet" },
      {
        property: "og:description",
        content:
          "Produtos profissionais para banho, tosa, clínica e revenda. 90% natural, 10% ciência, 0% crueldade.",
      },
    ],
  }),
  component: CarePage,
});

const diferenciais = [
  "Fórmulas 90% naturais",
  "Linha Protect 100% vegana",
  "pH balanceado e seguro para uso diário",
  "Apresentação premium para a prateleira",
  "Embalagens profissionais com custo para revenda",
  "Kits prontos para aumentar o ticket médio",
];

function CarePage() {
  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative px-6 lg:px-10 pt-24 pb-24 overflow-hidden">
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
              Linha profissional{" "}
              <span className="text-care-blue">90% natural</span>{" "}
              para elevar o cuidado pet.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
              Produtos para banho, tosa, clínica e revenda. Fórmulas com base
              vegetal, pH balanceado e apresentação que comunica valor desde a
              prateleira.
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

        {/* Faixa 90 / 10 / 0 */}
        <section className="px-6 lg:px-10 pb-8">
          <div className="max-w-[1440px] mx-auto grid md:grid-cols-3 gap-4">
            {[
              {
                icon: Leaf,
                value: "90%",
                title: "Natural",
                desc: "Manteiga de karité, óleos vegetais e bases suaves de origem vegetal.",
              },
              {
                icon: FlaskConical,
                value: "10%",
                title: "Ciência",
                desc: "Ativos dermatológicos, pH balanceado e conservação segura para uso diário.",
              },
              {
                icon: HeartHandshake,
                value: "0%",
                title: "Crueldade",
                desc: "Linha Protect 100% vegana. Cuidado que respeita o pet e o tutor.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-white/10 bg-bg-surface/60 p-6 flex items-start gap-4"
              >
                <div className="size-12 rounded-lg border border-care-blue/30 bg-care-blue/10 flex items-center justify-center shrink-0">
                  <p.icon className="size-5 text-care-blue" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-medium text-white">{p.value}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
                      {p.title}
                    </span>
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Linha profissional */}
        <Section
          eyebrow="Linha Profissional"
          title="Catálogo PetOps Care."
          intro="Oito produtos pensados para o salão, a clínica e a prateleira do petshop. Fórmulas profissionais com identidade premium."
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {careProducts.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </Section>

        {/* Kits */}
        <Section
          eyebrow="Kits para revenda"
          title="Aumente o ticket médio do seu petshop."
          intro="Kits prontos para venda no balcão pós-banho ou para uso interno do salão. Recompra previsível, fidelização do tutor."
        >
          <div className="grid md:grid-cols-3 gap-5">
            {careKits.map((k, i) => (
              <article
                key={k.id}
                className="rounded-xl border border-white/10 bg-bg-surface overflow-hidden flex flex-col hover:border-care-blue/40 transition"
              >
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-care-blue/20 via-bg-elevated to-tech-cyan/10 border-b border-white/10 flex items-center justify-center text-white/40">
                  <div className="flex flex-col items-center gap-2">
                    <ImageIcon className="size-7" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                      Imagem em breve
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-care-blue">
                    KIT.{String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-medium text-white">{k.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{k.pitch}</p>
                  <ul className="mt-auto space-y-1.5">
                    {k.items.map((it) => (
                      <li
                        key={it}
                        className="text-sm text-white/75 flex items-start gap-2"
                      >
                        <span className="text-tech-cyan font-mono">+</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
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
              Catálogo profissional, condições para revenda e kits prontos para o balcão.
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
