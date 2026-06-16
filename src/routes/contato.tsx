import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";
import { z } from "zod";

const WHATSAPP_NUMBER = "5511918967593";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome").max(100),
  empresa: z.string().trim().min(1, "Informe a empresa").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(8, "Telefone inválido").max(30),
  interesse: z.enum(["PetOps Tech"]),
  msg: z.string().trim().max(1000).optional().default(""),
});

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Agende uma demo da PetOps" },
      {
        name: "description",
        content:
          "Fale com a PetOps. Agende uma demonstração da Tech, solicite o catálogo Care ou conheça o ecossistema completo.",
      },
      { property: "og:title", content: "Contato PetOps" },
      { property: "og:description", content: "Agende sua demo e conheça o ecossistema PetOps." },
    ],
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
      interesse: fd.get("interesse"),
      msg: fd.get("msg") ?? "",
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Verifique os campos");
      return;
    }
    setError(null);
    const d = parsed.data;
    const text =
      `Olá! Tenho interesse em *${d.interesse}*.\n\n` +
      `*Nome:* ${d.nome}\n` +
      `*Empresa:* ${d.empresa}\n` +
      `*E-mail:* ${d.email}\n` +
      `*Telefone:* ${d.telefone}\n` +
      (d.msg ? `\n*Mensagem:*\n${d.msg}\n` : "");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="min-h-dvh bg-bg-base text-titanium">
      <Nav />
      <main className="pt-16">
        <section className="relative px-6 lg:px-10 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-fade pointer-events-none" />
          <div className="absolute top-0 right-0 size-[500px] bg-tech-cyan/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 size-[500px] bg-care-blue/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="relative max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="size-1.5 bg-tech-neon rounded-full shadow-[0_0_10px_var(--color-tech-neon)] animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
                  CONEXÃO ABERTA
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.05] text-balance">
                Escolha o próximo nível do seu{" "}
                <span className="text-gradient-brand">negócio pet</span>
              </h1>
              <p className="mt-6 text-lg text-white/50 max-w-md leading-relaxed">
                Conte um pouco sobre sua operação. Ao enviar, abrimos o WhatsApp
                do nosso time com sua mensagem já preenchida.
              </p>

              <div className="mt-12 space-y-4 font-mono text-xs text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-tech-cyan">›</span>
                  <span>contato@petops.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-care-blue">›</span>
                  <span>Atendimento em horário comercial</span>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-bg-surface/60 backdrop-blur-xl p-8 md:p-10 space-y-5"
            >
              {sent ? (
                <div className="py-12 text-center">
                  <div className="size-12 mx-auto rounded-full bg-tech-neon/10 border border-tech-neon/30 flex items-center justify-center mb-6">
                    <span className="text-tech-neon text-xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2">WhatsApp aberto</h3>
                  <p className="text-white/50">
                    Conclua o envio da mensagem por lá. Se a janela não abriu,
                    verifique o bloqueador de pop-ups.
                  </p>
                </div>
              ) : (
                <>
                  <Field label="Nome" name="nome" maxLength={100} />
                  <Field label="Empresa" name="empresa" maxLength={100} />
                  <Field label="E-mail" name="email" type="email" maxLength={255} />
                  <Field label="Telefone / WhatsApp" name="telefone" maxLength={30} />
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                      Interesse
                    </label>
                    <select
                      name="interesse"
                      defaultValue="PetOps Tech"
                      className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-tech-cyan transition"
                    >
                      <option>PetOps Tech</option>
                      {/* <option>Ecossistema completo</option> */}
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="msg"
                      rows={4}
                      maxLength={1000}
                      className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-tech-cyan transition resize-none"
                    />
                  </div>
                  {error && (
                    <p className="font-mono text-[11px] text-red-400">{error}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full font-mono text-[11px] uppercase tracking-widest px-6 py-4 bg-white text-bg-base rounded-sm font-semibold hover:bg-white/90 transition"
                  >
                    Enviar via WhatsApp
                  </button>
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
}: {
  label: string;
  name: string;
  type?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        maxLength={maxLength}
        className="w-full bg-bg-base border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-tech-cyan transition"
      />
    </div>
  );
}
