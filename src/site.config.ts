// ============================================================================
// site.config.ts — dados do portfólio pessoal (leonardofdsantos.com.br).
// Mesmo padrão usado em site-template/src/site.config.ts — edite aqui pra
// atualizar textos, projetos do portfólio e planos.
// ============================================================================

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  content: string;
};

export type PortfolioItem = {
  name: string;
  niche: string;
  description: string;
  icon: string; // emoji representando o nicho
  image?: string; // foto de capa do card (URL pública)
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
    photo?: string; // foto de perfil (URL) — mostrada no hero. Sem ela, cai pra logo.
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
    photos: string[]; // URLs de imagem — troque pelas suas fotos quando tiver
  };
  portfolio: PortfolioItem[];
  planos: PlanoItem[];
  contact: {
    web3formsKey: string;
    showForm: boolean;
  };
  blogPosts: BlogPost[];
  seo: {
    ogImage: string; // imagem de preview ao compartilhar o link (1200x630 recomendado)
    keywords?: string; // palavras-chave personalizadas (opcional)
    authorBio?: string; // bio do autor para SEO (opcional)
  };
}

// Conteúdo padrão / de fallback — usado no primeiro build e sempre que o
// Supabase não estiver configurado ou a busca falhar (ver src/lib/content.ts).
// Depois que o admin (/admin) salvar uma edição, o site passa a servir o
// conteúdo do banco em vez deste aqui.
export const defaultSiteConfig: SiteConfig = {
  personal: {
    name: "Leonardo Felipe da Silva dos Santos",
    role: "Criação de sites institucionais",
    tagline: "Sites rápidos e acessíveis pra negócios locais",
    description:
      "Crio sites institucionais rápidos e com preço acessível pra pequenos comércios que ainda não têm presença online — oficinas, salões, clínicas e mais.",
    city: "Santa Maria - RS",
    whatsapp: "5555999921300",
    instagram: "leonardofdsantos",
    email: "contato@leonardofdsantos.com.br",
    photo: "/leonardo.jpg",
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
    // Fotos reais e gratuitas (Unsplash) de ambiente de código — sem rosto
    // de propósito, pra não sugerir ser uma foto sua até você trocar pelas
    // suas de verdade pelo /admin (aceita qualquer URL de imagem pública).
    photos: [
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=400&h=400&fit=crop&q=80",
    ],
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
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&q=75",
      url: "",
    },
    {
      name: "H2UFSM",
      niche: "Equipe de Competição Universitária",
      description: "Site institucional da equipe de competição a hidrogênio da UFSM, com foco em captação de patrocínio.",
      icon: "💧",
      image: "https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=600&h=400&fit=crop&q=75",
      url: "",
    },
    {
      name: "Luma",
      niche: "Blog",
      description: "Blog pessoal de conteúdo (lumaconhecimento.com.br) — projeto encerrado.",
      icon: "📝",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&h=400&fit=crop&q=75",
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
    {
      name: "Plano Premium",
      setupPrice: "R$ 2.000",
      monthlyPrice: "R$ 250/mês",
      features: [
        "Painel/CRM próprio (Next.js + Supabase)",
        "Múltiplas páginas e integrações personalizadas",
        "Login e área restrita para o cliente",
        "Suporte prioritário com reuniões de acompanhamento",
      ],
    },
  ],
  contact: {
    web3formsKey: "SUA_CHAVE_WEB3FORMS_AQUI",
    showForm: true,
  },
  blogPosts: [
    {
      slug: "criacao-sites-santa-maria",
      title: "Criação de Sites em Santa Maria: Tudo o que Você Precisa Saber",
      description: "Descubra como criar um site profissional em Santa Maria e impulsione seu negócio local com presença online.",
      date: "15 de Outubro, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
      content: "Se você está procurando por criação de sites em Santa Maria, chegou ao lugar certo. Ter um site profissional é essencial para qualquer negócio local que deseja crescer e atrair mais clientes. Neste artigo, vamos explorar tudo o que você precisa saber sobre a criação de sites em Santa Maria.<br><br>Por que Ter um Site é Importante para Seu Negócio em Santa Maria:<br>- Visibilidade nas buscas do Google.<br>- Credibilidade frente aos concorrentes.<br>- Disponibilidade 24 horas."
    },
    {
      slug: "desenvolvimento-web-rapido",
      title: "Desenvolvimento Web Rápido: Como Ter Seu Site em Poucos Dias",
      description: "Aprenda como o desenvolvimento web rápido pode ajudar seu negócio a marcar presença online em poucos dias.",
      date: "22 de Outubro, 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
      content: "No mundo digital de hoje, a velocidade é fundamental. Se você está procurando por desenvolvimento web rápido, este artigo é para você. Vamos explicar como ter seu site pronto em poucos dias, sem perder qualidade.<br><br>Vantagens de um Site Rápido:<br>- Experiência do usuário impecável.<br>- Posicionamento superior no Google.<br>- Maior taxa de conversão para clientes."
    },
    {
      slug: "quanto-custa-criar-um-site-em-santa-maria-2025",
      title: "Quanto Custa Criar um Site em Santa Maria?",
      description: "Análise completa dos custos para desenvolver um site institucional ou landing page para sua empresa em Santa Maria - RS.",
      date: "02 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&q=80",
      content: "Uma das dúvidas mais comuns dos empreendedores é sobre o investimento necessário para colocar uma empresa na internet. Oferecemos opções acessíveis com planos a partir de R$ 500 de setup inicial + taxa mensal de manutenção que já inclui hospedagem e domínio."
    }
  ],
  seo: {
    // Foto real (Unsplash), recortada em 1200x630 — aparece quando o link
    // é compartilhado no WhatsApp, Instagram, etc.
    ogImage: "https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?w=1200&h=630&fit=crop&q=80",
    // Palavras-chave SEO otimizadas para encontrar este site no Google
    keywords: "Leonardo Felipe, Leonardo Felipe da Silva dos Santos, Leonardo Santos, criação de sites Santa Maria, desenvolvedor web Santa Maria, sites institucionais Santa Maria, desenvolvimento web RS, freelancer Santa Maria, sites rápidos, sites acessíveis, sites para pequenos negócios, sites para empresas locais, desenvolvimento web acessível, sites institucionais rápidos, criação de sites profissionais, sites para negócios locais, desenvolvedor web freelancer Santa Maria, sites institucionais acessíveis, criação de sites para empresas, sites para pequenos negócios Santa Maria, desenvolvimento web rápido, sites institucionais para empresas, criação de sites acessíveis Santa Maria",
    // Bio do autor para SEO
    authorBio: "Leonardo Felipe da Silva dos Santos é desenvolvedor web especializado em criação de sites institucionais rápidos e acessíveis para pequenos negócios em Santa Maria - RS."
  },
};
