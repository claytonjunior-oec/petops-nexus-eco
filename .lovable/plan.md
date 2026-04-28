## Auditoria de conteúdo: o que vaza segredo de negócio vs. o que pode ficar

Fiz uma varredura nas páginas Home, Tech, Care, Ecossistema e Footer. Abaixo, o que considero **risco** (expõe nome de fornecedor, métricas inventadas, capacidade interna ou stack) vs. **seguro** (marketing legítimo, posicionamento, benefícios).

### 🔴 REMOVER — expõe segredo, fornecedor ou métrica não-comprovável

| Onde | Conteúdo atual | Problema |
|---|---|---|
| `/tech` plano anterior | "OpenRouteService" no Taxi Pet | Expõe **fornecedor de roteamento** — concorrente copia stack |
| `/tech` plano anterior | "IA (Haku)" como nome do bot | Nome interno do agente — segredo de produto, não precisa estar no site público |
| Home Hero | `LATENCY · 0.014ms`, `NODES · 1,024 ON`, `WELFARE · NOMINAL`, `EXPERIENCE · 99.8`, `RECURRENCE · ACTIVE` | Métricas **inventadas** que parecem dado real — risco de credibilidade e propaganda enganosa |
| Home Tech mock | `Reativação 94.2% +12.4%`, `No-show 3.1% -8.2%` | Mesmo problema: KPIs falsos podem ser usados contra a marca |
| Home Care mock | `06 SKUs` | Revela **tamanho real do catálogo** (pequeno) — fragiliza posicionamento premium |
| `/care` | "Private label / atacado disponível" | Expõe modelo comercial sensível (terceirização de fórmula). Decidir se é estratégico mostrar publicamente |
| Home "Prova" | `2 frentes`, `06+ módulos`, `100% foco` | "06+ módulos" subdimensiona o produto; números fracos como prova social |
| Footer | `SYS.STATUS · OPERACIONAL` + `ECOSSISTEMA ONLINE` | Sugere status page de SaaS que não existe — pode gerar expectativa errada |

### 🟡 SUAVIZAR — não é segredo, mas soa interno demais ou data

| Onde | Conteúdo | Ação |
|---|---|---|
| Home Hero | `V. 2.0` | Remover versão (não há v1 público) |
| Home Hero | `TECH.INFRA_ACTIVE`, `CARE.BIO_SYNCED` | Trocar por labels neutros tipo `TECH · AUTOMAÇÃO`, `CARE · CUIDADO` |
| Tech mock | `PETOPS.TECH / DASH` + barras de fluxo "últimos 7 dias" | Manter como **ilustração abstrata** sem números concretos |

### 🟢 MANTER — marketing legítimo e seguro

- Posicionamento Tech + Care, headlines, ecossistema
- Lista de capacidades em alto nível (Agenda, WhatsApp com IA, Portal do Tutor, Daycare, Taxi Pet, Vacinas, Financeiro, Multi-unidade) — **isso é vitrine de produto, não segredo**
- Categorias Care (Higiene, Hidratação, etc.) — categoria é público
- Jornada Tech + Care no /ecossistema
- "Para quem é", CTAs, formulário de contato

### ✏️ Edições propostas (resumo da execução)

1. **Home Hero** — remover `V. 2.0`, trocar labels mono para algo neutro, remover linhas de métrica falsa (latency, nodes, welfare, experience, recurrence). Manter só o vibe de "command center" com labels conceituais.
2. **Home TechSection mock** — substituir números reais por placeholders abstratos (sem `94.2%` etc.). Manter o gráfico de barras como decorativo, sem rótulo "últimos 7 dias".
3. **Home CareSection mock** — remover `06 SKUs`, substituir por `PETOPS.CARE / LINE` apenas, ou `LINHA PROFISSIONAL`.
4. **Home Prova** — substituir os 3 stats numéricos por 3 pilares qualitativos (ex: "Tech + Care · Ecossistema integrado · Foco no mercado pet") OU remover a seção e usar uma linha única de manifesto.
5. **/tech (quando refizermos os módulos)** — usar nome genérico "IA de atendimento" em vez de "Haku"; descrever cálculo de rota como "via mapa em tempo real" sem citar provedor.
6. **/care** — trocar "Private label / atacado disponível" por "Condições profissionais para parceiros" (mantém ideia, esconde modelo).
7. **Footer** — remover `SYS.STATUS · OPERACIONAL` e `ECOSSISTEMA ONLINE`. Manter só copyright + tagline.

### Fora de escopo

- Não mexer em rotas/estrutura de páginas
- Não trocar paleta nem layout
- Não criar novas seções — só limpar conteúdo

Se aprovar, executo todas as edições acima de uma vez. Se quiser revisar algum item específico (ex: manter "Haku" como branding público, ou manter o "06 SKUs"), me avise antes.
