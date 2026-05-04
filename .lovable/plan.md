
# Melhorias na página inicial — vender melhor o ecossistema PetOps

A home hoje apresenta bem o conceito visual (Tech à esquerda, Care à direita), mas peca em **storytelling de venda**: não mostra dor, não mostra resultado tangível, e o "Tech + Care juntos" aparece como decoração e não como diferencial real. As mudanças abaixo focam em transformar a home numa narrativa de conversão.

## 1. Hero — adicionar gancho de valor concreto

Hoje o subtítulo é genérico ("Tecnologia para automatizar..."). Vou:
- Manter o título atual ("O futuro da operação pet começa aqui")
- Trocar o subtítulo por algo direto e mensurável em linguagem de dono de negócio: foco em **menos no-show, mais recompra, equipe livre do WhatsApp manual**
- Adicionar uma micro-linha de prova logo abaixo dos botões: "Pet shops · Clínicas · Banho & tosa · Daycare · Hotel" (mostra encaixe imediato)

## 2. Nova seção: "O problema" (antes de Conceito)

Inserir uma seção curta de **dor**, espelhando a lista `dores` que já existe em tech.tsx, em formato de "checklist invertido". Faz o visitante se reconhecer antes de ouvir a solução. Estilo: 6 itens em grid, cada um com um traço cinza riscado e ícone de alerta sutil.

Exemplos:
- Agenda bagunçada no WhatsApp
- Cliente que some e ninguém percebe
- Atendente respondendo o mesmo todo dia
- Sem previsibilidade de receita
- Ficha do pet em caderno
- Tutor sem lembrete de vacina

## 3. Reescrever a seção "Tech + Care" (Together) — o coração da venda do ecossistema

Hoje é uma timeline horizontal genérica de 6 etapas. Vou transformar em **comparativo de impacto** mostrando o que cada frente entrega sozinha e o multiplicador quando juntas:

```text
   PETOPS TECH              PETOPS CARE             TECH + CARE
   ─────────────            ─────────────           ─────────────
   Reduz custo              Eleva margem            Multiplica LTV
   operacional              por serviço             do cliente
   
   Agenda, IA,              Linha premium           Recompra
   automação                de cuidado              automatizada
                                                    + produto na sacola
```

Visualmente: 3 colunas, as duas laterais em tech-cyan e care-blue, a do meio (Tech + Care) com gradiente das duas cores e destaque maior — "1 + 1 = 3". Isso é o que faltava: justificar **por que existir como ecossistema** em vez de duas empresas separadas.

A timeline atual de 6 etapas (Captação → Recompra) pode ficar abaixo, menor, como "fluxo unificado".

## 4. Seção "Para quem é" — virar cards com cenário real

Hoje é só uma lista de tags ("Pet shops", "Clínicas"...). Pouco persuasivo. Vou converter em 3-4 cards de **persona**, cada um com:
- Tipo de negócio
- Dor principal daquele perfil
- O que o ecossistema entrega pra ele

Exemplo: *Pet shop em expansão → "Equipe travada no WhatsApp e sem padrão entre lojas" → "Atendimento centralizado + multi-unidade + linha Care para revenda"*

## 5. Substituir "Prova" por algo mais forte

A seção atual ("Tech + Care / Foco total no pet / Premium por design") é abstrata. Vou trocar por **3 razões para escolher a PetOps agora**, mais concretas:
- **Construído por quem opera** — nasceu dentro de operações pet reais
- **Plataforma única, não um Frankenstein** — agenda, atendimento, financeiro e produto no mesmo lugar
- **Pronto para escalar** — multi-unidade, app no celular, dados isolados por loja

## 6. CTA final — simplificar a decisão

Hoje tem 3 botões equivalentes (Tech / Falar / Care). Vou:
- Promover **"Falar com a PetOps"** como ação principal (botão branco maior, centro)
- Manter Tech e Care como links secundários menores
- Adicionar uma frase de redução de atrito: "Demo de 20 min, sem compromisso"

## 7. Ajustes finos

- Hero mobile: a coluna lateral some (`hidden md:flex`), então no celular o hero fica vazio nas laterais. Vou garantir que o conteúdo central tenha respiro melhor e o badge "Ecossistema Unificado" fique visível.
- Bottom UI bar do hero (`hidden md:flex` aplicado depois de `flex`) — há um conflito de classes. Corrigir para `hidden md:flex` único.
- Nas seções TechSection e CareSection, os botões "Agendar demo" / "Quero revender" continuam — apenas reforçar visualmente como CTAs.

## Arquivos afetados

- `src/routes/index.tsx` — todas as mudanças acima (1 arquivo, reescrita das seções `Hero`, `Together`, `ParaQuem`, `Prova`, `FinalCTA` + nova seção `Problema`)

Nenhum asset novo, nenhuma rota nova, nenhuma dependência nova.
