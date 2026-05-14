import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Section } from "@/components/site/Section";
import { Link } from "@tanstack/react-router";
import { ImageIcon, Leaf, FlaskConical, HeartHandshake } from "lucide-react";
import careHeroProdutos from "@/assets/care-hero-produtos.png";
import { ProductCard } from "@/components/site/ProductCard";
import { careKits, careProducts, careSubscriptions } from "@/data/care-products";
import { Check, Repeat, ShieldCheck, Truck } from "lucide-react";

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
          <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="size-1.5 bg-care-green rounded-full shadow-[0_0_10px_var(--color-care-green)]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-care-blue">
                  MÓDULO 02 · CARE
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.05] text-balance">
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
            <div className="relative lg:-mr-16 xl:-mr-32">
              <img
                src={careHeroProdutos}
                alt="Linha PetOps Care: Shampoo Pro, Condicionador Reparador, Desinfetante Bactericida e Colônias Soft"
                className="w-full h-auto object-contain scale-110 lg:scale-125 origin-center drop-shadow-[0_30px_60px_rgba(79,107,255,0.25)]"
                loading="eager"
              />
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


        {/* Assinatura PetOps Care */}
        <Section
          eyebrow="Assinatura · Care Subscription"
          title="Nunca mais falte produto no seu salão."
          intro="Receba todo mês o que seu petshop precisa pra operar e revender. Sem pedido manual, sem estoque parado, com preço travado por 12 meses."
        >
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {careSubscriptions.map((plan, i) => (
              <article
                key={plan.id}
                className={`relative rounded-xl bg-bg-surface p-7 flex flex-col gap-5 transition ${
                  plan.highlight
                    ? "border border-care-blue/60 shadow-[0_0_60px_-20px_var(--color-care-blue)]"
                    : "border border-white/10 hover:border-care-blue/30"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.25em] bg-care-blue text-bg-base px-3 py-1.5 rounded-sm font-semibold">
                    {plan.badge}
                  </span>
                )}
                <div className="flex flex-col gap-1.5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-care-blue">
                    SUB.{String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-medium text-white">{plan.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{plan.tagline}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 mt-1">
                    {plan.capacity}
                  </p>
                </div>
                <div className="flex items-baseline gap-1.5 border-y border-white/10 py-4">
                  <span className="text-xs text-white/50">R$</span>
                  <span className="text-4xl font-medium text-white tracking-tight">
                    {plan.monthlyPrice.toLocaleString("pt-BR")}
                  </span>
                  <span className="text-sm text-white/50">/mês</span>
                </div>
                <ul className="space-y-2 flex-1">
                  {plan.items.map((it) => (
                    <li key={it} className="text-sm text-white/80 flex items-start gap-2.5">
                      <Check className="size-4 text-care-green shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contato"
                  className={`mt-2 text-center font-mono text-[11px] uppercase tracking-widest px-6 py-3.5 rounded-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-care-blue text-bg-base hover:opacity-90"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  Quero esse plano
                </Link>
              </article>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Repeat, title: "Entrega automática", desc: "Mensal, sem pedido manual." },
              { icon: ShieldCheck, title: "Preço travado", desc: "12 meses, sem reajuste." },
              { icon: Truck, title: "Frete incluso", desc: "Para todo o Brasil." },
              { icon: Check, title: "Total flexibilidade", desc: "Pause, troque ou ajuste a qualquer momento." },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-lg border border-white/10 bg-bg-surface/50 p-5 flex items-start gap-3"
              >
                <div className="size-9 rounded-md border border-care-blue/30 bg-care-blue/10 flex items-center justify-center shrink-0">
                  <b.icon className="size-4 text-care-blue" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{b.title}</div>
                  <p className="text-xs text-white/55 leading-relaxed mt-0.5">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>


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
