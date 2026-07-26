import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";
import { z } from "zod";

const WHATSAPP_NUMBER = "5511918967593";
const SITE_URL = "https://petops.org";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome").max(100),
  empresa: z.string().trim().min(1, "Informe a empresa").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(30),
  tipoNegocio: z.enum(["Banho e tosa", "Pet shop", "Clínica veterinária", "Creche ou hotel", "Outro"]),
  volume: z.enum(["Até 100 atendimentos/mês", "101 a 300 atendimentos/mês", "301 a 600 atendimentos/mês", "Mais de 600 atendimentos/mês", "Ainda estou começando"]),
  objetivo: z.enum(["Organizar agenda e clientes", "Centralizar operação e financeiro", "Automatizar o WhatsApp", "Gerenciar clínica, creche ou hotel", "Quero entender qual plano serve para mim"]),
  msg: z.string().trim().max(1000).optional().default(""),
});

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Agende uma demonstração da PetOps" },
      {
        name: "description",
        content:
          "Converse com a PetOps e veja como organizar agenda, atendimento, vendas, estoque e automações do seu negócio pet em uma única plataforma.",
      },
      { property: "og:title", content: "Agende uma demonstração da PetOps" },
      {
        property: "og:description",
        content: "Conte como sua operação funciona e receba uma demonstração direcionada para o seu negócio.",
      },
      { property: "og:url", content: `${SITE_URL}/contato` },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contato` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      nome: fd.get("nome"),
      empresa: fd.get("empresa"),
      email: fd.get("email"),
      telefone: fd.get("telefone"),
      tipoNegocio: fd.get("tipoNegocio"),
      volume: fd.get("volume"),
      objetivo: fd.get("objetivo"),
      msg: fd.get("msg") ?? "",
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Verifique os campos");
      return;
    }

    setError(null);
    const d = parsed.data;
    const params = new URLSearchParams(window.location.search);
    const origem = params.get("utm_source") || params.get("ref") || "Acesso direto";
    const campanha = params.get("utm_campaign");

    const text =
      `Olá! Quero conhecer o *PetOps* para a minha operação.\n\n` +
      `*Nome:* ${d.nome}\n` +
      `*Empresa:* ${d.empresa}\n` +
      `*E-mail:* ${d.email}\n` +
      `*Telefone:* ${d.telefone}\n` +
      `*Tipo de negócio:* ${d.tipoNegocio}\n` +
      `*Volume:* ${d.volume}\n` +
      `*Principal objetivo:* ${d.objetivo}\n` +
      `*Origem:* ${origem}${campanha ? ` · ${campanha}` : ""}\n` +
      (d.msg ? `\n*Contexto adicional:*\n${d.msg}\n` : "");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        <section className="relative px-5 sm:px-6 lg:px-10 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-0 right-0 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative max-w-[1180px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-tech-cyan">
                  Demonstração personalizada
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] text-balance">
                Veja o PetOps aplicado à sua <span className="text-gradient-brand">operação real</span>
              </h1>

              <p className="mt-6 text-base md:text-lg text-white/60 max-w-lg leading-relaxed">
                Responda algumas perguntas rápidas. O WhatsApp será aberto com o contexto da sua empresa para uma conversa mais objetiva e uma demonstração sem enrolação.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-1 gap-3 max-w-lg">
                {[
                  "Demonstração direcionada ao seu tipo de negócio",
                  "Sem compromisso e sem fidelidade",
                  "Atendimento direto pelo WhatsApp",
                  "Planos a partir de R$ 0 por mês",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-bg-surface/50 px-4 py-3 text-sm text-white/70">
                    <span className="text-tech-cyan mt-0.5">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-bg-surface/70 backdrop-blur-xl p-6 sm:p-8 md:p-10 space-y-5 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.8)]"
            >
              {sent ? (
                <div className="py-12 text-center">
                  <div className="size-12 mx-auto rounded-full bg-tech-neon/10 border border-tech-neon/30 flex items-center justify-center mb-6">
                    <span className="text-tech-neon text-xl">✓</span>
                  </div>
                  <h2 className="text-2xl font-medium text-white mb-2">WhatsApp aberto</h2>
                  <p className="text-white/55 max-w-md mx-auto">
                    Agora é só enviar a mensagem. Caso a janela não tenha aberto, permita pop-ups e tente novamente.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-2">
                    <h2 className="text-2xl font-medium text-white">Conte sobre sua operação</h2>
                    <p className="mt-2 text-sm text-white/50">Leva cerca de 1 minuto.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Seu nome" name="nome" autoComplete="name" maxLength={100} />
                    <Field label="Nome da empresa" name="empresa" autoComplete="organization" maxLength={100} />
                    <Field label="E-mail" name="email" type="email" autoComplete="email" maxLength={255} />
                    <Field label="Telefone / WhatsApp" name="telefone" type="tel" autoComplete="tel" inputMode="tel" maxLength={30} />
                  </div>

                  <SelectField label="Tipo de negócio" name="tipoNegocio" defaultValue="">
                    <option value="" disabled>Selecione</option>
                    <option>Banho e tosa</option>
                    <option>Pet shop</option>
                    <option>Clínica veterinária</option>
                    <option>Creche ou hotel</option>
                    <option>Outro</option>
                  </SelectField>

                  <SelectField label="Volume atual" name="volume" defaultValue="">
                    <option value="" disabled>Selecione</option>
                    <option>Até 100 atendimentos/mês</option>
                    <option>101 a 300 atendimentos/mês</option>
                    <option>301 a 600 atendimentos/mês</option>
                    <option>Mais de 600 atendimentos/mês</option>
                    <option>Ainda estou começando</option>
                  </SelectField>

                  <SelectField label="O que você mais quer resolver?" name="objetivo" defaultValue="">
                    <option value="" disabled>Selecione</option>
                    <option>Organizar agenda e clientes</option>
                    <option>Centralizar operação e financeiro</option>
                    <option>Automatizar o WhatsApp</option>
                    <option>Gerenciar clínica, creche ou hotel</option>
                    <option>Quero entender qual plano serve para mim</option>
                  </SelectField>

                  <div>
                    <label htmlFor="msg" className="font-mono text-[10px] uppercase tracking-widest text-white/45 block mb-2">
                      Contexto adicional <span className="normal-case tracking-normal">(opcional)</span>
                    </label>
                    <textarea
                      id="msg"
                      name="msg"
                      rows={4}
                      maxLength={1000}
                      placeholder="Ex.: hoje usamos agenda em papel e atendemos cerca de 15 pets por dia."
                      className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/10 transition resize-none"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="rounded-md border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full font-mono text-[11px] uppercase tracking-widest px-6 py-4 bg-tech-cyan text-bg-base rounded-md font-semibold hover:opacity-90 transition shadow-[0_16px_40px_-18px_var(--color-tech-cyan)]"
                  >
                    Continuar no WhatsApp →
                  </button>

                  <p className="text-center text-[11px] text-white/35 leading-relaxed">
                    Seus dados serão usados apenas para responder ao seu contato comercial.
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
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  maxLength?: number;
  autoComplete?: string;
  inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-widest text-white/45 block mb-2">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required
        maxLength={maxLength}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/10 transition"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  children,
}: {
  label: string;
  name: string;
  defaultValue: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-widest text-white/45 block mb-2">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        required
        className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-tech-cyan focus:ring-2 focus:ring-tech-cyan/10 transition"
      >
        {children}
      </select>
    </div>
  );
}
