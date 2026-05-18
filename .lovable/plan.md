
# Auditoria da Home — PetOps

Análise como especialista em SEO e conversão para um SaaS gourmet voltado à nova geração de petshops automatizados. Identifiquei o que falta na `/` (src/routes/index.tsx) em três frentes: **SEO técnico**, **SEO de conteúdo/E-E-A-T** e **conversão premium**.

---

## 1. SEO técnico (o que está faltando hoje)

Hoje a home tem só `title`, `description`, `og:title` e `og:description`. Faltam sinais que o Google e redes sociais esperam de um SaaS sério:

- **`og:image` + `twitter:image`** com um asset 1200×630 da marca (hero husky tratado ou mock do app). Sem isso, todo link compartilhado no WhatsApp/Instagram/LinkedIn aparece sem preview — perda direta de CTR.
- **`og:url`, `og:type=website`, `og:site_name=PetOps`, `og:locale=pt_BR`, `twitter:card=summary_large_image`**.
- **`<link rel="canonical">`** apontando para a URL canônica (`https://petops-nexus-eco.lovable.app/`).
- **JSON-LD `Organization` + `SoftwareApplication`** com nome, logo, sameAs (Instagram/LinkedIn), `applicationCategory: BusinessApplication`, `offers` com faixa de preço (R$149–R$497). Isso dá rich snippet e ajuda no "knowledge panel".
- **JSON-LD `FAQPage`** alimentado pela seção de FAQ (ver item 3) — gera resultado expandido na SERP.
- **`robots.txt` + `sitemap.xml`** dinâmicos (rota `/sitemap[.]xml.tsx`) listando `/`, `/tech`, `/care`, `/ecossistema`, `/sobre`, `/contato`.
- **H1 único e com keyword-fit**. O H1 atual ("O futuro da operação pet começa aqui.") é bom de marca, mas fraco em busca. Sugestão: manter o copy emocional como display, e embutir um H1 SEO-friendly tipo "Sistema para petshop com automação no WhatsApp e linha de produtos premium". (Pode ser visualmente igual, só ajustando as palavras.)
- **`alt` descritivos com intenção** (alguns já estão bons; revisar para incluir termos como "sistema de gestão para petshop", "shampoo profissional pet").
- **`fetchpriority="high"` + `loading="eager"`** no hero husky, e `loading="lazy"` no resto. Hoje o hero não tem `fetchpriority`, o que atrasa LCP.
- **Preload da fonte** Space Grotesk (display) para evitar FOUT.

---

## 2. SEO de conteúdo e E-E-A-T (autoridade)

Para um produto "gourmet" e premium, o Google precisa enxergar autoridade. Faltam blocos de conteúdo na home:

- **Seção de números reais** (no-show −42%, recompra 3.2× já existem soltos no hero — promover a uma seção `<section>` com `<h2>` e dados auditáveis). Adicionar fonte ("base: 120 petshops, 2024–2026").
- **Logos de clientes / "operam com PetOps"** — prova social visível, hoje só há um badge "+120 petshops".
- **Depoimentos reais com nome + petshop + cidade + foto** (schema `Review` no JSON-LD).
- **Seção FAQ** respondendo as 6 dúvidas que esses petshops digitam no Google:
  - "Qual o melhor sistema para petshop?"
  - "Como reduzir no-show em petshop?"
  - "Vale a pena automatizar WhatsApp do petshop?"
  - "Quanto custa um sistema de gestão para petshop?"
  - "PetOps funciona para clínica veterinária?"
  - "Como começar a vender produtos premium no meu petshop?"
  Cada pergunta vira H3 + parágrafo de 40-60 palavras com a keyword. Alimenta o JSON-LD FAQPage.
- **Bloco "Para quem é"** com vertical-fit explícito (banho & tosa, clínica, daycare, hotel) — hoje aparece só como linha de texto. Virar cards com ícones melhora dwell time e CTR interno.
- **Link interno semântico** para `/tech`, `/care`, `/ecossistema` com âncora rica ("conheça a plataforma de automação", "linha de cosmética profissional pet") em vez de só "Conhecer Tech".
- **Bloco editorial "Manifesto / Por que existimos"** curto — sinaliza marca, não commodity.

---

## 3. Conversão premium (gourmet, geração nova)

O design já é forte. O que falta para fechar:

- **Vídeo de 15–30s** em loop no hero (mute, autoplay) mostrando o app + cachorro — aumenta tempo na página e diferencia.
- **Calculadora de ROI** ("quanto você perde com no-show?") — input simples de banhos/mês + ticket médio → resultado em R$. Lead magnet matador para esse público.
- **CTA fixo flutuante no mobile** ("Falar no WhatsApp" / "Agendar demo") — hoje os CTAs ficam só no hero e no rodapé.
- **Badge de prova de segurança/pagamento** ("Stripe", "LGPD", "Dados em nuvem BR").
- **Comparativo "Antes / Depois PetOps"** em 1 linha — formato visual que viraliza.
- **Selo "Tech + Care" como diferencial único** — nenhum concorrente faz os dois. Hoje está implícito, precisa de uma seção dedicada com headline "O único ecossistema que opera e abastece o seu petshop".
- **Newsletter "Pet Operators"** — captura de e-mail com conteúdo gourmet (margem, automação, marca). Constrói lista + sinal de autoridade.
- **Microcopy nos CTAs** — trocar "Agendar demo" por "Ver demo de 12 min" (reduz fricção, sinaliza tempo).

---

## Plano de execução proposto (3 ondas)

### Onda 1 — SEO técnico (impacto imediato, baixo esforço)
1. Adicionar `og:image`, `twitter:card`, `og:url`, `og:site_name`, `og:locale`, canonical na home.
2. Adicionar JSON-LD `Organization` + `SoftwareApplication` no `__root.tsx`.
3. Criar `src/routes/sitemap[.]xml.tsx` e `public/robots.txt`.
4. Hero `<img>` com `fetchpriority="high"`, demais com `loading="lazy"`. Preload da fonte.
5. Revisar `alt`s com keywords reais.

### Onda 2 — Conteúdo / E-E-A-T (impacto SEO em 30–60 dias)
6. Seção **Resultados em números** com `<h2>` próprio e fonte.
7. Seção **FAQ** (6 perguntas) + JSON-LD FAQPage.
8. Seção **Para quem é** em grid de 4 verticais com ícones.
9. Seção **Depoimentos** com foto/nome/cidade + schema Review.
10. Logos de clientes ("operam com PetOps").

### Onda 3 — Conversão gourmet (impacto em leads)
11. CTA flutuante mobile (WhatsApp + demo).
12. Calculadora de ROI de no-show (componente isolado).
13. Vídeo loop no hero (quando o asset existir).
14. Bloco comparativo "Antes / Depois".
15. Newsletter "Pet Operators".

---

## Detalhe técnico (para a implementação)

- Tudo no padrão TanStack Start: `head()` do route file para meta + JSON-LD via `scripts: [{ type: "application/ld+json", children: JSON.stringify(...) }]`.
- Canonical **só na leaf** (`/`), nunca no `__root.tsx` (TanStack concatena `links` sem dedup).
- Sitemap como server route (`src/routes/sitemap[.]xml.tsx` com `server.handlers.GET`).
- FAQ como componente acessível (`<details>` ou `Accordion` da UI lib) + objeto JS espelhado no JSON-LD para evitar divergência.
- Calculadora de ROI: cliente-side puro, sem servidor.
- og:image: gerar 1200×630 com hero + logo (posso usar imagegen quando aprovar).

---

## Pergunta antes de implementar

Quer que eu execute as **3 ondas completas**, ou prefere começar só pela **Onda 1 (SEO técnico)** que dá ganho imediato sem mudar o visual da página?
