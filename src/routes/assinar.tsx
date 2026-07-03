import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";
import { z } from "zod";

const WHATSAPP_NUMBER = "5511918967593";

const planos = {
  gratuito: {
    name: "Gratuito",
    price: "R$ 0/mês",
    tagline: "Para começar a organizar a operação.",
    cta: "Começar grátis",
  },
  essencial: {
    name: "Essencial",
    price: "R$ 197/mês",
    tagline: "Recepção, loja e estoque rodando juntos.",
    cta: "Assinar Essencial",
  },
  profissional: {
    name: "Profissional",
    price: "R$ 257/mês",
    tagline: "Clínica, hotel e gestão completa.",
    cta: "Assinar Profissional",
  },
  premium: {
    name: "Premium",
    price: "R$ 497/mês",
    tagline: "IA + automações no piloto automático.",
    cta: "Assinar Premium",
  },
} as const;

type PlanoId = keyof typeof planos;

const searchSchema = z.object({
  plano: z.enum(["gratuito", "essencial", "profissional", "premium"]).catch("profissional"),
});

const formSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome").max(100),
  empresa: z.string().trim().min(1, "Informe o nome do petshop").max(100),
  cnpj: z.string().trim().max(20).optional().default(""),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone/WhatsApp inválido").max(30),
  cidade: z.string().trim().min(1, "Informe a cidade").max(100),
  estado: z.string().trim().min(2, "UF").max(2),
  funcionarios: z.enum(["1-2", "3-5", "6-10", "10+"]),
  atendimentos: z.enum(["até 100", "100-300", "300-800", "800+"]),
  inicio: z.enum(["Imediato", "Em até 15 dias", "Em até 30 dias", "Estou avaliando"]),
  obs: z.string().trim().max(800).optional().default(""),
});

export const Route = createFileRoute("/assinar")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Assinar PetOps Tech — Confirme seu plano" },
      {
        name: "description",
        content:
          "Confirme os dados da sua operação e finalize a assinatura com acompanhamento humano via WhatsApp.",
      },
      { name: "robots", content: "noindex,follow" },
    ],
  }),
  component: AssinarPage,
});

function AssinarPage() {
  const { plano } = useSearch({ from: "/assinar" }) as { plano: PlanoId };
  const selected = planos[plano];
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPlano, setCurrentPlano] = useState<PlanoId>(plano);
  const current = planos[currentPlano];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = formSchema.safeParse({
      nome: fd.get("nome"),
      empresa: fd.get("empresa"),
      cnpj: fd.get("cnpj") ?? "",
      email: fd.get("email"),
      telefone: fd.get("telefone"),
      cidade: fd.get("cidade"),
      estado: (fd.get("estado") as string)?.toUpperCase(),
      funcionarios: fd.get("funcionarios"),
      atendimentos: fd.get("atendimentos"),
      inicio: fd.get("inicio"),
      obs: fd.get("obs") ?? "",
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Verifique os campos");
      return;
    }
    setError(null);
    const d = parsed.data;
    const text =
      `Olá! Quero assinar o plano *${current.name} (${current.price})* do PetOps Tech.\n\n` +
      `*— Dados do petshop —*\n` +
      `*Nome:* ${d.nome}\n` +
      `*Petshop:* ${d.empresa}\n` +
      (d.cnpj ? `*CNPJ:* ${d.cnpj}\n` : "") +
      `*E-mail:* ${d.email}\n` +
      `*WhatsApp:* ${d.telefone}\n` +
      `*Cidade/UF:* ${d.cidade}/${d.estado}\n\n` +
      `*— Operação —*\n` +
      `*Funcionários:* ${d.funcionarios}\n` +
      `*Atendimentos/mês:* ${d.atendimentos}\n` +
      `*Início desejado:* ${d.inicio}\n` +
      (d.obs ? `\n*Observações:*\n${d.obs}\n` : "");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        <section className="relative px-6 lg:px-10 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-0 right-0 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-[380px_1fr] gap-12 items-start">
            {/* Sidebar com plano */}
            <aside className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
                  ASSINATURA · PETOPS TECH
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
                Você está a um passo de ativar o{" "}
                <span className="text-tech-cyan">{selected.name}</span>
              </h1>
              <p className="mt-4 text-white/55 text-sm leading-relaxed">
                Para garantir uma ativação correta, no início toda assinatura
                passa por mim pelo WhatsApp — confirmo dados, libero acesso e
                acompanho o setup. Em breve será 100% automático pelo site.
              </p>

              <div className="mt-8 rounded-xl border border-tech-cyan/30 bg-bg-surface/60 p-6 backdrop-blur-xl">
                <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
                  Plano escolhido
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-medium text-white">{current.name}</span>
                  <span className="text-lg text-tech-cyan font-medium">{current.price}</span>
                </div>
                <p className="text-xs text-white/50 mt-2">{current.tagline}</p>

                <div className="mt-5 pt-5 border-t border-white/10">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                    Trocar plano
                  </label>
                  <select
                    value={currentPlano}
                    onChange={(e) => setCurrentPlano(e.target.value as PlanoId)}
                    className="w-full bg-bg-base border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-tech-cyan"
                  >
                    {Object.entries(planos).map(([id, p]) => (
                      <option key={id} value={id}>
                        {p.name} — {p.price}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-white/55">
                <li className="flex gap-2"><span className="text-tech-cyan">✓</span> Onboarding guiado e importação de dados</li>
                <li className="flex gap-2"><span className="text-tech-cyan">✓</span> Treinamento da equipe (Academy)</li>
                <li className="flex gap-2"><span className="text-tech-cyan">✓</span> Suporte direto comigo nos 30 primeiros dias</li>
                <li className="flex gap-2"><span className="text-tech-cyan">✓</span> Sem fidelidade — cancele quando quiser</li>
              </ul>

              <Link
                to="/planos"
                className="inline-block mt-6 font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition"
              >
                ← Comparar planos
              </Link>
            </aside>

            {/* Formulário */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-8 md:p-10"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <div className="size-14 mx-auto rounded-full bg-tech-neon/10 border border-tech-neon/30 flex items-center justify-center mb-6">
                    <span className="text-tech-neon text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-3">
                    Pedido enviado pelo WhatsApp
                  </h3>
                  <p className="text-white/50 max-w-md mx-auto">
                    Acabei de receber seus dados. Em poucos minutos eu respondo
                    confirmando a ativação do <strong>{current.name}</strong> e os
                    próximos passos.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 font-mono text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition"
                  >
                    ← Voltar ao formulário
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-medium text-white mb-1">
                    Confirme os dados da sua operação
                  </h2>
                  <p className="text-sm text-white/50 mb-8">
                    Ao enviar, abre o WhatsApp com tudo já preenchido para mim.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Seu nome" name="nome" maxLength={100} />
                    <Field label="Nome do petshop" name="empresa" maxLength={100} />
                    <Field label="E-mail" name="email" type="email" maxLength={255} />
                    <Field label="WhatsApp" name="telefone" maxLength={30} placeholder="(11) 9 9999-9999" />
                    <Field label="Cidade" name="cidade" maxLength={100} />
                    <Field label="UF" name="estado" maxLength={2} placeholder="SP" />
                    <Field label="CNPJ (opcional)" name="cnpj" required={false} maxLength={20} />
                    <SelectField label="Funcionários" name="funcionarios" options={["1-2", "3-5", "6-10", "10+"]} />
                    <SelectField label="Atendimentos/mês" name="atendimentos" options={["até 100", "100-300", "300-800", "800+"]} />
                    <SelectField
                      label="Quando quer começar?"
                      name="inicio"
                      options={["Imediato", "Em até 15 dias", "Em até 30 dias", "Estou avaliando"]}
                    />
                  </div>

                  <div className="mt-4">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                      Observações (opcional)
                    </label>
                    <textarea
                      name="obs"
                      rows={3}
                      maxLength={800}
                      placeholder="Sistema atual, integrações desejadas, dúvidas..."
                      className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-tech-cyan transition resize-none"
                    />
                  </div>

                  {error && (
                    <p className="mt-4 font-mono text-[11px] text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="mt-8 w-full font-mono text-[11px] uppercase tracking-widest px-6 py-4 bg-tech-cyan text-bg-base rounded-sm font-semibold hover:opacity-90 transition"
                  >
                    Enviar e ativar pelo WhatsApp →
                  </button>

                  <p className="mt-4 text-center text-[11px] text-white/35">
                    Seus dados são usados apenas para ativar sua conta.
                  </p>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  maxLength,
  placeholder,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  maxLength?: number;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-tech-cyan transition"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
        {label}
      </label>
      <select
        name={name}
        defaultValue={options[0]}
        className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white text-sm focus:outline-none focus:border-tech-cyan transition"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
