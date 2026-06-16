import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";

const URL = "https://petops-nexus-eco.lovable.app/whatsapp-para-petshop";
const MSG = "Olá! Quero conhecer a automação de WhatsApp do PetOps para melhorar meu atendimento.";

export const Route = createFileRoute("/whatsapp-para-petshop")({
  head: () => ({
    meta: [
      { title: "WhatsApp para Petshop — Automação e Lembretes | PetOps" },
      {
        name: "description",
        content:
          "WhatsApp para petshop com automação, agenda e lembretes. Transforme conversas soltas em atendimentos organizados com o PetOps.",
      },
      { name: "keywords", content: "whatsapp para petshop, automação whatsapp petshop, atendimento petshop, lembrete whatsapp pet" },
      { property: "og:title", content: "WhatsApp para Petshop com automação e lembretes" },
      { property: "og:description", content: "Respostas mais rápidas, lembretes automáticos e mais controle da rotina." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      eyebrow="WhatsApp para Petshop"
      title={<>WhatsApp para petshop com <span className="text-tech-cyan">automação, agenda</span> e lembretes</>}
      subtitle="Transforme conversas soltas em atendimentos organizados, com respostas mais rápidas, lembretes automáticos e mais controle da rotina."
      whatsappMessage={MSG}
      pains={[
        "Mensagens perdidas no WhatsApp",
        "Clientes sem resposta rápida",
        "Agendamentos feitos manualmente",
        "Falta de lembrete antes do horário",
        "Atendimento dependente de uma pessoa só",
      ]}
      features={[
        { icon: "message", title: "Respostas automáticas", desc: "Atendimento 24/7 para dúvidas frequentes — sem cliente esperando." },
        { icon: "calendar", title: "Agendamento pelo chat", desc: "O cliente escolhe horário direto no WhatsApp e cai na sua agenda." },
        { icon: "bell", title: "Lembrete automático", desc: "Confirmação, vacina, retorno e aniversário do pet — disparados sozinhos." },
        { icon: "users", title: "Histórico unificado", desc: "Toda conversa fica salva junto da ficha do cliente e do pet." },
        { icon: "sparkles", title: "Mensagens em massa", desc: "Promoções e campanhas segmentadas para a base certa, sem ser spam." },
        { icon: "trending", title: "Métricas de atendimento", desc: "Saiba quantos clientes responderam, agendaram e fecharam." },
      ]}
      benefits={[
        "Respostas mais rápidas",
        "Lembretes automáticos",
        "Menos clientes esquecidos",
        "Mais organização no atendimento",
        "WhatsApp conectado à rotina do petshop",
      ]}
      faq={faq}
    />
  );
}

const faq = [
  { q: "O PetOps serve para petshop pequeno?", a: "Sim. A automação de WhatsApp funciona até para operações com 1 atendente — é justamente onde ela mais alivia o dia a dia." },
  { q: "Preciso trocar meu WhatsApp?", a: "Não. Conectamos seu número atual via API oficial, preservando seus contatos e histórico." },
  { q: "O sistema ajuda com banho e tosa?", a: "Sim. Confirma horários, avisa quando o pet está pronto e lembra do próximo banho automaticamente." },
  { q: "Consigo usar para lembrar clientes?", a: "Sim, essa é a função principal: confirmação 24h antes, lembrete de vacina, retorno e recompra." },
  { q: "Tem plano gratuito ou teste?", a: "Oferecemos demonstração gratuita e planos acessíveis. Fale com o time pelo WhatsApp." },
  { q: "Como funciona a demonstração?", a: "Em 30 minutos mostramos a automação rodando em uma conta de teste, com mensagens reais." },
];
