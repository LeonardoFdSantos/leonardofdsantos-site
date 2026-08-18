// ============================================================================
// site.config.ts — dados do portfólio pessoal (leonardofdsantos.com.br).
// Mesmo padrão usado em site-template/src/site.config.ts — edite aqui pra
// atualizar textos, projetos do portfólio e planos.
// ============================================================================

export type PortfolioItem = {
  name: string;
  niche: string;
  description: string;
  icon: string; // emoji representando o nicho
  url?: string; // link da demo/site publicado (deixe vazio até publicar)
  status?: "encerrado"; // marque projetos que não estão mais no ar
};

export type Highlight = {
  icon: string;
  title: string;
  text: string;
};

export type PlanoItem = {
  name: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  highlighted?: boolean;
};

export interface SiteConfig {
  personal: {
    name: string;
    role: string;
    tagline: string;
    description: string;
    city: string;
    whatsapp: string; // dígitos com DDI
    instagram?: string;
    email?: string;
  };
  theme: {
    primary: string;
    secondary: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    ctaText: string;
    stats: { value: string; label: string }[];
  };
  about: {
    title: string;
    text: string;
    highlights: Highlight[];
  };
  portfolio: PortfolioItem[];
  planos: PlanoItem[];
  contact: {
    web3formsKey: string;
    showForm: boolean;
  };
}

export const siteConfig: SiteConfig = {
  personal: {
    name: "Leonardo Felipe da Silva dos Santos",
    role: "Criação de sites institucionais",
    tagline: "Sites rápidos e acessíveis pra negócios locais",
    description:
      "Crio sites institucionais rápidos e com preço acessível pra pequenos comércios que ainda não têm presença online — oficinas, salões, clínicas e mais.",
    city: "Santa Maria - RS",
    whatsapp: "5555999921300",
    instagram: "leonardofdsantos",
    email: "leonardo.santos@acad.ufsm.br",
  },
  theme: {
    primary: "#2563eb",
    secondary: "#0f172a",
  },
  hero: {
    badge: "Disponível pra novos projetos",
    headline: "Seu negócio merece um site tão bom quanto o seu atendimento",
    subheadline:
      "Sites institucionais rápidos, com preço acessível e prontos em poucos dias — pra você aparecer no Google e passar confiança pros seus clientes.",
    ctaText: "Falar no WhatsApp",
    stats: [
      { value: "4+", label: "sites entregues" },
      { value: "48h", label: "primeira demo pronta" },
      { value: "R$500", label: "a partir de" },
    ],
  },
  about: {
    title: "Sobre mim",
    text: "Crio sites institucionais pra pequenos negócios locais que ainda não têm site próprio ou dependem só de indicação. Cada site é feito sob medida, rápido de produzir e com uma mensalidade acessível de manutenção — sem enrolação, sem WordPress.",
    highlights: [
      { icon: "⚡", title: "Rápido", text: "Site pronto em poucos dias, não meses." },
      { icon: "💸", title: "Preço acessível", text: "Setup baixo pensado pra quem tá começando." },
      { icon: "🚫", title: "Sem WordPress", text: "Código leve, rápido de carregar, sem plugin quebrado." },
      { icon: "🤝", title: "Suporte contínuo", text: "Mensalidade cobre ajustes e manutenção." },
    ],
  },
  portfolio: [
    {
      name: "EnginQR",
      niche: "Gestão de Ativos com QR Code",
      description: "App B2B pra cadastrar, rastrear e manter o histórico de manutenção de ativos via QR Code.",
      icon: "🏷️",
      url: "",
    },
    {
      name: "H2UFSM",
      niche: "Equipe de Competição Universitária",
      description: "Site institucional da equipe de competição a hidrogênio da UFSM, com foco em captação de patrocínio.",
      icon: "💧",
      url: "",
    },
    {
      name: "Luma",
      niche: "Blog",
      description: "Blog pessoal de conteúdo (lumaconhecimento.com.br) — projeto encerrado.",
      icon: "📝",
      url: "",
      status: "encerrado",
    },
  ],
  planos: [
    {
      name: "Plano Essencial",
      setupPrice: "R$ 500",
      monthlyPrice: "R$ 100/mês",
      features: [
        "Site institucional de 1 página",
        "Botão de WhatsApp",
        "Formulário de contato",
        "Hospedagem e domínio incluídos",
      ],
    },
    {
      name: "Plano Completo",
      setupPrice: "R$ 800",
      monthlyPrice: "R$ 150/mês",
      features: [
        "Tudo do Essencial",
        "Múltiplas seções (galeria, catálogo ou tabela de preços)",
        "Ajustes mensais inclusos",
        "Prioridade no suporte",
      ],
      highlighted: true,
    },
  ],
  contact: {
    web3formsKey: "SUA_CHAVE_WEB3FORMS_AQUI",
    showForm: true,
  },
};
