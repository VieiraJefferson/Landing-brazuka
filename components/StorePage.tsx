"use client";
import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  ShoppingCart, 
  CreditCard, 
  Package, 
  User, 
  Gift, 
  Bell, 
  Search,
  Heart,
  Star,
  BarChart3,
  Truck,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Brain,
  Camera,
  Filter,
  Layers,
  Image,
  FileText,
  Award,
  Zap,
  Users,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";

export default function StorePage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: ShoppingBag,
      titleKey: "storeFeature1Title",
      descKey: "storeFeature1Desc",
      highlights: ["storeFeature1H1", "storeFeature1H2", "storeFeature1H3", "storeFeature1H4", "storeFeature1H5", "storeFeature1H6", "storeFeature1H7", "storeFeature1H8", "storeFeature1H9"]
    },
    {
      icon: ShoppingCart,
      titleKey: "storeFeature2Title",
      descKey: "storeFeature2Desc",
      highlights: ["storeFeature2H1", "storeFeature2H2", "storeFeature2H3", "storeFeature2H4", "storeFeature2H5"]
    },
    {
      icon: CreditCard,
      titleKey: "storeFeature3Title",
      descKey: "storeFeature3Desc",
      highlights: ["storeFeature3H1", "storeFeature3H2", "storeFeature3H3", "storeFeature3H4"]
    },
    {
      icon: Package,
      titleKey: "storeFeature4Title",
      descKey: "storeFeature4Desc",
      highlights: ["storeFeature4H1", "storeFeature4H2", "storeFeature4H3", "storeFeature4H4"]
    },
    {
      icon: User,
      titleKey: "storeFeature5Title",
      descKey: "storeFeature5Desc",
      highlights: ["storeFeature5H1", "storeFeature5H2", "storeFeature5H3", "storeFeature5H4", "storeFeature5H5", "storeFeature5H6"]
    },
    {
      icon: Gift,
      titleKey: "storeFeature6Title",
      descKey: "storeFeature6Desc",
      highlights: ["storeFeature6H1", "storeFeature6H2", "storeFeature6H3", "storeFeature6H4", "storeFeature6H5"]
    },
    {
      icon: Bell,
      titleKey: "storeFeature7Title",
      descKey: "storeFeature7Desc",
      highlights: ["storeFeature7H1", "storeFeature7H2", "storeFeature7H3", "storeFeature7H4"]
    },
    {
      icon: Search,
      titleKey: "storeFeature8Title",
      descKey: "storeFeature8Desc",
      highlights: ["storeFeature8H1", "storeFeature8H2", "storeFeature8H3"]
    }
  ];

  const premiumFeatures = [
    {
      icon: Brain,
      titleKey: "storePremium1Title",
      descKey: "storePremium1Desc"
    },
    {
      icon: Camera,
      titleKey: "storePremium2Title",
      descKey: "storePremium2Desc"
    },
    {
      icon: TrendingUp,
      titleKey: "storePremium3Title",
      descKey: "storePremium3Desc"
    },
    {
      icon: Layers,
      titleKey: "storePremium4Title",
      descKey: "storePremium4Desc"
    }
  ];

  return (
    <main className="bg-[#151513] text-[#FDFDFD] overflow-x-hidden w-full max-w-full">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 px-6 overflow-hidden min-h-[500px] flex items-center"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dpilz4p6g/image/upload/v1763661237/ChatGPT_Image_20_11_2025_17_52_59_ipa2qd.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-[#151513]/80 z-0" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center relative z-10 w-full"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t("storeTitle")}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("storeSubtitle")}
          </p>
        </motion.div>
      </section>

      {/* Main Features Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">{t("storeFeaturesTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("storeFeaturesSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-[#151513] border-[#2a2a2a] h-full hover:border-[#B60238]/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-[#B60238] mb-2">{t(feature.titleKey)}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {t(feature.descKey)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.highlights.map((highlightKey, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-[#B60238] flex-shrink-0" />
                            <span>{t(highlightKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Features Sections */}
      <section className="py-24 px-6 bg-[#151513]">
        <div className="max-w-7xl mx-auto">
          {/* Product Catalog */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-[#B60238]" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("storeCatalogTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("storeCatalogDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "storeCatalogItem1",
                    "storeCatalogItem2",
                    "storeCatalogItem3",
                    "storeCatalogItem4",
                    "storeCatalogItem5",
                    "storeCatalogItem6"
                  ].map((itemKey, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B60238] flex-shrink-0" />
                      <span className="text-gray-300">{t(itemKey)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-[#2a2a2a]">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Filter className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("storeFiltersTitle")}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Tamanho", "Cor", "Material", "Preço", "Popularidade", "Categoria"].map((filter) => (
                      <Badge key={filter} variant="outline" className="border-[#2a2a2a] text-gray-300">
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Search */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-[#0a0a0a] rounded-2xl p-8 border border-[#2a2a2a]">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <Brain className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("storeAISearchTitle")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-[#B60238]" />
                      <span>{t("storeAISearchItem1")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera className="w-4 h-4 text-[#B60238]" />
                      <span>{t("storeAISearchItem2")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B60238]" />
                      <span>{t("storeAISearchItem3")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center">
                    <Search className="w-6 h-6 text-[#B60238]" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("storeAITitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("storeAIDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "storeAIItem1",
                    "storeAIItem2",
                    "storeAIItem3",
                    "storeAIItem4"
                  ].map((itemKey, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B60238] flex-shrink-0" />
                      <span className="text-gray-300">{t(itemKey)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Loyalty Program */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-[#B60238]" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("storeLoyaltyTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("storeLoyaltyDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "storeLoyaltyItem1",
                    "storeLoyaltyItem2",
                    "storeLoyaltyItem3",
                    "storeLoyaltyItem4",
                    "storeLoyaltyItem5"
                  ].map((itemKey, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B60238] flex-shrink-0" />
                      <span className="text-gray-300">{t(itemKey)}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-[#2a2a2a]">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("storeLoyaltyLevels")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Bronze</span>
                      <Badge className="bg-amber-600">5% Cashback</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Prata</span>
                      <Badge className="bg-gray-400">10% Cashback</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Ouro</span>
                      <Badge className="bg-yellow-500">15% Cashback</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-[#B60238] text-white mb-4">{t("storePremiumTitle")}</Badge>
            <h2 className="text-4xl font-bold mb-4">{t("storePremiumTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("storePremiumSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-[#151513] border-[#2a2a2a] hover:border-[#B60238]/50 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-[#B60238] mb-2">{t(feature.titleKey)}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {t(feature.descKey)}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#151513]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">{t("storeCTATitle")}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("storeCTADesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#B60238] hover:bg-[#9a0229] text-white text-lg px-8 py-6 rounded-xl"
              >
                {t("storeCTAButton1")}
              </Button>
              <Button
                variant="outline"
                className="border-[#B60238] text-[#B60238] px-8 py-6 rounded-xl text-lg"
              >
                {t("storeCTAButton2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

