export type CareProduct = {
  id: string;
  code: string;
  name: string;
  category: string;
  size: string;
  headline: string;
  description: string;
  usage: string[];
  composition: string;
  tags: string[];
  image?: string | null;
};

export type CareKit = {
  id: string;
  name: string;
  pitch: string;
  items: string[];
  image?: string | null;
};

import shampooProImg from "@/assets/care-shampoo-pro.png";
import condicionadorImg from "@/assets/care-condicionador-reparador.png";
import desinfetanteImg from "@/assets/care-desinfetante.png";

export const careProducts: CareProduct[] = [
  {
    id: "shampoo-pro",
    code: "CARE.01",
    name: "Care Shampoo Pro",
    category: "Higiene",
    size: "5L",
    headline: "Limpeza profunda de salão, com toque suave.",
    description:
      "Base vegetal de alta performance e pH balanceado para banhos diários sem agredir pele e pelo. Espuma cremosa, enxágue rápido e perfume discreto que deixa o pet pronto para a vitrine.",
    usage: [
      "Molhe bem o pelo do animal.",
      "Aplique o suficiente para formar espuma e massageie.",
      "Deixe agir por 5 minutos e enxágue.",
      "Repita se necessário. Indicado para cães e gatos.",
    ],
    composition:
      "Tensoativos suaves de origem vegetal (coco e glicosídeo), D-Pantenol e conservante seguro. Sem corantes agressivos.",
    tags: ["Profissional", "pH balanceado", "Para revenda"],
    image: shampooProImg,
  },
  {
    id: "condicionador-reparador",
    code: "CARE.02",
    name: "Care Condicionador Reparador",
    category: "Hidratação",
    size: "5L",
    headline: "Pelo macio, brilhante e fácil de pentear.",
    description:
      "Finaliza o banho com hidratação profunda. A combinação de manteiga de karité, óleo de coco e óleo de amêndoas doce repara fios ressecados e devolve maciez de cobertor.",
    usage: [
      "Use após o Care Shampoo Pro, antes do último enxágue.",
      "Massageie suavemente da raiz às pontas.",
      "Deixe agir por 5 minutos e enxágue bem.",
      "Seque normalmente.",
    ],
    composition:
      "Blend de óleos vegetais (karité, coco e amêndoas doces), álcool ceto-estearílico, fragrância suave e conservante seguro.",
    tags: ["Reparador", "Vegetal", "Para revenda"],
    image: condicionadorImg,
  },
  {
    id: "desinfetante-bactericida",
    code: "CARE.03",
    name: "Care Desinfetante Bactericida",
    category: "Limpeza de ambiente",
    size: "5L",
    headline: "99,9% de fungos e bactérias longe do seu pet.",
    description:
      "Desenvolvido para casas, canis e salões com pets. Limpa, desinfeta e perfuma o ambiente com fragrância leve e ação prolongada.",
    usage: [
      "Lave o local e remova o resíduo de sabão.",
      "Aplique o desinfetante diretamente na superfície.",
      "Deixe agir por 10 minutos antes de enxaguar.",
    ],
    composition:
      "Cloreto de alquil dimetil benzil amônio, tensoativo não iônico, fragrância e veículo aquoso.",
    tags: ["Profissional", "Uso interno do salão"],
    image: null,
  },
  {
    id: "colonia-he",
    code: "CARE.04",
    name: "Care Colônia Soft — He",
    category: "Odorização",
    size: "120ml",
    headline: "Cheirinho de bebê, edição amigão.",
    description:
      "Perfumaria suave para machos. Reduz odores naturais sem agredir a pele e prolonga a sensação de banho recém-feito.",
    usage: [
      "Borrife sobre todo o pelo após o banho ou quando desejar.",
      "Evite contato com os olhos.",
    ],
    composition: "Fragrância exclusiva, polisorbato e veículo aquoso.",
    tags: ["Para revenda", "Pós-banho"],
    image: null,
  },
  {
    id: "colonia-she",
    code: "CARE.05",
    name: "Care Colônia Soft — She",
    category: "Odorização",
    size: "120ml",
    headline: "Cheirinho de bebê, edição princesa.",
    description:
      "Perfumaria suave para fêmeas. Toque delicado, fixação prolongada e fórmula respeitosa com a pele.",
    usage: [
      "Borrife sobre todo o pelo após o banho ou quando desejar.",
      "Evite contato com os olhos.",
    ],
    composition: "Fragrância exclusiva, polisorbato e veículo aquoso.",
    tags: ["Para revenda", "Pós-banho"],
    image: null,
  },
  {
    id: "halito-fresh",
    code: "CARE.06",
    name: "Care Hálito Fresh",
    category: "Cuidado bucal",
    size: "120ml",
    headline: "Beijo molhado sem mau hálito.",
    description:
      "Spray bucal de menta para cães e gatos. Combate o mau hálito, ajuda na proteção de dentes e gengivas e pode ser usado todos os dias.",
    usage: [
      "Aplique 2 borrifadas no interior da boca do pet.",
      "Uso diário recomendado.",
    ],
    composition: "Veículo aquoso, clorexidina 0,1%, glicerina, cloreto de cetilpiridínio e aroma de menta.",
    tags: ["Uso diário", "Para revenda"],
    image: null,
  },
  {
    id: "protect-focinho",
    code: "CARE.07",
    name: "Care Protect Focinho",
    category: "Cuidado complementar",
    size: "15g",
    headline: "Focinho hidratado, sem rachaduras.",
    description:
      "Bálsamo 100% vegano que hidrata, restaura e previne rachaduras causadas por sol, frio ou ressecamento. Toque sedoso e absorção rápida.",
    usage: [
      "Limpe e seque o focinho.",
      "Aplique uma pequena quantidade com a ponta dos dedos.",
      "Massageie até absorver. Use diariamente ou em climas extremos.",
    ],
    composition:
      "Manteiga de karité, emolientes vegetais, dióxido de titânio, óxido de zinco, filtros UV dermatológicos, fragrância e conservante.",
    tags: ["Vegano", "Profissional"],
    image: null,
  },
  {
    id: "protect-patinhas",
    code: "CARE.08",
    name: "Care Protect Patinhas",
    category: "Cuidado complementar",
    size: "15g",
    headline: "Coxins macios, prontos para qualquer caminhada.",
    description:
      "Bálsamo 100% vegano para as almofadinhas das patas. Restaura, hidrata e protege contra superfícies ásperas e mudanças bruscas de clima.",
    usage: [
      "Limpe e seque as patinhas.",
      "Aplique nas almofadinhas e massageie até absorver.",
      "Use diariamente ou após passeios longos.",
    ],
    composition:
      "Manteiga de karité, emolientes vegetais, dióxido de titânio, óxido de zinco, filtros UV dermatológicos, fragrância e conservante.",
    tags: ["Vegano", "Profissional"],
    image: null,
  },
];

export const careKits: CareKit[] = [
  {
    id: "kit-pos-banho",
    name: "Kit Pós-Banho Essencial",
    pitch:
      "Ideal para venda no balcão pós-banho. Aumenta o ticket médio do petshop sem esforço de venda.",
    items: ["Care Shampoo Pro", "Care Condicionador Reparador", "Care Colônia Soft (He ou She)"],
    image: null,
  },
  {
    id: "kit-cuidado-diario",
    name: "Kit Cuidado Diário",
    pitch:
      "Linha de manutenção entre banhos. Recompra previsível e fideliza o tutor ao seu petshop.",
    items: ["Care Hálito Fresh", "Care Protect Focinho", "Care Protect Patinhas"],
    image: null,
  },
  {
    id: "kit-operacao-petshop",
    name: "Kit Operação Petshop",
    pitch:
      "Para uso interno do salão de banho e tosa. Padrão profissional, custo otimizado para volume.",
    items: ["Care Shampoo Pro 5L", "Care Condicionador Reparador", "Care Desinfetante Bactericida 5L"],
    image: null,
  },
];
