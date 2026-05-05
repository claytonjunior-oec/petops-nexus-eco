# Assinatura PetOps Care para Petshops

Nova seção dedicada na página `/care` apresentando 3 planos de assinatura mensal recorrente, posicionados como "nunca falte produto no salão" — o petshop recebe automaticamente, sem precisar fazer pedido toda semana.

## Onde entra na página

Inserir uma nova seção **entre "Kits para revenda" e "Diferenciais"** em `src/routes/care.tsx`. Fica logo abaixo dos kits avulsos, criando a progressão natural: produto → kit → assinatura recorrente.

Também adicionar uma menção curta no Hero (badge ou linha extra) tipo "Agora com assinatura mensal para petshops" para sinalizar a novidade.

## Os 3 planos

Preço base de referência: **R$ 330 / 5L**. Valores fictícios, arredondados pra ficarem "vendáveis", com desconto progressivo conforme o volume:

### 1. Plano Start — R$ 890/mês
Para petshops pequenos, ~80–150 banhos/mês.
- 2× Care Shampoo Pro 5L
- 1× Care Condicionador Reparador 5L
- 1× Care Desinfetante Bactericida 5L
- 6× Care Colônia Soft (mix He/She)

### 2. Plano Pro — R$ 1.690/mês  *(destaque "Mais escolhido")*
Para petshops em ritmo de crescimento, ~200–350 banhos/mês.
- 4× Care Shampoo Pro 5L
- 2× Care Condicionador Reparador 5L
- 2× Care Desinfetante Bactericida 5L
- 12× Care Colônia Soft
- 6× Care Hálito Fresh (revenda)
- 4× Kit Cuidado Diário (revenda no balcão)

### 3. Plano Max — R$ 2.890/mês
Para operações de alto volume, +400 banhos/mês ou múltiplas unidades.
- 8× Care Shampoo Pro 5L
- 4× Care Condicionador Reparador 5L
- 4× Care Desinfetante Bactericida 5L
- 24× Care Colônia Soft
- 12× Care Hálito Fresh
- 8× Kit Cuidado Diário
- 4× Care Protect Focinho + 4× Protect Patinhas

## Benefícios da assinatura (bullets na seção)

- Entrega mensal automática — sem precisar lembrar de fazer pedido
- Preço travado por 12 meses, protegido de reajustes
- Frete incluso em todo o Brasil
- Flexibilidade: pode pausar, trocar de plano ou ajustar quantidades a qualquer momento
- Suporte prioritário PetOps
- Bônus: brindes de revenda (display de balcão, etiquetas de preço)

## Visual / UX

- 3 cards lado a lado em desktop (`grid-cols-3`), empilhados em mobile
- Card do meio (Pro) com borda destacada em `care-blue` e badge "Mais escolhido"
- Cada card: nome do plano, faixa de uso ("ideal para X banhos/mês"), preço grande, lista de itens com `+`, CTA "Quero esse plano" → `/contato`
- Eyebrow da seção: "ASSINATURA · CARE SUBSCRIPTION"
- Título: "Nunca mais falte produto no seu salão."
- Intro: "Receba todo mês o que seu petshop precisa pra operar e revender. Sem pedido manual, sem estoque parado, com preço travado."

## Arquivos afetados

- **`src/data/care-products.ts`** — exportar novo array `careSubscriptions: CareSubscription[]` com os 3 planos (id, nome, preço, faixa de uso, destaque, lista de itens, CTA).
- **`src/routes/care.tsx`** — importar `careSubscriptions`, renderizar nova `<Section>` entre Kits e Diferenciais, adicionar menção no hero.

Sem novos assets de imagem — os cards são tipográficos (estilo "pricing table"), coerentes com o resto da página.
