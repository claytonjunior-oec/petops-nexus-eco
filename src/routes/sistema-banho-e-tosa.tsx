import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";

const URL = "https://petops-nexus-eco.lovable.app/sistema-banho-e-tosa";
const MSG = "Olá! Quero conhecer o PetOps para organizar minha agenda de banho e tosa.";

export const Route = createFileRoute("/sistema-banho-e-tosa")({
  head: () => ({
    meta: [
      { title: "Sistema para Banho e Tosa — Agenda e Lembretes | PetOps" },
      {
        name: "description",
        content:
          "Sistema para banho e tosa com agenda, lembretes automáticos e controle de clientes. Reduza faltas, organize pacotes e tenha uma rotina previsível.",
      },
      { name: "keywords", content: "sistema banho e tosa, agenda banho e tosa, software banho e tosa, controle de horários pet" },
      { property: "og:title", content: "Sistema para Banho e Tosa com agenda e lembretes" },
      { property: "og:description", content: "Organize horários, pacotes, retornos e mensagens com o PetOps." },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: Page,
});

function Page() {
  return (
    <LandingPage
      eyebrow="Banho & Tosa"
      title={<>Sistema para banho e tosa com <span className="text-tech-cyan">agenda, lembretes</span> e controle de clientes</>}
      subtitle="Organize horários, pacotes, retornos e mensagens para ter uma rotina mais previsível no banho e tosa."
      whatsappMessage={MSG}
      pains={[
        "Horários perdidos por falta de lembrete",
        "Pacotes anotados manualmente",
        "Dificuldade para acompanhar retornos",
        "Agenda cheia de ajustes no WhatsApp",
        "Falta de visão sobre clientes recorrentes",
      ]}
      features={[
        { icon: "calendar", title: "Agenda por banheiro/tosador", desc: "Veja horários disponíveis em segundos e encaixe novos clientes sem dor de cabeça." },
        { icon: "bell", title: "Lembrete automático", desc: "Confirmação 24h e 2h antes do horário. Adeus, no-show." },
        { icon: "sparkles", title: "Pacotes mensais", desc: "Crie pacotes (4 banhos, 8 banhos) e o sistema controla o saldo do cliente." },
        { icon: "users", title: "Histórico do pet", desc: "Tipo de tosa, shampoo preferido, observações de comportamento — sempre na mão." },
        { icon: "message", title: "WhatsApp no fluxo", desc: "Mensagem de pronto-pra-buscar com um clique, sem digitar do zero." },
        { icon: "trending", title: "Recompra previsível", desc: "Veja quem está atrasado para o próximo banho e recupere o cliente." },
      ]}
      benefits={[
        "Controle de agenda",
        "Lembretes automáticos",
        "Organização de pacotes",
        "Mais recompra",
        "Menos retrabalho no atendimento",
      ]}
      faq={faq}
    />
  );
}

const faq = [
  { q: "O PetOps serve para petshop pequeno?", a: "Sim. Funciona perfeitamente para banho e tosa de bairro com 1 ou 2 profissionais até operações maiores." },
  { q: "Preciso trocar meu WhatsApp?", a: "Não. Integramos com seu número atual sem perder conversas." },
  { q: "O sistema ajuda com banho e tosa?", a: "É o nosso forte: agenda por profissional, pacotes mensais, lembretes e histórico de tosa nativos." },
  { q: "Consigo usar para lembrar clientes?", a: "Sim. Confirmação de horário, pronto-pra-buscar e lembrete de próximo banho são automáticos." },
  { q: "Tem plano gratuito ou teste?", a: "Temos demonstração guiada gratuita e planos acessíveis. Fale com nosso time pelo WhatsApp." },
  { q: "Como funciona a demonstração?", a: "30 minutos pelo WhatsApp ou vídeo, mostramos o sistema rodando com cenários reais de banho e tosa." },
];
