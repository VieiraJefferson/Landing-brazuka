"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "pt" | "en" | "de";

interface Translations {
  [key: string]: string | Translations;
}

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return context;
}

interface I18nProviderProps {
  children: React.ReactNode;
}

const translations: Record<Language, Translations> = {
  pt: {
    // Header/Navigation
    navHome: "Início",
    navServices: "Serviços",
    navPortfolio: "Portfólio",
    navExamples: "Exemplos",
    navAbout: "Sobre",
    navContact: "Contato",
    navCTA: "Fale Comigo",
    
    // Hero Section
    heroTitle: "Apps Personalizados para o Seu Negócio",
    heroSubtitle: "Desenvolvo aplicativos mobile sob medida para restaurantes, imobiliárias, salões de beleza e muito mais. Transforme seu negócio em um app moderno e funcional.",
    heroCTA: "Começar Agora",
    
    // How It Works
    howItWorksTitle: "Como Funciona",
    step1Title: "Briefing rápido",
    step1Desc: "Você me conta que tipo de aplicativo precisa e quais funções ele deve ter. Juntos definimos os objetivos principais e o estilo do projeto.",
    step2Title: "Design personalizado",
    step2Desc: "Crio um design moderno e personalizado que combina com a identidade da sua marca. Você recebe prévias e pode dar feedback antes do desenvolvimento começar.",
    step3Title: "Desenvolvimento completo",
    step3Desc: "Programo o aplicativo completo — com painel administrativo, sistema de pedidos ou gestão de clientes. Tudo é testado e otimizado para o melhor desempenho.",
    step4Title: "Publicação e suporte",
    step4Desc: "Cuido da publicação nas lojas de aplicativos e acompanho você na fase inicial. Ofereço treinamento e suporte para que você possa gerenciar seu app com segurança.",
    
    // App Types
    appTypesTitle: "Tipos de Aplicativos",
    appTypeRestaurants: "Restaurantes & Fast Food",
    appTypeRestaurantsDesc: "Cardápios digitais, pedidos online, reservas de mesas e notificações push para ofertas especiais. Seu restaurante, direto no smartphone dos seus clientes.",
    appTypeRealEstate: "Imobiliárias",
    appTypeRealEstateDesc: "Apps para imobiliárias com gestão de propriedades, integração de mapas e opções de contato direto. Apresente imóveis profissionalmente e torne-os facilmente acessíveis, móveis e modernos.",
    appTypeSalon: "Salões de Beleza",
    appTypeSalonDesc: "Agendamento de serviços, programas de fidelidade e vendas de produtos em um app elegante. Mais agendamentos, mais clientes fiéis, com sua própria ferramenta de beleza.",
    appTypeStore: "Lojas Online",
    appTypeStoreDesc: "Apps de e-commerce com carrinho de compras, integração de pagamento e mensagens promocionais push. Venda 24 horas por dia, independente de plataformas ou taxas altas.",
    appTypeITSupport: "Assistência Técnica",
    appTypeITSupportDesc: "Apps para assistência técnica com agendamento de visitas, rastreamento de equipamentos, orçamentos digitais e suporte remoto. Profissionalismo e confiança para seus clientes.",
    
    // Benefits
    benefitsTitle: "Por que ter um App?",
    benefit1Title: "Presença constante",
    benefit1Desc: "Seu negócio no celular do cliente, a um toque de distância.",
    benefit2Title: "Mais vendas e fidelização",
    benefit2Desc: "Notificações push, promoções e pedidos diretos sem taxas.",
    benefit3Title: "Independência de plataformas",
    benefit3Desc: "Livre-se da dependência de redes sociais e apps de terceiros.",
    
    // Portfolio
    portfolioTitle: "Veja o potencial do seu app",
    portfolioSubtitle: "Mockups funcionais (em código) que mostram a experiência real no celular.",
    portfolioDesc: "UI moderna, fluida e pensada para conversão.",
    portfolioDelivery: "Delivery & Restaurantes",
    portfolioStore: "Lojas & E-commerce",
    portfolioSalon: "Salões & Clínicas",
    portfolioRealEstate: "Imobiliárias",
    
    // Pricing
    pricingTitle: "Investimento",
    pricingSubtitle: "Planos adaptados para o tamanho do seu negócio",
    planStarter: "Starter",
    planPro: "Pro",
    planPremium: "Premium",
    planStarterDesc: "App simples com design padrão e painel básico.",
    planProDesc: "App completo com design personalizado e suporte premium.",
    planPremiumDesc: "Solução completa com loja online, integrações e acompanhamento.",
    featureStandardDesign: "Design padrão",
    featureOrderPanel: "Painel de pedidos",
    featureInitialSupport: "Suporte inicial",
    featureCustomDesign: "Design personalizado",
    featureFullPanel: "Painel completo",
    featurePushNotifications: "Notificações push",
    featureSupport30Days: "Suporte 30 dias",
    featureAppStore: "App + Loja Online",
    featureExternalIntegrations: "Integrações externas",
    featureExclusiveDesign: "Design exclusivo",
    featureSupport60Days: "Suporte 60 dias",
    pricingButton: "Solicitar orçamento",
    
    // Testimonials
    testimonialsTitle: "Depoimentos",
    
    // About
    aboutTitle: "Sobre Mim",
    aboutDesc: "Sou <strong>Jefferson Vieira</strong>, desenvolvedor fullstack apaixonado por tecnologia e design. Crio aplicativos sob medida para pequenos negócios, ajudando empreendedores locais a vender mais, fidelizar clientes e se destacar online.",
    
    // CTA
    ctaTitle: "Pronto para Crescer?",
    ctaSubtitle: "Vamos conversar sobre seu projeto",
    ctaButton: "Solicitar Orçamento",
    
    // Footer
    footerRights: "Todos os direitos reservados",
    
    // Contact Modal
    contactTitle: "Enviar e-mail",
    contactDesc: "Preencha o formulário e retornarei o mais breve possível.",
    contactName: "Seu nome",
    contactEmail: "Seu e-mail",
    
    // Real Estate Page
    realEstateTitle: "App para Imobiliárias",
    realEstateSubtitle: "Aplicativo mobile completo para imobiliárias com recomendações por IA, simuladores financeiros, mapas inteligentes e ferramentas completas de gestão de imóveis.",
    realEstateFeaturesTitle: "Conjunto Completo de Funcionalidades",
    realEstateFeaturesSubtitle: "Tudo que você precisa para gerenciar imóveis, engajar clientes e fechar negócios mais rápido",
    realEstateFeature1Title: "Catálogo Completo de Imóveis",
    realEstateFeature1Desc: "Fotos profissionais, tours 360°, plantas, vídeos e descrições completas com filtros avançados",
    realEstateFeature1H1: "Fotos profissionais",
    realEstateFeature1H2: "Tours Virtuais 360°",
    realEstateFeature1H3: "Plantas",
    realEstateFeature1H4: "Vídeos dos imóveis",
    realEstateFeature1H5: "Filtros avançados",
    realEstateFeature2Title: "Mapa Inteligente",
    realEstateFeature2Desc: "Integração com Google Maps com exibição de imóveis, cálculo de distância e Pontuação de Localização (0-100)",
    realEstateFeature2H1: "Exibição de imóveis no mapa",
    realEstateFeature2H2: "Distância até pontos importantes",
    realEstateFeature2H3: "IA de Pontuação de Localização",
    realEstateFeature2H4: "Filtragem por zona",
    realEstateFeature3Title: "Recomendações por IA",
    realEstateFeature3Desc: "Sugestões personalizadas de imóveis baseadas no histórico de visualizações, faixa de preço e preferências",
    realEstateFeature3H1: "Análise de comportamento",
    realEstateFeature3H2: "Imóveis similares",
    realEstateFeature3H3: "Correspondência de faixa de preço",
    realEstateFeature3H4: "Preferências de área",
    realEstateFeature4Title: "Simuladores Financeiros",
    realEstateFeature4Desc: "Calculadora de crédito habitação e simulador de rentabilidade para decisões de investimento informadas",
    realEstateFeature4H1: "Calculadora de crédito habitação",
    realEstateFeature4H2: "Rentabilidade (ROI)",
    realEstateFeature4H3: "Análise de payback",
    realEstateFeature4H4: "Projeção de cashflow",
    realEstateFeature5Title: "Alertas Inteligentes",
    realEstateFeature5Desc: "Notificações para novos imóveis, quedas de preço e listagens similares na sua área",
    realEstateFeature5H1: "Alertas de novos imóveis",
    realEstateFeature5H2: "Notificações de queda de preço",
    realEstateFeature5H3: "Correspondências de imóveis similares",
    realEstateFeature5H4: "Promoções",
    realEstateFeature6Title: "Área do Cliente",
    realEstateFeature6Desc: "Favoritos, comparações salvas, histórico de visitas, documentos e propostas",
    realEstateFeature6H1: "Imóveis favoritos",
    realEstateFeature6H2: "Comparações de imóveis",
    realEstateFeature6H3: "Histórico de visitas",
    realEstateFeature6H4: "Armazenamento de documentos",
    realEstateFeature7Title: "Agendamento de Visitas",
    realEstateFeature7Desc: "Reserva direta de agendamentos com notificação automática ao agente e rota até o imóvel",
    realEstateFeature7H1: "Reserva direta",
    realEstateFeature7H2: "Notificação ao agente",
    realEstateFeature7H3: "Rota até o imóvel",
    realEstateFeature7H4: "Tours por vídeo ao vivo",
    realEstateFeature8Title: "Painel Administrativo",
    realEstateFeature8Desc: "CRM completo com gestão de imóveis, rastreamento de clientes e funil de vendas",
    realEstateFeature8H1: "Gestão de imóveis",
    realEstateFeature8H2: "CRM de clientes",
    realEstateFeature8H3: "Funil de vendas",
    realEstateFeature8H4: "Estatísticas e relatórios",
    realEstateCatalogTitle: "Catálogo Completo de Imóveis",
    realEstateCatalogDesc: "Cada imóvel inclui fotos profissionais, tours virtuais 360°, plantas, vídeos e descrições completas. Filtros avançados ajudam os clientes a encontrar exatamente o que procuram.",
    realEstateCatalogItem1: "Fotos e vídeos profissionais",
    realEstateCatalogItem2: "Tours de Realidade Virtual 360°",
    realEstateCatalogItem3: "Plantas interativas",
    realEstateCatalogItem4: "Preço, taxas de condomínio, IPTU",
    realEstateCatalogItem5: "Rastreamento de status (disponível/reservado/vendido)",
    realEstateCatalogItem6: "Comparar até 3 imóveis simultaneamente",
    realEstateFiltersTitle: "Filtros Avançados",
    realEstateMapTitle: "Sistema de Mapa Inteligente",
    realEstateMapDesc: "Integração com Google Maps com exibição de imóveis, cálculo de distância até pontos importantes e Pontuação de Localização por IA para análise de investimento.",
    realEstateMapItem1: "Exibição de imóveis no mapa interativo",
    realEstateMapItem2: "Distância até escolas, hospitais, transporte",
    realEstateMapItem3: "Pontuação de Localização por IA (0-100)",
    realEstateMapItem4: "Filtragem baseada em zona",
    realEstateMapItem5: "Ferramentas de análise de investimento",
    realEstateLocationScore: "Pontuação de Localização (0-100)",
    realEstateLocationTransport: "Transporte",
    realEstateLocationSecurity: "Segurança",
    realEstateLocationCommerce: "Comércio",
    realEstateLocationLeisure: "Lazer",
    realEstateAITitle: "Recomendações por IA",
    realEstateAIDesc: "Machine learning analisa o comportamento do cliente para sugerir imóveis que correspondem às suas preferências, histórico de visualizações e orçamento.",
    realEstateAIItem1: "Análise de comportamento e reconhecimento de padrões",
    realEstateAIItem2: "Imóveis que correspondem ao seu perfil",
    realEstateAIItem3: "Similares aos imóveis que você visualizou",
    realEstateAIItem4: "Novas listagens na sua faixa de preço",
    realEstateAIItem5: "Recomendações personalizadas semanais",
    realEstatePremiumTitle: "Módulos Premium",
    realEstatePremiumSubtitle: "Funcionalidades avançadas opcionais disponíveis como complementos",
    realEstatePremium1Title: "IA de Preço Preditivo",
    realEstatePremium1Desc: "Estimativa de preço do imóvel baseada na região e dados históricos",
    realEstatePremium2Title: "RA - Realidade Aumentada",
    realEstatePremium2Desc: "Visualize móveis e decoração nos imóveis usando tecnologia AR",
    realEstatePremium3Title: "Imóveis ao Vivo",
    realEstatePremium3Desc: "Tours guiados de imóveis em tempo real para clientes internacionais",
    realEstatePremium4Title: "Avaliação Automática de Imóveis",
    realEstatePremium4Desc: "Estimativa de preço, valor médio por m² e análise de demanda de mercado",
    realEstateCTATitle: "Pronto para Transformar seu Negócio Imobiliário?",
    realEstateCTADesc: "Obtenha uma solução completa de aplicativo mobile com todas as funcionalidades incluídas. Entre em contato para discutir suas necessidades específicas.",
    realEstateCTAButton1: "Solicitar Orçamento",
    realEstateCTAButton2: "Agendar Demonstração",
    contactMessage: "Escreva sua mensagem...",
    contactSend: "Enviar e-mail",
    contactSending: "Enviando...",
    contactSuccess: "Mensagem enviada com sucesso! Entrarei em contato em breve.",
    
    // Screen Restaurant
    screenDeliveryTime: "Entrega em ~ 25 min • Frete: €1,90",
    screenHighlights: "Destaques",
    screenAdd: "Adicionar",
    screenAddToCart: "Adicionar ao Carrinho",
    screenCouponOfDay: "Cupom do dia",
    screenUse: "Usar",
    screenRestaurantRated: "⭐ Restaurante avaliado 4.9 • Entrega grátis acima de €20",
    screenMostOrdered: "Mais Pedidos",
    screenFreeShipping: "Frete Grátis!",
    screenAddMoreForFreeShipping: "Adicione mais €5,10 para ganhar frete grátis",
    
    // Screen Store
    screenSearch: "Buscar...",
    screenFilters: "Filtros",
    screenBuy: "Comprar",
    screenPromotions: "Promoções",
    screenUpToOff: "Até 40% OFF",
    screenSeeAll: "Ver Tudo",
    screenOff: "OFF",
    
    // Screen Salon
    screenNextAvailableSlot: "Próximo horário livre",
    screenToday: "Hoje",
    screenTomorrow: "Amanhã",
    screenSaturday: "Sábado",
    screenSchedule: "Agendar",
    screenOurProfessionals: "Nossos Profissionais",
    screenChooseSpecialist: "Escolha seu especialista favorito",
    screenUnavailable: "Indisponível",
    screenRecentReviews: "Avaliações Recentes",
    screenExcellentService: '"Atendimento excelente! ⭐⭐⭐⭐⭐"',
    screenHappyClient: "- Cliente satisfeito",
    screenCut: "Corte",
    screenColoration: "Coloração",
    screenBlowdry: "Escova",
    
    // Screen Real Estate
    screenSearchProperty: "Buscar imóvel...",
    screenQuickFilters: "Filtros rápidos",
    screenSale: "Venda",
    screenRent: "Aluguel",
    screenView: "Ver",
    screenScheduleVisit: "Agendar visita",
    screenContactAgent: "Contatar Agente",
    screenSearchByCity: "Buscar por cidade...",
    screenModernApartment: "Apartamento Moderno",
    screenHouseWithGarden: "Casa com Jardim",
    screenRenovatedStudio: "Studio Renovado",
    screenCentral: "Centro",
    screenSuburb: "Subúrbio",
    screenHistoric: "Zona Histórica",
    screenRooms: "quartos",
    screenProperty: "Apartamento Central",
    screenLisbon: "Lisboa",
    screenPorto: "Porto",
    screenFaro: "Faro",
    screenTalkToBroker: "Falar com o corretor",
    screenModernApartmentDesc: "Apartamento moderno com 2 quartos, varanda ampla e vista para o rio. Localizado próximo ao metrô e áreas comerciais.",
  },
  en: {
    // Header/Navigation
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navExamples: "Examples",
    navAbout: "About",
    navContact: "Contact",
    navCTA: "Get In Touch",
    
    // Hero Section
    heroTitle: "Custom Apps for Your Business",
    heroSubtitle: "I develop tailor-made mobile apps for restaurants, real estate agencies, beauty salons, and more. Transform your business into a modern and functional app.",
    heroCTA: "Get Started",
    
    // How It Works
    howItWorksTitle: "How It Works",
    step1Title: "Quick briefing",
    step1Desc: "You tell me what type of app you need and what features it should have. Together we define the main objectives and the project style.",
    step2Title: "Custom design",
    step2Desc: "I create a modern and custom design that matches your brand identity. You receive previews and can give feedback before development begins.",
    step3Title: "Complete development",
    step3Desc: "I program the complete app — with admin panel, ordering system or customer management. Everything is tested and optimized for best performance.",
    step4Title: "Launch and support",
    step4Desc: "I handle publishing to app stores and support you in the initial phase. I offer training and support so you can manage your app with confidence.",
    
    // App Types
    appTypesTitle: "App Types",
    appTypeRestaurants: "Restaurants & Fast Food",
    appTypeRestaurantsDesc: "Digital menus, online ordering, table reservations, and push notifications for special offers. Your restaurant, right on your customers' smartphones.",
    appTypeRealEstate: "Real Estate",
    appTypeRealEstateDesc: "Apps for agencies with property management, map integration, and direct contact options. Showcase properties professionally and make them easily accessible, mobile and modern.",
    appTypeSalon: "Hair & Beauty Salons",
    appTypeSalonDesc: "Appointment booking, loyalty programs, and product sales in a stylish app. More bookings, more loyal customers, with your own beauty tool.",
    appTypeStore: "Online Shops (Fashion, Jewelry, etc.)",
    appTypeStoreDesc: "E-commerce apps with shopping cart, payment integration, and promotional push messages. Sell around the clock, independent from platforms or high fees.",
    appTypeITSupport: "IT Support & Technical Assistance",
    appTypeITSupportDesc: "Apps for technical assistance with visit scheduling, equipment tracking, digital quotes, and remote support. Professionalism and trust for your clients.",
    
    // Benefits
    benefitsTitle: "Why Have an App?",
    benefit1Title: "Constant presence",
    benefit1Desc: "Your business on the customer's phone, one tap away.",
    benefit2Title: "More sales and loyalty",
    benefit2Desc: "Push notifications, promotions, and direct orders without fees.",
    benefit3Title: "Platform independence",
    benefit3Desc: "Free yourself from dependence on social networks and third-party apps.",
    
    // Portfolio
    portfolioTitle: "See Your App's Potential",
    portfolioSubtitle: "Functional mockups (in code) showing the real mobile experience.",
    portfolioDesc: "Modern, fluid UI designed for conversion.",
    portfolioDelivery: "Delivery & Restaurants",
    portfolioStore: "Stores & E-commerce",
    portfolioSalon: "Salons & Clinics",
    portfolioRealEstate: "Real Estate",
    
    // Pricing
    pricingTitle: "Investment",
    pricingSubtitle: "Plans adapted to your business size",
    planStarter: "Starter",
    planPro: "Pro",
    planPremium: "Premium",
    planStarterDesc: "Simple app with standard design and basic panel.",
    planProDesc: "Complete app with custom design and premium support.",
    planPremiumDesc: "Complete solution with online store, integrations and follow-up.",
    featureStandardDesign: "Standard design",
    featureOrderPanel: "Order panel",
    featureInitialSupport: "Initial support",
    featureCustomDesign: "Custom design",
    featureFullPanel: "Full panel",
    featurePushNotifications: "Push notifications",
    featureSupport30Days: "30 days support",
    featureAppStore: "App + Online Store",
    featureExternalIntegrations: "External integrations",
    featureExclusiveDesign: "Exclusive design",
    featureSupport60Days: "60 days support",
    pricingButton: "Request quote",
    
    // Testimonials
    testimonialsTitle: "Testimonials",
    
    // About
    aboutTitle: "About Me",
    aboutDesc: "I'm <strong>Jefferson Vieira</strong>, a fullstack developer passionate about technology and design. I create tailor-made apps for small businesses, helping local entrepreneurs sell more, retain customers, and stand out online.",
    
    // CTA
    ctaTitle: "Ready to Grow?",
    ctaSubtitle: "Let's talk about your project",
    ctaButton: "Request Quote",
    
    // Footer
    footerRights: "All rights reserved",
    
    // Contact Modal
    contactTitle: "Send email",
    contactDesc: "Fill out the form and I'll get back to you as soon as possible.",
    contactName: "Your name",
    contactEmail: "Your email",
    contactMessage: "Write your message...",
    contactSend: "Send message",
    contactSending: "Sending...",
    contactSuccess: "Message sent successfully! I'll get in touch soon.",
    
    // Real Estate Page
    realEstateTitle: "Real Estate App",
    realEstateSubtitle: "Complete mobile application for real estate agencies with AI-powered recommendations, financial simulators, intelligent maps, and comprehensive property management tools.",
    realEstateFeaturesTitle: "Complete Feature Set",
    realEstateFeaturesSubtitle: "Everything you need to manage properties, engage clients, and close deals faster",
    realEstateFeature1Title: "Complete Property Catalog",
    realEstateFeature1Desc: "Professional photos, 360° tours, floor plans, videos, and complete descriptions with advanced filters",
    realEstateFeature1H1: "Professional photos",
    realEstateFeature1H2: "360° Virtual Tours",
    realEstateFeature1H3: "Floor plans",
    realEstateFeature1H4: "Property videos",
    realEstateFeature1H5: "Advanced filters",
    realEstateFeature2Title: "Intelligent Map",
    realEstateFeature2Desc: "Google Maps integration with property display, distance calculation, and Location Score (0-100)",
    realEstateFeature2H1: "Property display on map",
    realEstateFeature2H2: "Distance to key points",
    realEstateFeature2H3: "Location Score AI",
    realEstateFeature2H4: "Zone filtering",
    realEstateFeature3Title: "AI Recommendations",
    realEstateFeature3Desc: "Personalized property suggestions based on viewing history, price range, and preferences",
    realEstateFeature3H1: "Behavior analysis",
    realEstateFeature3H2: "Similar properties",
    realEstateFeature3H3: "Price range matching",
    realEstateFeature3H4: "Area preferences",
    realEstateFeature4Title: "Financial Simulators",
    realEstateFeature4Desc: "Mortgage calculator and rental yield simulator for informed investment decisions",
    realEstateFeature4H1: "Mortgage calculator",
    realEstateFeature4H2: "Rental yield (ROI)",
    realEstateFeature4H3: "Payback analysis",
    realEstateFeature4H4: "Cashflow projection",
    realEstateFeature5Title: "Smart Alerts",
    realEstateFeature5Desc: "Notifications for new properties, price drops, and similar listings in your area",
    realEstateFeature5H1: "New property alerts",
    realEstateFeature5H2: "Price drop notifications",
    realEstateFeature5H3: "Similar property matches",
    realEstateFeature5H4: "Promotions",
    realEstateFeature6Title: "Client Area",
    realEstateFeature6Desc: "Favorites, saved comparisons, visit history, documents, and proposals",
    realEstateFeature6H1: "Favorite properties",
    realEstateFeature6H2: "Property comparisons",
    realEstateFeature6H3: "Visit history",
    realEstateFeature6H4: "Document storage",
    realEstateFeature7Title: "Visit Scheduling",
    realEstateFeature7Desc: "Direct appointment booking with automatic agent notification and route to property",
    realEstateFeature7H1: "Direct booking",
    realEstateFeature7H2: "Agent notification",
    realEstateFeature7H3: "Route to property",
    realEstateFeature7H4: "Live video tours",
    realEstateFeature8Title: "Admin Panel",
    realEstateFeature8Desc: "Complete CRM with property management, client tracking, and sales funnel",
    realEstateFeature8H1: "Property management",
    realEstateFeature8H2: "Client CRM",
    realEstateFeature8H3: "Sales funnel",
    realEstateFeature8H4: "Statistics & reports",
    realEstateCatalogTitle: "Complete Property Catalog",
    realEstateCatalogDesc: "Each property includes professional photos, 360° virtual tours, floor plans, videos, and complete descriptions. Advanced filters help clients find exactly what they're looking for.",
    realEstateCatalogItem1: "Professional photos and videos",
    realEstateCatalogItem2: "360° Virtual Reality tours",
    realEstateCatalogItem3: "Interactive floor plans",
    realEstateCatalogItem4: "Price, condominium fees, property tax",
    realEstateCatalogItem5: "Status tracking (available/reserved/sold)",
    realEstateCatalogItem6: "Compare up to 3 properties simultaneously",
    realEstateFiltersTitle: "Advanced Filters",
    realEstateMapTitle: "Intelligent Map System",
    realEstateMapDesc: "Google Maps integration with property display, distance calculation to key points, and AI-powered Location Score for investment analysis.",
    realEstateMapItem1: "Property display on interactive map",
    realEstateMapItem2: "Distance to schools, hospitals, transport",
    realEstateMapItem3: "Location Score AI (0-100 rating)",
    realEstateMapItem4: "Zone-based filtering",
    realEstateMapItem5: "Investment analysis tools",
    realEstateLocationScore: "Location Score (0-100)",
    realEstateLocationTransport: "Transportation",
    realEstateLocationSecurity: "Security",
    realEstateLocationCommerce: "Commerce",
    realEstateLocationLeisure: "Leisure",
    realEstateAITitle: "AI-Powered Recommendations",
    realEstateAIDesc: "Machine learning analyzes client behavior to suggest properties that match their preferences, viewing history, and budget.",
    realEstateAIItem1: "Behavior analysis and pattern recognition",
    realEstateAIItem2: "Properties matching your profile",
    realEstateAIItem3: "Similar to properties you viewed",
    realEstateAIItem4: "New listings in your price range",
    realEstateAIItem5: "Personalized weekly recommendations",
    realEstatePremiumTitle: "Premium Modules",
    realEstatePremiumSubtitle: "Optional advanced features available as add-ons",
    realEstatePremium1Title: "Predictive Price AI",
    realEstatePremium1Desc: "Property price estimation based on region and historical data",
    realEstatePremium2Title: "AR - Augmented Reality",
    realEstatePremium2Desc: "Visualize furniture and decor in properties using AR technology",
    realEstatePremium3Title: "Live Properties",
    realEstatePremium3Desc: "Real-time guided property tours for international clients",
    realEstatePremium4Title: "Automatic Property Evaluation",
    realEstatePremium4Desc: "Price estimation, average value per m², and market demand analysis",
    realEstateCTATitle: "Ready to Transform Your Real Estate Business?",
    realEstateCTADesc: "Get a complete mobile app solution with all features included. Contact us to discuss your specific needs.",
    realEstateCTAButton1: "Request a Quote",
    realEstateCTAButton2: "Schedule a Demo",
    
    // Screen Restaurant
    screenDeliveryTime: "Delivery in ~ 25 min • Shipping: €1.90",
    screenHighlights: "Highlights",
    screenAdd: "Add",
    screenAddToCart: "Add to Cart",
    screenCouponOfDay: "Coupon of the day",
    screenUse: "Use",
    screenRestaurantRated: "⭐ Restaurant rated 4.9 • Free shipping over €20",
    screenMostOrdered: "Most Ordered",
    screenFreeShipping: "Free Shipping!",
    screenAddMoreForFreeShipping: "Add €5.10 more to get free shipping",
    
    // Screen Store
    screenSearch: "Search...",
    screenFilters: "Filters",
    screenBuy: "Buy",
    screenPromotions: "Promotions",
    screenUpToOff: "Up to 40% OFF",
    screenSeeAll: "See All",
    screenOff: "OFF",
    
    // Screen Salon
    screenNextAvailableSlot: "Next available slot",
    screenToday: "Today",
    screenTomorrow: "Tomorrow",
    screenSaturday: "Saturday",
    screenSchedule: "Schedule",
    screenOurProfessionals: "Our Professionals",
    screenChooseSpecialist: "Choose your favorite specialist",
    screenUnavailable: "Unavailable",
    screenRecentReviews: "Recent Reviews",
    screenExcellentService: '"Excellent service! ⭐⭐⭐⭐⭐"',
    screenHappyClient: "- Satisfied client",
    screenCut: "Cut",
    screenColoration: "Coloration",
    screenBlowdry: "Blowdry",
    
    // Screen Real Estate
    screenSearchProperty: "Search property...",
    screenQuickFilters: "Quick filters",
    screenSale: "Sale",
    screenRent: "Rent",
    screenView: "View",
    screenScheduleVisit: "Schedule visit",
    screenContactAgent: "Contact Agent",
    screenSearchByCity: "Search by city...",
    screenModernApartment: "Modern Apartment",
    screenHouseWithGarden: "House with Garden",
    screenRenovatedStudio: "Renovated Studio",
    screenCentral: "Central",
    screenSuburb: "Suburb",
    screenHistoric: "Historic Area",
    screenRooms: "rooms",
    screenProperty: "Central Apartment",
    screenLisbon: "Lisbon",
    screenPorto: "Porto",
    screenFaro: "Faro",
    screenTalkToBroker: "Talk to broker",
    screenModernApartmentDesc: "Modern apartment with 2 bedrooms, spacious balcony and river view. Located near metro and commercial areas.",
  },
  de: {
    // Header/Navigation
    navHome: "Startseite",
    navServices: "Dienstleistungen",
    navPortfolio: "Portfolio",
    navExamples: "Beispiele",
    navAbout: "Über mich",
    navContact: "Kontakt",
    navCTA: "Kontakt aufnehmen",
    
    // Hero Section
    heroTitle: "Maßgeschneiderte Apps für Ihr Unternehmen",
    heroSubtitle: "Ich entwickle maßgeschneiderte mobile Apps für Restaurants, Immobilienagenturen, Schönheitssalons und mehr. Verwandeln Sie Ihr Unternehmen in eine moderne und funktionale App.",
    heroCTA: "Jetzt starten",
    
    // How It Works
    howItWorksTitle: "Wie es funktioniert",
    step1Title: "Schnelles Briefing",
    step1Desc: "Sie sagen mir, welche Art von App Sie benötigen und welche Funktionen sie haben sollte. Zusammen definieren wir die Hauptziele und den Projektstil.",
    step2Title: "Maßgeschneiderte Gestaltung",
    step2Desc: "Ich erstelle ein modernes und individuelles Design, das zur Identität Ihrer Marke passt. Sie erhalten Vorschauen und können Feedback geben, bevor die Entwicklung beginnt.",
    step3Title: "Vollständige Entwicklung",
    step3Desc: "Ich programmiere die vollständige App — mit Admin-Panel, Bestellsystem oder Kundenverwaltung. Alles wird getestet und für beste Leistung optimiert.",
    step4Title: "Veröffentlichung und Support",
    step4Desc: "Ich kümmere mich um die Veröffentlichung in den App-Stores und begleite Sie in der Anfangsphase. Ich biete Schulungen und Support, damit Sie Ihre App sicher verwalten können.",
    
    // App Types
    appTypesTitle: "App-Typen",
    appTypeRestaurants: "Restaurants & Fast Food",
    appTypeRestaurantsDesc: "Digitale Menüs, Online-Bestellung, Tischreservierungen und Push-Benachrichtigungen für Sonderangebote. Ihr Restaurant direkt auf den Smartphones Ihrer Kunden.",
    appTypeRealEstate: "Immobilien",
    appTypeRealEstateDesc: "Apps für Immobilienagenturen mit Immobilienverwaltung, Kartenintegration und direkten Kontaktmöglichkeiten. Präsentieren Sie Immobilien professionell und machen Sie sie leicht zugänglich, mobil und modern.",
    appTypeSalon: "Friseur- und Beauty-Salons",
    appTypeSalonDesc: "Terminbuchung, Treueprogramme und Produktverkauf in einem stilvollen App. Mehr Buchungen, mehr treue Kunden mit Ihrem eigenen Beauty-Tool.",
    appTypeStore: "Online-Shops (Mode, Schmuck, etc.)",
    appTypeStoreDesc: "E-Commerce-Apps mit Warenkorb, Zahlungsintegration und Werbe-Push-Nachrichten. Verkaufen Sie rund um die Uhr, unabhängig von Plattformen oder hohen Gebühren.",
    appTypeITSupport: "IT-Support & Technischer Service",
    appTypeITSupportDesc: "Apps für technischen Service mit Terminvereinbarung, Geräteverfolgung, digitalen Kostenvoranschlägen und Fernsupport. Professionalität und Vertrauen für Ihre Kunden.",
    
    // Benefits
    benefitsTitle: "Warum eine App?",
    benefit1Title: "Ständige Präsenz",
    benefit1Desc: "Ihr Unternehmen auf dem Handy des Kunden, nur einen Tipp entfernt.",
    benefit2Title: "Mehr Verkäufe und Loyalität",
    benefit2Desc: "Push-Benachrichtigungen, Aktionen und direkte Bestellungen ohne Gebühren.",
    benefit3Title: "Plattformunabhängigkeit",
    benefit3Desc: "Befreien Sie sich von der Abhängigkeit von Social-Media-Plattformen und Apps Dritter.",
    
    // Portfolio
    portfolioTitle: "Sehen Sie das Potenzial Ihrer App",
    portfolioSubtitle: "Funktionale Mockups (im Code), die die echte mobile Erfahrung zeigen.",
    portfolioDesc: "Moderne, flüssige Benutzeroberfläche, die für Conversion optimiert ist.",
    portfolioDelivery: "Lieferung & Restaurants",
    portfolioStore: "Läden & E-Commerce",
    portfolioSalon: "Salons & Kliniken",
    portfolioRealEstate: "Immobilien",
    
    // Pricing
    pricingTitle: "Investition",
    pricingSubtitle: "Pläne, die an die Größe Ihres Unternehmens angepasst sind",
    planStarter: "Starter",
    planPro: "Pro",
    planPremium: "Premium",
    planStarterDesc: "Einfache App mit Standard-Design und Basis-Panel.",
    planProDesc: "Vollständige App mit individuellem Design und Premium-Support.",
    planPremiumDesc: "Vollständige Lösung mit Online-Shop, Integrationen und Betreuung.",
    featureStandardDesign: "Standard-Design",
    featureOrderPanel: "Bestellpanel",
    featureInitialSupport: "Erstunterstützung",
    featureCustomDesign: "Individuelles Design",
    featureFullPanel: "Vollständiges Panel",
    featurePushNotifications: "Push-Benachrichtigungen",
    featureSupport30Days: "30 Tage Support",
    featureAppStore: "App + Online-Shop",
    featureExternalIntegrations: "Externe Integrationen",
    featureExclusiveDesign: "Exklusives Design",
    featureSupport60Days: "60 Tage Support",
    pricingButton: "Angebot anfordern",
    
    // Testimonials
    testimonialsTitle: "Referenzen",
    
    // About
    aboutTitle: "Über mich",
    aboutDesc: "Ich bin <strong>Jefferson Vieira</strong>, ein Fullstack-Entwickler, der sich für Technologie und Design begeistert. Ich erstelle maßgeschneiderte Apps für kleine Unternehmen und helfe lokalen Unternehmern dabei, mehr zu verkaufen, Kunden zu binden und online aufzufallen.",
    
    // CTA
    ctaTitle: "Bereit zu wachsen?",
    ctaSubtitle: "Lassen Sie uns über Ihr Projekt sprechen",
    ctaButton: "Angebot anfordern",
    
    // Footer
    footerRights: "Alle Rechte vorbehalten",
    
    // Contact Modal
    contactTitle: "E-Mail senden",
    contactDesc: "Füllen Sie das Formular aus und ich werde mich so schnell wie möglich bei Ihnen melden.",
    contactName: "Ihr Name",
    contactEmail: "Ihre E-Mail",
    contactMessage: "Schreiben Sie Ihre Nachricht...",
    contactSend: "Nachricht senden",
    contactSending: "Wird gesendet...",
    contactSuccess: "Nachricht erfolgreich gesendet! Ich werde mich bald bei Ihnen melden.",
    
    // Real Estate Page
    realEstateTitle: "Immobilien-App",
    realEstateSubtitle: "Vollständige mobile Anwendung für Immobilienagenturen mit KI-gestützten Empfehlungen, Finanzsimulatoren, intelligenten Karten und umfassenden Immobilienverwaltungstools.",
    realEstateFeaturesTitle: "Vollständiger Funktionsumfang",
    realEstateFeaturesSubtitle: "Alles, was Sie brauchen, um Immobilien zu verwalten, Kunden zu binden und Geschäfte schneller abzuschließen",
    realEstateFeature1Title: "Vollständiger Immobilienkatalog",
    realEstateFeature1Desc: "Professionelle Fotos, 360°-Touren, Grundrisse, Videos und vollständige Beschreibungen mit erweiterten Filtern",
    realEstateFeature1H1: "Professionelle Fotos",
    realEstateFeature1H2: "360° Virtual Tours",
    realEstateFeature1H3: "Grundrisse",
    realEstateFeature1H4: "Immobilienvideos",
    realEstateFeature1H5: "Erweiterte Filter",
    realEstateFeature2Title: "Intelligente Karte",
    realEstateFeature2Desc: "Google Maps Integration mit Immobiliendarstellung, Entfernungsberechnung und Standortbewertung (0-100)",
    realEstateFeature2H1: "Immobiliendarstellung auf Karte",
    realEstateFeature2H2: "Entfernung zu wichtigen Punkten",
    realEstateFeature2H3: "Standortbewertung KI",
    realEstateFeature2H4: "Zonenfilterung",
    realEstateFeature3Title: "KI-Empfehlungen",
    realEstateFeature3Desc: "Personalisierte Immobilienvorschläge basierend auf Anzeigeverlauf, Preisbereich und Präferenzen",
    realEstateFeature3H1: "Verhaltensanalyse",
    realEstateFeature3H2: "Ähnliche Immobilien",
    realEstateFeature3H3: "Preisbereich-Abgleich",
    realEstateFeature3H4: "Gebietspräferenzen",
    realEstateFeature4Title: "Finanzsimulatoren",
    realEstateFeature4Desc: "Hypothekenrechner und Mietrendite-Simulator für fundierte Investitionsentscheidungen",
    realEstateFeature4H1: "Hypothekenrechner",
    realEstateFeature4H2: "Mietrendite (ROI)",
    realEstateFeature4H3: "Amortisationsanalyse",
    realEstateFeature4H4: "Cashflow-Prognose",
    realEstateFeature5Title: "Intelligente Benachrichtigungen",
    realEstateFeature5Desc: "Benachrichtigungen für neue Immobilien, Preisrückgänge und ähnliche Angebote in Ihrer Region",
    realEstateFeature5H1: "Neue Immobilienbenachrichtigungen",
    realEstateFeature5H2: "Preisrückgang-Benachrichtigungen",
    realEstateFeature5H3: "Ähnliche Immobilienübereinstimmungen",
    realEstateFeature5H4: "Aktionen",
    realEstateFeature6Title: "Kundenbereich",
    realEstateFeature6Desc: "Favoriten, gespeicherte Vergleiche, Besichtigungshistorie, Dokumente und Angebote",
    realEstateFeature6H1: "Lieblingsimmobilien",
    realEstateFeature6H2: "Immobilienvergleiche",
    realEstateFeature6H3: "Besichtigungshistorie",
    realEstateFeature6H4: "Dokumentenspeicherung",
    realEstateFeature7Title: "Besichtigungsterminvereinbarung",
    realEstateFeature7Desc: "Direkte Terminbuchung mit automatischer Agentenbenachrichtigung und Route zur Immobilie",
    realEstateFeature7H1: "Direkte Buchung",
    realEstateFeature7H2: "Agentenbenachrichtigung",
    realEstateFeature7H3: "Route zur Immobilie",
    realEstateFeature7H4: "Live-Video-Touren",
    realEstateFeature8Title: "Admin-Panel",
    realEstateFeature8Desc: "Vollständiges CRM mit Immobilienverwaltung, Kundenverfolgung und Verkaufstrichter",
    realEstateFeature8H1: "Immobilienverwaltung",
    realEstateFeature8H2: "Kunden-CRM",
    realEstateFeature8H3: "Verkaufstrichter",
    realEstateFeature8H4: "Statistiken & Berichte",
    realEstateCatalogTitle: "Vollständiger Immobilienkatalog",
    realEstateCatalogDesc: "Jede Immobilie umfasst professionelle Fotos, 360°-Virtuelle Touren, Grundrisse, Videos und vollständige Beschreibungen. Erweiterte Filter helfen Kunden, genau das zu finden, wonach sie suchen.",
    realEstateCatalogItem1: "Professionelle Fotos und Videos",
    realEstateCatalogItem2: "360° Virtual Reality Touren",
    realEstateCatalogItem3: "Interaktive Grundrisse",
    realEstateCatalogItem4: "Preis, Hausgeld, Grundsteuer",
    realEstateCatalogItem5: "Statusverfolgung (verfügbar/reserviert/verkauft)",
    realEstateCatalogItem6: "Bis zu 3 Immobilien gleichzeitig vergleichen",
    realEstateFiltersTitle: "Erweiterte Filter",
    realEstateMapTitle: "Intelligentes Kartensystem",
    realEstateMapDesc: "Google Maps Integration mit Immobiliendarstellung, Entfernungsberechnung zu wichtigen Punkten und KI-gestützter Standortbewertung für Investitionsanalyse.",
    realEstateMapItem1: "Immobiliendarstellung auf interaktiver Karte",
    realEstateMapItem2: "Entfernung zu Schulen, Krankenhäusern, Verkehr",
    realEstateMapItem3: "Standortbewertung KI (0-100 Bewertung)",
    realEstateMapItem4: "Zonenbasierte Filterung",
    realEstateMapItem5: "Investitionsanalyse-Tools",
    realEstateLocationScore: "Standortbewertung (0-100)",
    realEstateLocationTransport: "Verkehr",
    realEstateLocationSecurity: "Sicherheit",
    realEstateLocationCommerce: "Handel",
    realEstateLocationLeisure: "Freizeit",
    realEstateAITitle: "KI-gestützte Empfehlungen",
    realEstateAIDesc: "Maschinelles Lernen analysiert das Kundenverhalten, um Immobilien vorzuschlagen, die zu ihren Präferenzen, Anzeigeverlauf und Budget passen.",
    realEstateAIItem1: "Verhaltensanalyse und Mustererkennung",
    realEstateAIItem2: "Immobilien, die zu Ihrem Profil passen",
    realEstateAIItem3: "Ähnlich wie die Immobilien, die Sie angesehen haben",
    realEstateAIItem4: "Neue Angebote in Ihrem Preisbereich",
    realEstateAIItem5: "Personalisierte wöchentliche Empfehlungen",
    realEstatePremiumTitle: "Premium-Module",
    realEstatePremiumSubtitle: "Optionale erweiterte Funktionen als Add-ons verfügbar",
    realEstatePremium1Title: "Vorhersagende Preis-KI",
    realEstatePremium1Desc: "Immobilienpreisschätzung basierend auf Region und historischen Daten",
    realEstatePremium2Title: "AR - Augmented Reality",
    realEstatePremium2Desc: "Visualisieren Sie Möbel und Dekoration in Immobilien mit AR-Technologie",
    realEstatePremium3Title: "Live-Immobilien",
    realEstatePremium3Desc: "Echtzeit-geführte Immobilientouren für internationale Kunden",
    realEstatePremium4Title: "Automatische Immobilienbewertung",
    realEstatePremium4Desc: "Preisschätzung, Durchschnittswert pro m² und Marktnachfrageanalyse",
    realEstateCTATitle: "Bereit, Ihr Immobiliengeschäft zu transformieren?",
    realEstateCTADesc: "Erhalten Sie eine vollständige Mobile-App-Lösung mit allen Funktionen. Kontaktieren Sie uns, um Ihre spezifischen Anforderungen zu besprechen.",
    realEstateCTAButton1: "Angebot anfordern",
    realEstateCTAButton2: "Demo vereinbaren",
    
    // Screen Restaurant
    screenDeliveryTime: "Lieferung in ~ 25 Min • Versand: €1,90",
    screenHighlights: "Highlights",
    screenAdd: "Hinzufügen",
    screenAddToCart: "In den Warenkorb",
    screenCouponOfDay: "Gutschein des Tages",
    screenUse: "Verwenden",
    screenRestaurantRated: "⭐ Restaurant bewertet 4.9 • Versandkostenfrei ab €20",
    screenMostOrdered: "Meist bestellt",
    screenFreeShipping: "Kostenloser Versand!",
    screenAddMoreForFreeShipping: "Fügen Sie €5,10 hinzu für kostenlosen Versand",
    
    // Screen Store
    screenSearch: "Suchen...",
    screenFilters: "Filter",
    screenBuy: "Kaufen",
    screenPromotions: "Aktionen",
    screenUpToOff: "Bis zu 40% RABATT",
    screenSeeAll: "Alle anzeigen",
    screenOff: "RABATT",
    
    // Screen Salon
    screenNextAvailableSlot: "Nächster freier Termin",
    screenToday: "Heute",
    screenTomorrow: "Morgen",
    screenSaturday: "Samstag",
    screenSchedule: "Termin buchen",
    screenOurProfessionals: "Unsere Fachkräfte",
    screenChooseSpecialist: "Wählen Sie Ihren Lieblingsfachmann",
    screenUnavailable: "Nicht verfügbar",
    screenRecentReviews: "Letzte Bewertungen",
    screenExcellentService: '"Ausgezeichneter Service! ⭐⭐⭐⭐⭐"',
    screenHappyClient: "- Zufriedener Kunde",
    screenCut: "Haarschnitt",
    screenColoration: "Färbung",
    screenBlowdry: "Föhnen",
    
    // Screen Real Estate
    screenSearchProperty: "Immobilie suchen...",
    screenQuickFilters: "Schnellfilter",
    screenSale: "Verkauf",
    screenRent: "Miete",
    screenView: "Ansehen",
    screenScheduleVisit: "Besichtigung vereinbaren",
    screenContactAgent: "Agent kontaktieren",
    screenSearchByCity: "Nach Stadt suchen...",
    screenModernApartment: "Modernes Apartment",
    screenHouseWithGarden: "Haus mit Garten",
    screenRenovatedStudio: "Renoviertes Studio",
    screenCentral: "Zentrum",
    screenSuburb: "Vorort",
    screenHistoric: "Historisches Viertel",
    screenRooms: "Zimmer",
    screenProperty: "Zentrales Apartment",
    screenLisbon: "Lissabon",
    screenPorto: "Porto",
    screenFaro: "Faro",
    screenTalkToBroker: "Mit Makler sprechen",
    screenModernApartmentDesc: "Modernes Apartment mit 2 Schlafzimmern, geräumigem Balkon und Flussblick. In der Nähe von U-Bahn und Geschäften gelegen.",
  },
};

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load language from localStorage or browser preference
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && ["pt", "en", "de"].includes(savedLang)) {
        setLanguageState(savedLang);
      } else {
        // Detect browser language
        const browserLang = navigator.language.split("-")[0];
        if (browserLang === "en" || browserLang === "de") {
          setLanguageState(browserLang);
        }
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

