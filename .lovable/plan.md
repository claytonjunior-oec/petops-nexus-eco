# PetOps Care — Catálogo de produtos profissionais

## Objetivo
Transformar a página `/care` (hoje genérica, só com categorias) num catálogo real de **linha profissional PetOps Care**, com os 8 produtos descritos, kits de revenda para o petshop, e narrativa de marca **"90% natural, 10% ciência"**. Sem nenhuma menção ao fornecedor original (Bioclub) e sem reutilizar nomes do fornecedor.

## Reescrita de marca dos produtos

Renomeio com identidade PetOps Care, mantendo a função do produto:

| # | Nome PetOps Care | Categoria | Tamanho | Função |
|---|---|---|---|---|
| 01 | **Care Shampoo Pro** | Higiene | 5L | Limpeza profunda, pH balanceado |
| 02 | **Care Condicionador Reparador** | Hidratação | 500ml | Karité + óleo de coco + amêndoas doces |
| 03 | **Care Desinfetante Bactericida** | Limpeza de ambiente | 5L | 99,9% fungos/bactérias, ambientes pet |
| 04 | **Care Colônia Soft — He** | Odorização | 120ml | Cheirinho de bebê, linha macho |
| 05 | **Care Colônia Soft — She** | Odorização | 120ml | Cheirinho de bebê, linha fêmea |
| 06 | **Care Hálito Fresh** | Cuidado bucal | 120ml | Spray bucal de menta, uso diário |
| 07 | **Care Protect Focinho** | Cuidado complementar | 15g | Hidratante vegano focinho |
| 08 | **Care Protect Patinhas** | Cuidado complementar | 15g | Hidratante vegano coxins |

(Nomes finais podem ser ajustados depois; mantenho o prefixo "Care" para reforçar marca.)

Cada produto recebe descrição reescrita do zero (sem trechos copiados do fornecedor), com:
- Headline curta (1 linha de promessa)
- Descrição (2–3 frases reescritas, foco em sensação + benefício)
- "Modo de uso" simplificado em bullets
- "Composição" reescrita em linguagem amigável (ex: "Base vegetal suave + D-Pantenol")
- Tags: `Profissional`, `Vegano` (quando aplicável), `Para revenda`
- Slot de imagem placeholder (proporção quadrada, com label "Imagem em breve")

## Kits de revenda (aumento de ticket médio do petshop)

Três kits sugeridos, cada um como card destacado:

- **Kit Pós-Banho Essencial** — Shampoo + Condicionador + Colônia
- **Kit Cuidado Diário** — Hálito Fresh + Protect Focinho + Protect Patinhas
- **Kit Operação Petshop** — Shampoo 5L + Condicionador + Desinfetante 5L (uso interno do salão)

Cada kit mostra: composição, posicionamento ("ideal para venda no balcão pós-banho"), imagem placeholder.

## Narrativa "90% natural, 10% ciência"

Selo / faixa visual logo abaixo do hero, com 3 pilares:
- **90% Natural** — manteiga de karité, óleos vegetais, base vegetal suave
- **10% Ciência** — ativos dermatológicos, pH balanceado, conservação segura
- **0% Crueldade** — fórmulas veganas na linha Protect

## Estrutura nova de `/care`

```text
Hero (mantém)
 └─ subtítulo atualizado: "Linha profissional · 90% natural · pensada para revenda"

Faixa "90/10/0" (nova)

Seção "Linha Profissional" (substitui categorias genéricas)
 └─ Grid 8 produtos (cards com imagem placeholder + descrição + uso + composição amigável)
     · cada card é expansível (Accordion) para "Modo de uso" e "Composição"

Seção "Kits PetOps Care" (nova)
 └─ 3 kits em destaque, com proposta de ticket médio para o petshop

Seção "Diferenciais" (mantém, ajustada)
 └─ inclui "Fórmulas 90% naturais" e "Veganas na linha Protect"

CTA final (mantém)
 └─ "Solicitar catálogo profissional" + "Quero revender"
```

## Implementação técnica

- Editar **`src/routes/care.tsx`**: substituir bloco de categorias por grid de produtos; adicionar seções 90/10/0 e Kits.
- Criar **`src/data/care-products.ts`** com array tipado dos 8 produtos + 3 kits (single source of truth, fácil para você ajustar copy depois).
- Criar componente **`src/components/site/ProductCard.tsx`** com:
  - slot de imagem placeholder (`<div>` com gradiente Care Navy/Gold + ícone + texto "Imagem em breve")
  - quando você fornecer as imagens, basta adicionar o caminho em `care-products.ts` (campo `image?: string`) e o card troca o placeholder pela `<img>` automaticamente.
- Usar `<Accordion>` (já em `src/components/ui/accordion.tsx`) para "Modo de uso" e "Composição" dentro do card.
- Manter paleta Navy/Gold/White já definida em `styles.css`. Sem libs novas.
- Imagens dos produtos ficarão em `src/assets/care/` quando você enviar; por ora o array tem `image: null`.

## Fora de escopo neste passo
- Página individual por produto (`/care/$slug`) — fácil de adicionar depois se quiser SEO de catálogo.
- Formulário de pedido / e-commerce — segue como CTA para `/contato`.
- Imagens reais — placeholders preparados para troca trivial.
