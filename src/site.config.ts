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

export interface SiteConfig {
  personal: {
    name: string;
    role: string;
    tagline: string;
    description: string;
    city: string;
    whatsapp: string;
    instagram?: string;
    email?: string;
    photo?: string;
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
    photos: string[];
  };
  portfolio: PortfolioItem[];
  planos: PlanoItem[];
  contact: {
    web3formsKey: string;
    showForm: boolean;
  };
  blogPosts: BlogPost[];
  seo: {
    ogImage: string;
    keywords?: string;
    authorBio?: string;
  };
}

export const defaultSiteConfig: SiteConfig = {
  personal: {
    name: "Leonardo Felipe da Silva dos Santos",
    role: "Criação de sites institucionais no RS",
    tagline: "Sites rápidos e acessíveis para empresas em todo o Rio Grande do Sul",
    description:
      "Crio sites institucionais rápidos, modernos e focados em vendas para pequenos e médios negócios em Porto Alegre, Caxias do Sul, Pelotas, Santa Maria, Canoas e em todo o RS.",
    city: "Rio Grande do Sul - RS",
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
    badge: "Disponível para novos projetos em todo o RS",
    headline: "Sua empresa no topo do Google em dias, com preço justo.",
    subheadline:
      "Desenvolvo sites institucionais ultrarrápidos para comércios e prestadores de serviços em todo o Rio Grande do Sul. Sem WordPress lento, pronto em 48h.",
    ctaText: "Falar no WhatsApp",
    stats: [
      { value: "+15", label: "Projetos entregues" },
      { value: "48h", label: "Primeira demo no ar" },
      { value: "100%", label: "Foco em vendas" },
    ],
  },
  about: {
    title: "Desenvolvimento web profissional e sem enrolação para o RS",
    text: "Ajudo empresários de todo o Rio Grande do Sul a conquistarem novos clientes através da internet. Com um site profissional, rápido e direto ao ponto, sua empresa passa credibilidade imediata e vende mais.",
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop&q=80",
    ],
    highlights: [
      { icon: "⚡", title: "Velocidade Máxima", text: "Sites otimizados que carregam instantaneamente no celular." },
      { icon: "💸", title: "Investimento Justo", text: "Preço acessível com parcelamento e suporte inclusos." },
      { icon: "🚫", title: "Zero Dor de Cabeça", text: "Sem WordPress pesado, sem plugins quebrando." },
      { icon: "🤝", title: "Suporte Dedicado", text: "Ajustes mensais e atendimento direto com o desenvolvedor." },
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
      slug: "criacao-sites-rio-grande-do-sul",
      title: "Criação de Sites no Rio Grande do Sul: Como Destacar Sua Empresa no RS",
      description: "Guia completo de desenvolvimento web e criação de sites profissionais para empresas em todo o Rio Grande do Sul.",
      date: "10 de Outubro, 2025",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
      content: "Se você tem uma empresa no Rio Grande do Sul e ainda depende apenas de indicações ou redes sociais, está perdendo vendas todos os dias. A criação de sites profissionais no RS é o passo definitivo para consolidar sua marca e atrair clientes qualificados.<br><br>Por que ter um site no RS?<br>- Alcance estadual ou municipal imediato.<br>- Autoridade perante os concorrentes locais.<br>- Vendas 24 horas por dia."
    },
    {
      slug: "desenvolvimento-web-rapido-rs",
      title: "Desenvolvimento Web Rápido no RS: Seu Site Pronto em 48 Horas",
      description: "Descubra como nossa metodologia ágil entrega sites institucionais de alta performance em tempo recorde no Rio Grande do Sul.",
      date: "15 de Outubro, 2025",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80",
      content: "No mercado atual, agilidade é dinheiro. Se você precisa de desenvolvimento web rápido no Rio Grande do Sul, entregamos seu site institucional pronto em até 48 horas, com design impecável e otimizado para celulares."
    },
    {
      slug: "quanto-custa-criar-um-site-rs-2025",
      title: "Quanto Custa Criar um Site no Rio Grande do Sul em 2025?",
      description: "Análise transparente dos custos de criação de sites institucionais e landing pages para empresas gaúchas.",
      date: "22 de Outubro, 2025",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&q=80",
      content: "Investir em um site próprio não precisa ser caro. Em 2025, oferecemos planos a partir de R$ 500 de setup inicial com hospedagem e domínio inclusos para todo o estado do RS."
    },
    {
      slug: "seo-local-comercios-rs",
      title: "SEO Local no RS: Como Aparecer no Google para Clientes da Sua Região",
      description: "Estratégias comprovadas para posicionar seu negócio nas primeiras posições do Google em cidades gaúchas.",
      date: "29 de Outubro, 2025",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop&q=80",
      content: "O SEO local coloca sua empresa na frente dos clientes que estão buscando exatamente o que você vende na sua cidade no Rio Grande do Sul."
    },
    {
      slug: "por-que-evitar-wordpress-empresas-rs",
      title: "Por Que Empresas Gaúchas Devem Evitar WordPress em Sites Institucionais",
      description: "Saiba por que o código estático moderno supera plataformas pesadas em segurança e velocidade no RS.",
      date: "05 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80",
      content: "Plataformas cheias de plugins geram lentidão e falhas de segurança. Nossos sites estáticos em Astro garantem velocidade máxima e cero dor de cabeça."
    },
    {
      slug: "como-atrair-clientes-whatsapp-site-rs",
      title: "Como Converter Visitantes em Clientes pelo WhatsApp no Seu Site",
      description: "Dicas práticas de conversão para transformar o tráfego do seu site em conversas de vendas no WhatsApp.",
      date: "12 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop&q=80",
      content: "Coloque botões de chamada para ação (CTA) estratégicos e flutuantes conectados diretamente ao seu WhatsApp para fechar mais negócios."
    },
    {
      slug: "criacao-sites-porto-alegre",
      title: "Criação de Sites em Porto Alegre: Posicione Sua Marca na Capital",
      description: "Serviço especializado de criação de sites institucionais para empresas e comércios em Porto Alegre - RS.",
      date: "19 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop&q=80",
      content: "Porto Alegre é o coração econômico do RS. Tenha um site profissional para destacar sua empresa na capital gaúcha."
    },
    {
      slug: "criacao-sites-caxias-do-sul",
      title: "Criação de Sites em Caxias do Sul: Soluções Web para a Serra Gaúcha",
      description: "Desenvolvimento de sites rápidos e modernos para indústrias, comércios e prestadores em Caxias do Sul.",
      date: "26 de Novembro, 2025",
      image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&h=500&fit=crop&q=80",
      content: "A Serra Gaúcha não para, e sua empresa também não pode parar. Conquiste clientes em Caxias do Sul com um site de alta performance."
    },
    {
      slug: "criacao-sites-pelotas",
      title: "Criação de Sites em Pelotas: Impulsione Seu Negócio na Zona Sul",
      description: "Sites institucionais profissionais com foco em conversão e SEO para empresas de Pelotas - RS.",
      date: "03 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=500&fit=crop&q=80",
      content: "Destaque seu comércio ou serviço em Pelotas e região com um site rápido, bonito e pronto para receber clientes do Google."
    },
    {
      slug: "criacao-sites-santa-maria-rs",
      title: "Criação de Sites em Santa Maria - RS: O Guia Definitivo para o Coração do Estado",
      description: "Soluções em desenvolvimento web para pequenos negócios e profissionais liberais em Santa Maria.",
      date: "10 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=80",
      content: "Santa Maria é polo universitário e comercial. Tenha um site profissional para liderar o mercado local."
    },
    {
      slug: "criacao-sites-canoas",
      title: "Criação de Sites em Canoas: Presença Digital de Alto Impacto",
      description: "Desenvolvimento web ágil e acessível para empresas e prestadores de serviços em Canoas - RS.",
      date: "17 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=500&fit=crop&q=80",
      content: "Apareça nas buscas do Google em Canoas com um site institucional moderno que passa total confiança aos seus clientes."
    },
    {
      slug: "site-oficina-mecanica-rs",
      title: "Sites para Oficinas Mecânicas no RS: Como Encher sua Agenda de Clientes",
      description: "Descubra como oficinas mecânicas no Rio Grande do Sul estão conquistando novos motoristas através do Google.",
      date: "24 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&h=500&fit=crop&q=80",
      content: "Motoristas que precisam de socorro ou revisão buscam no celular. Sua oficina mecânica no RS precisa estar no topo do Google."
    },
    {
      slug: "site-saloes-beleza-rs",
      title: "Sites para Salões de Beleza e Barbearias no RS: Vitrine e Agendamento",
      description: "Aumente o faturamento do seu salão de beleza no Rio Grande do Sul com um site profissional.",
      date: "31 de Dezembro, 2025",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop&q=80",
      content: "Mostre seus cortes, penteados e serviços em um site elegante com botão direto para agendamento no WhatsApp."
    },
    {
      slug: "site-clinicas-medicas-rs",
      title: "Sites para Clínicas Médicas e Profissionais de Saúde no RS",
      description: "Credibilidade, ética e conversão de pacientes para consultórios em todo o estado.",
      date: "07 de Janeiro, 2026",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop&q=80",
      content: "Pacientes buscam médicos e clínicas de confiança na internet. Tenha um site seguro, rápido e profissional."
    },
    {
      slug: "site-lojas-materiais-construcao-rs",
      title: "Sites com Catálogo para Lojas de Materiais de Construção no RS",
      description: "Facilite orçamentos e venda mais materiais de construção em sua região no Rio Grande do Sul.",
      date: "14 de Janeiro, 2026",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb18fcd5c?w=800&h=500&fit=crop&q=80",
      content: "Exponha seus produtos e facilite pedidos rápidos de orçamento direto pelo WhatsApp da sua loja."
    },
    {
      slug: "site-imobiliarias-rs",
      title: "Sites para Imobiliárias e Corretores Independentes no RS",
      description: "Plataformas modernas para captação de leads e exibição de imóveis em todo o Rio Grande do Sul.",
      date: "21 de Janeiro, 2026",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop&q=80",
      content: "Venda e alugue mais imóveis com um site profissional otimizado para captação de clientes no Google."
    },
    {
      slug: "site-servicos-limpeza-rs",
      title: "Como Atrair Clientes para Empresas de Limpeza no Rio Grande do Sul",
      description: "Sites focados em agendamento de serviços de limpeza residencial e comercial.",
      date: "28 de Janeiro, 2026",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop&q=80",
      content: "Empresas de limpeza precisam de agilidade no agendamento. Um site institucional resolve isso."
    },
    {
      slug: "site-academias-rs",
      title: "Sites para Academias e Personal Trainers no RS: Foco em Matrículas",
      description: "Como transformar visitantes em alunos através de sites com foco em conversão.",
      date: "04 de Fevereiro, 2026",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&q=80",
      content: "A academia precisa de matrículas constantes. O site é sua principal vitrine."
    },
    {
      slug: "site-advocacia-rs",
      title: "Sites para Advogados e Escritórios de Advocacia no RS: Credibilidade e Ética",
      description: "Sites que respeitam as normas da OAB e focam na autoridade digital do advogado.",
      date: "11 de Fevereiro, 2026",
      image: "https://images.unsplash.com/photo-1589829545856-d138a379435b?w=800&h=500&fit=crop&q=80",
      content: "Advogados precisam de confiança. Um site institucional transmite a seriedade do escritório."
    },
    {
      slug: "site-petshops-veterinarias-rs",
      title: "Sites para Pet Shops e Clínicas Veterinárias no RS: Cuidado com o Cliente",
      description: "Exponha seus serviços de banho, tosa e atendimento veterinário com um site profissional.",
      date: "18 de Fevereiro, 2026",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&h=500&fit=crop&q=80",
      content: "Destaque seu amor pelos animais com um site bonito e prático para tutores da sua região."
    },
    {
      slug: "importancia-velocidade-site-seo",
      title: "Por que a Velocidade do Seu Site é o Fator de Ranking Mais Ignorado",
      description: "Como um site lento mata suas chances de aparecer nas primeiras posições do Google.",
      date: "25 de Fevereiro, 2026",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
      content: "Google penaliza sites lentos. Nossas soluções em Astro garantem velocidade extrema para seu negócio no RS."
    },
    {
      slug: "site-padarias-confeitarias-rs",
      title: "Sites para Padarias e Confeitarias no RS: O Sabor do Marketing Digital",
      description: "Aumente as encomendas de bolos e doces com um site profissional e um cardápio online.",
      date: "04 de Março, 2026",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop&q=80",
      content: "Mostre suas delícias com fotos de alta qualidade e facilite encomendas via WhatsApp."
    },
    {
      slug: "site-escolas-cursos-rs",
      title: "Sites para Escolas e Cursos Livres no RS: Matrículas Abertas",
      description: "Plataformas para captação de alunos e apresentação de cursos para empresas gaúchas.",
      date: "11 de Março, 2026",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop&q=80",
      content: "Sua escola precisa mostrar currículo e resultados. Transforme visitantes em novos alunos."
    },
    {
      slug: "site-restaurantes-bares-rs",
      title: "Sites para Restaurantes e Bares no RS: Cardápios Digitais que Vendem",
      description: "Como um site profissional pode aumentar as reservas e pedidos em bares e restaurantes.",
      date: "18 de Março, 2026",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=500&fit=crop&q=80",
      content: "Seu cardápio deve ser visto de forma prática no celular. Tenha um site de alto padrão."
    },
    {
      slug: "como-escolher-desenvolvedor-rs",
      title: "Como Escolher um Desenvolvedor Web Confiável no Rio Grande do Sul",
      description: "Dicas de segurança e qualidade para garantir que seu site entregue os resultados prometidos.",
      date: "25 de Março, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80",
      content: "Fuja de promessas vazias e sites amadores. Saiba o que avaliar antes de contratar um desenvolvedor para sua empresa no RS."
    },
    {
      slug: "site-clinica-estetica-rs",
      title: "Sites para Clínicas de Estética no RS: Realce sua Marca com Profissionalismo",
      description: "Como um site elegante transforma clínicas de estética em centros de referência na sua cidade.",
      date: "01 de Abril, 2026",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&h=500&fit=crop&q=80",
      content: "Estética é imagem. Seu site deve ser a vitrine do seu trabalho."
    },
    {
      slug: "site-lojas-roupas-rs",
      title: "Sites para Lojas de Roupas no RS: Tendência Digital para seu Comércio",
      description: "Impulsione as vendas da sua loja de roupas com um site rápido e com catálogo visual.",
      date: "08 de Abril, 2026",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&q=80",
      content: "Moda pede visual. Tenha uma vitrine online que converte seguidores em clientes."
    },
    {
      slug: "site-eletronicos-rs",
      title: "Sites para Lojas de Eletrônicos no RS: Vendas com Segurança e Confiança",
      description: "Destaque seus produtos tecnológicos com um site rápido e focado em orçamentos.",
      date: "15 de Abril, 2026",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=500&fit=crop&q=80",
      content: "A tecnologia muda rápido, e seu site deve estar atualizado. Venda mais eletrônicos hoje."
    },
    {
      slug: "site-turismo-agencias-rs",
      title: "Sites para Agências de Viagens e Turismo no RS: Destino de Sucesso",
      description: "Como um site institucional pode transformar sua agência de turismo em referência regional.",
      date: "22 de Abril, 2026",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=500&fit=crop&q=80",
      content: "Viagem é sonho. Seu site deve despertar o desejo de explorar novos destinos com sua agência."
    },
    {
      slug: "site-servicos-contabilidade-rs",
      title: "Sites para Escritórios de Contabilidade no RS: Autoridade e Confiança",
      description: "Sites focados em credibilidade para contadores e escritórios de contabilidade.",
      date: "29 de Abril, 2026",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&q=80",
      content: "Contabilidade exige seriedade. Nosso design foca na autoridade do seu escritório."
    },
    {
      slug: "site-lojas-presentes-rs",
      title: "Sites para Lojas de Presentes no RS: O Presente Ideal a um Clique",
      description: "Como facilitar a escolha de presentes com um catálogo online integrado ao seu WhatsApp.",
      date: "06 de Maio, 2026",
      image: "https://images.unsplash.com/photo-1513201097608-20f4f9102264?w=800&h=500&fit=crop&q=80",
      content: "Presentes precisam ser vistos. Exponha sua loja com qualidade e venda muito mais."
    },
    {
      slug: "site-escritorios-arquitetura-rs",
      title: "Sites para Arquitetos no RS: Projetos de Alto Padrão em Exposição",
      description: "Sites para arquitetos que valorizam o design e querem mostrar seu portfólio de projetos.",
      date: "13 de Maio, 2026",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=500&fit=crop&q=80",
      content: "Arquitetura é visual. Seu site deve refletir a qualidade e o estilo dos seus projetos."
    },
    {
      slug: "como-vender-pelo-google-maps-rs",
      title: "Como Vender Mais pelo Google Maps no Rio Grande do Sul",
      description: "Guia prático para otimizar sua presença no Google Meu Negócio e atrair clientes próximos.",
      date: "20 de Maio, 2026",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=500&fit=crop&q=80",
      content: "O Google Maps é a ferramenta mais poderosa para negócios locais. Aprenda a dominar."
    },
    {
      slug: "site-oficinas-arte-RS",
      title: "Sites para Ateliês e Oficinas de Arte no RS: Exponha Sua Criatividade",
      description: "Sites institucionais para artistas que querem vender seu trabalho online.",
      date: "27 de Maio, 2026",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop&q=80",
      content: "Arte merece ser vista. Exponha suas criações com um site institucional moderno."
    },
    {
      slug: "site-servicos-juridicos-rs",
      title: "Sites para Serviços Jurídicos no RS: Aumente sua presença digital",
      description: " Sites profissionais para advogados que desejam expandir seus contatos de forma digital.",
      date: "03 de Junho, 2026",
      image: "https://images.unsplash.com/photo-1589829545856-d138a379435b?w=800&h=500&fit=crop&q=80",
      content: "Presença digital é fundamental para a advocacia moderna. Tenha seu site."
    },
    {
      slug: "site-academias-pilates-rs",
      title: "Sites para Estúdios de Pilates no RS: Bem-estar na palma da mão",
      description: "Sites que facilitam o agendamento de aulas de pilates no seu estúdio.",
      date: "10 de Junho, 2026",
      image: "https://images.unsplash.com/photo-1518611012108-816976f8a4f6?w=800&h=500&fit=crop&q=80",
      content: "Pilates é saúde. Seu site deve passar essa tranquilidade desde o primeiro clique."
    },
    {
      slug: "site-lojas-moveis-planejados-rs",
      title: "Sites para Móveis Planejados no RS: Projetos de Sonho Expostos",
      description: "Sites focados em exibir projetos de móveis planejados de alta qualidade.",
      date: "17 de Junho, 2026",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=500&fit=crop&q=80",
      content: "Móveis planejados precisam ser exibidos com detalhes. O site ideal para mostrar tudo."
    },
    {
      slug: "site-servicos-paisagismo-rs",
      title: "Sites para Paisagismo no RS: Transforme Jardins em Espaços de Lazer",
      description: "Como mostrar seus projetos de paisagismo e atrair clientes de alto padrão.",
      date: "24 de Junho, 2026",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480a5b?w=800&h=500&fit=crop&q=80",
      content: "Paisagismo é transformação. Seu site mostra o antes e o depois de forma impecável."
    },
    {
      slug: "site-clinica-psicologia-rs",
      title: "Sites para Psicólogos no RS: Acolhimento e Privacidade Online",
      description: "Sites institucionais para clínicas de psicologia focados em acolhimento e marcação de consultas.",
      date: "01 de Julho, 2026",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop&q=80",
      content: "Psicologia pede acolhimento. Seu site transmite esse sentimento desde o primeiro contato."
    },
    {
      slug: "site-lojas-instrumentos-musicais-rs",
      title: "Sites para Lojas de Instrumentos Musicais no RS: O Som do Sucesso",
      description: "Mostre seu catálogo de instrumentos com um site institucional rápido e prático.",
      date: "08 de Julho, 2026",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop&q=80",
      content: "Instrumentos musicais precisam ser vistos. Tenha seu catálogo sempre disponível."
    },
    {
      slug: "site-servicos-limpeza-estofados-rs",
      title: "Sites para Limpeza de Estofados no RS: Renove a Sua Casa",
      description: "Como atrair clientes que buscam limpeza especializada de sofás e estofados.",
      date: "15 de Julho, 2026",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop&q=80",
      content: "Clientes buscam soluções rápidas. Seu site é a resposta para a limpeza do estofado."
    },
    {
      slug: "site-fotografia-casamento-rs",
      title: "Sites para Fotógrafos de Casamento no RS: Eternize Memórias",
      description: "Sites para fotógrafos que buscam destacar seu portfólio de casamentos e eventos.",
      date: "22 de Julho, 2026",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop&q=80",
      content: "Fotos de casamento precisam ser memoráveis. Seu site é o palco ideal."
    },
    {
      slug: "site-lojas-artigos-festa-rs",
      title: "Sites para Artigos de Festa no RS: Tudo para sua Comemoração",
      description: "Exponha artigos de decoração, balões e acessórios de festa em um site moderno.",
      date: "29 de Julho, 2026",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=500&fit=crop&q=80",
      content: "Festas são alegria. Mostre seu catálogo de forma prática e divertida."
    },
    {
      slug: "site-consultoria-negocios-rs",
      title: "Sites para Consultoria de Negócios no RS: Expert em Crescimento",
      description: "Sites para consultores que querem atrair novos clientes com autoridade.",
      date: "05 de Agosto, 2026",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&q=80",
      content: "Consultoria exige resultados. O site institucional demonstra o valor do seu conhecimento."
    },
    {
      slug: "site-clinica-odontologia-rs",
      title: "Sites para Odontologia no RS: Sorrisos Perfeitos Começam no Google",
      description: "Aumente o número de agendamentos para sua clínica odontológica com um site profissional.",
      date: "12 de Agosto, 2026",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop&q=80",
      content: "Sorrisos são a melhor vitrine. Seu site precisa mostrar qualidade e confiança."
    },
    {
      slug: "site-personal-organizer-rs",
      title: "Sites para Personal Organizer no RS: Organize seu Espaço e sua Vida",
      description: "Como um site pode transformar uma personal organizer em referência de organização.",
      date: "19 de Agosto, 2026",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=500&fit=crop&q=80",
      content: "Personal Organizer cuida da ordem. Seu site deve transmitir exatamente essa paz."
    },
    {
      slug: "site-criacao-sites-rs-2026",
      title: "Criação de Sites Profissionais no RS: Tendências para 2026",
      description: "Veja o que há de mais moderno em design e tecnologia para sites de negócios em 2026.",
      date: "26 de Agosto, 2026",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
      content: "Esteja à frente da concorrência. Conheça as estratégias para o mercado digital no RS em 2026."
    }

  ],
  seo: {
    ogImage: "https://images.unsplash.com/photo-1638482856830-16b0e15fcf2c?w=1200&h=630&fit=crop&q=80",
    keywords: "Leonardo Felipe, criação de sites Rio Grande do Sul, desenvolvimento web RS, sites institucionais Porto Alegre, criação de sites Caxias do Sul, sites Pelotas, criação de sites Santa Maria, desenvolvedor web RS, sites para pequenos negócios RS",
    authorBio: "Leonardo Felipe da Silva dos Santos é desenvolvedor web especializado em criação de sites institucionais rápidos e acessíveis para empresas em todo o Rio Grande do Sul."
  },
};
