import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";

const URL = "https://petops-nexus-eco.lovable.app/sistema-para-petshop";
const MSG =
  "Olá! Tenho um petshop e quero conhecer o PetOps para organizar agenda, clientes e atendimento.";

export const Route = createFileRoute("/sistema-para-petshop")({
  head: () => ({
    meta: [
      { title: "Sistema para Petshop — Agenda, WhatsApp e Clientes | PetOps" },
      {
        name: "description",
        content:
          "Sistema para petshop com agenda, WhatsApp e clientes no controle. Reduza no-show, organize atendimentos e acompanhe a rotina com o PetOps.",
      },
      { name: "keywords", content: "sistema para petshop, software para petshop, gestão de petshop, agenda petshop, sistema pet" },
      { property: "og:title", content: "Sistema para Petshop com agenda, WhatsApp e clientes" },
      { property: "og:description", content: "Organize atendimentos, reduza mensagens perdidas e acompanhe sua rotina com o PetOps." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      eyebrow="Sistema para Petshop"
      title={<>Sistema para petshop com <span className="text-tech-cyan">agenda, WhatsApp e clientes</span> no controle</>}
      subtitle="O PetOps ajuda petshops a organizarem atendimentos, reduzir mensagens perdidas, lembrar clientes e acompanhar a rotina com mais clareza."
      whatsappMessage={MSG}
      pains={[
        "Agenda espalhada no caderno ou WhatsApp",
        "Clientes que esquecem horários",
        "Equipe respondendo tudo manualmente",
        "Falta de controle sobre retornos e recompra",
        "Dificuldade para acompanhar a rotina do petshop",
      ]}
      features={[
        { icon: "calendar", title: "Agenda inteligente", desc: "Banho, tosa, consulta e hospedagem em uma agenda única, com horários organizados por profissional." },
        { icon: "message", title: "WhatsApp integrado", desc: "Respostas rápidas, agendamentos pelo chat e histórico do cliente sempre à mão." },
        { icon: "bell", title: "Lembretes automáticos", desc: "Confirmações, lembrete de vacina e retorno enviados sem ninguém precisar lembrar." },
        { icon: "users", title: "Ficha completa do pet", desc: "Tutor, animal, histórico, vacinas e preferências. Tudo digital, nada de caderno." },
        { icon: "trending", title: "Indicadores do gestor", desc: "Veja faturamento, no-show e clientes ativos em tempo real." },
        { icon: "sparkles", title: "Pacotes e recorrência", desc: "Venda pacotes de banho e tosa e controle saldo automaticamente." },
      ]}
      benefits={[
        "Agenda mais organizada",
        "Atendimento mais rápido",
        "Menos no-show",
        "Clientes mais ativos",
        "Mais clareza para o gestor",
      ]}
      faq={faq}
    />
  );
}

const faq = [
  { q: "O PetOps serve para petshop pequeno?", a: "Sim. O PetOps é desenhado para operações de qualquer porte — de petshop de bairro com 1 banheiro até redes com múltiplas unidades." },
  { q: "Preciso trocar meu WhatsApp?", a: "Não. O PetOps integra com o seu número atual, sem perder histórico de conversas." },
  { q: "O sistema ajuda com banho e tosa?", a: "Sim. Agenda por profissional, pacotes, controle de horários e lembretes automáticos são nativos." },
  { q: "Consigo usar para lembrar clientes?", a: "Sim. Lembretes de horário, vacina, retorno e aniversário do pet são automáticos." },
  { q: "Tem plano gratuito ou teste?", a: "Oferecemos demonstração guiada e planos a partir de um ticket simples. Fale com nosso time pelo WhatsApp." },
  { q: "Como funciona a demonstração?", a: "Em 30 minutos pelo WhatsApp ou vídeo, mostramos o sistema rodando com dados parecidos com o do seu petshop." },
];
