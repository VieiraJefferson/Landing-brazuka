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

  useEffect(() => {
    // Load language from localStorage or browser preference
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
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
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

