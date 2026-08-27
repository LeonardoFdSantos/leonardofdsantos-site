import { type SiteConfig } from "./site.config"; // ajuste interno se necessário

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
  icon: string;
  image?: string;
  url?: string;
  status?: "encerrado";
};

export type PlanoItem = {
  name: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  highlighted?: boolean;
};

export type Highlight = {
  icon: string;
  title: string;
  text: string;
};

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
    badge: "Disponível para novos projetos em Santa Maria - RS",
    headline: "Sua empresa no Google em dias, com preço que cabe no bolso.",
    subheadline:
      "Crio sites institucionais rápidos e profissionais para pequenos negócios. Sem complicação, sem WordPress lento e com suporte mensal dedicado.",
    ctaText: "Quero meu site agora",
    stats: [
      { value: "+12", label: "Projetos entregues" },
      { value: "48h", label: "Primeira demo no ar" },
      { value: "100%", label: "Foco em conversão" },
    ],
  },
  about: {
    title: "Desenvolvimento web moderno e sem burocracia para sua empresa",
    text: "Sou desenvolvedor web focado em ajudar comércios locais, oficinas, salões e profissionais liberais de Santa Maria e região a marcarem presença na internet com alta performance e investimento justo.",
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&q=80",
    ],
    highlights: [
      { icon: "⚡", title: "Entrega ultrarrápida", text: "Site pronto em poucos dias, não meses." },
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
      title: "Quanto Custa Criar um Site em Santa Maria em 2025?",
      description: "Análise completa dos custos para desenvolver um site institucional ou landing page para sua empresa em Santa Maria - RS.",
      date: "02 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&q=80",
      content: "Uma das dúvidas mais comuns dos empreendedores é sobre o investimento necessário para colocar uma empresa na internet. Em 2025, o mercado de criação de sites em Santa Maria oferece opções acessíveis para pequenos negócios.<br><br>Modelos de Investimento:<br>Trabalhamos com planos a partir de R$ 500 de setup inicial + taxa mensal de manutenção que já inclui hospedagem e domínio. Ideal para quem quer começar sem comprometer o caixa."
    },
    {
      slug: "importancia-do-seo-local-para-comercios",
      title: "A Importância do SEO Local para Comércios e Prestadores de Serviços",
      description: "Como aparecer nas primeiras posições do Google para clientes na sua região em Santa Maria.",
      date: "10 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop&q=80",
      content: "O SEO local é a estratégia definitiva para atrair clientes que estão procurando exatamente o seu serviço no seu bairro ou cidade. Combinando meta tags otimizadas, dados estruturados (Schema.org) e um site rápido, seu negócio ganha destaque imediato nas buscas orgânicas."
    },
    {
      slug: "por-que-evitar-wordpress-em-sites-institucionais",
      title: "Por Que Evitar WordPress em Sites Institucionais de Pequenos Negócios?",
      description: "Entenda por que código moderno e estático supera plataformas pesadas em segurança, velocidade e custo.",
      date: "17 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80",
      content: "Muitas agências ainda empurram WordPress para qualquer tipo de site. No entanto, para sites institucionais de pequenos negócios, plataformas cheias de plugins geram lentidão, brechas de segurança e custos desnecessários de manutenção. Com sites estáticos desenvolvidos em Astro, garantimos performance máxima e zero dor de cabeça com invasões."
    },
    {
      slug: "como-atrair-mais-clientes-pelo-whatsapp-atraves-do-site",
      title: "Como Atrair Mais Clientes pelo WhatsApp Através do Seu Site",
      description: "Dicas práticas de conversão para transformar visitantes do seu site em conversas diretas no WhatsApp.",
      date: "24 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop&q=80",
      content: "Ter tráfego no site não adianta nada se o cliente não entrar em contato. O segredo está em colocar botões de chamada para ação (CTA) estratégicos e flutuantes conectados diretamente ao seu WhatsApp."
    },
    {
      slug: "estudo-caso-oficina-mecanica-santa-maria",
      title: "Como uma Oficina Mecânica em Santa Maria Dobrou o Faturamento com um Site",
      description: "Estudo de caso prático mostrando como clientes buscam serviços automotivos no Google.",
      date: "01 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&h=500&fit=crop&q=80",
      content: "Veja como a presença digital direcionada para buscas locais transformou a captação de clientes de uma oficina mecânica em Santa Maria."
    },
    {
      slug: "saloes-beleza-barbearias-site-vs-instagram",
      title: "Salões de Beleza e Barbearias: Por Que o Instagram Não Substitui um Site",
      description: "Entenda por que depender apenas de redes sociais limita o crescimento do seu negócio de beleza.",
      date: "08 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop&q=80",
      content: "Redes sociais são ótimas para engajamento, mas o Google é onde as pessoas buscam serviços imediatos na sua região."
    },
    {
      slug: "seo-local-bairros-santa-maria",
      title: "O Guia do SEO Local para Comércios no Itararé, Centro e Camobi",
      description: "Como aparecer no Google Maps e nas buscas específicas por bairros estratégicos de Santa Maria.",
      date: "15 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=500&fit=crop&q=80",
      content: "Estratégias avançadas de otimização para dominar os bairros de Santa Maria nas buscas orgânicas."
    },
    {
      slug: "sites-institucionais-rapidos-sem-lentidao",
      title: "Sites Institucionais Rápidos: O Fim dos Carregamentos Lentos",
      description: "A importância da velocidade de carregamento e o impacto nos celulares dos clientes.",
      date: "22 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop&q=80",
      content: "Descubra por que segundos a mais no carregamento fazem o cliente desistir do seu negócio."
    },
    {
      slug: "marketing-digital-clinicas-psicologos-santa-maria",
      title: "Como Profissionais de Saúde Devem Divulgar Seus Serviços na Internet",
      description: "Ética profissional, credibilidade e facilidade de agendamento via WhatsApp.",
      date: "29 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
      content: "Guia de presença digital para psicólogos, dentistas e clínicas em Santa Maria."
    },
    {
      slug: "erros-comuns-criacao-sites-pequenas-empresas",
      title: "5 Erros Comuns que Pequenas Empresas Cometem ao Criar Seu Primeiro Site",
      description: "Evite falhas críticas que prejudicam a imagem e as vendas do seu negócio.",
      date: "05 de Janeiro, 2026",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop&q=80",
      content: "Saiba quais são os erros mais comuns e como um site profissional resolve todos eles."
    }
  ],
  seo: {
    ogImage: "https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?w=1200&h=630&fit=crop&q=80",
  },
};
