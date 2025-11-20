"use client";
import { motion } from "framer-motion";
import { 
  Home, 
  Map, 
  Brain, 
  Calculator, 
  Bell, 
  User, 
  Calendar, 
  BarChart3,
  Users,
  FileText,
  MessageSquare,
  Building2,
  Award,
  Search,
  Filter,
  Camera,
  Video,
  Layers,
  TrendingUp,
  Shield,
  ShoppingBag,
  Star,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";

export default function RealEstatePage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Home,
      titleKey: "realEstateFeature1Title",
      descKey: "realEstateFeature1Desc",
      highlights: ["realEstateFeature1H1", "realEstateFeature1H2", "realEstateFeature1H3", "realEstateFeature1H4", "realEstateFeature1H5"]
    },
    {
      icon: Map,
      titleKey: "realEstateFeature2Title",
      descKey: "realEstateFeature2Desc",
      highlights: ["realEstateFeature2H1", "realEstateFeature2H2", "realEstateFeature2H3", "realEstateFeature2H4"]
    },
    {
      icon: Brain,
      titleKey: "realEstateFeature3Title",
      descKey: "realEstateFeature3Desc",
      highlights: ["realEstateFeature3H1", "realEstateFeature3H2", "realEstateFeature3H3", "realEstateFeature3H4"]
    },
    {
      icon: Calculator,
      titleKey: "realEstateFeature4Title",
      descKey: "realEstateFeature4Desc",
      highlights: ["realEstateFeature4H1", "realEstateFeature4H2", "realEstateFeature4H3", "realEstateFeature4H4"]
    },
    {
      icon: Bell,
      titleKey: "realEstateFeature5Title",
      descKey: "realEstateFeature5Desc",
      highlights: ["realEstateFeature5H1", "realEstateFeature5H2", "realEstateFeature5H3", "realEstateFeature5H4"]
    },
    {
      icon: User,
      titleKey: "realEstateFeature6Title",
      descKey: "realEstateFeature6Desc",
      highlights: ["realEstateFeature6H1", "realEstateFeature6H2", "realEstateFeature6H3", "realEstateFeature6H4"]
    },
    {
      icon: Calendar,
      titleKey: "realEstateFeature7Title",
      descKey: "realEstateFeature7Desc",
      highlights: ["realEstateFeature7H1", "realEstateFeature7H2", "realEstateFeature7H3", "realEstateFeature7H4"]
    },
    {
      icon: BarChart3,
      titleKey: "realEstateFeature8Title",
      descKey: "realEstateFeature8Desc",
      highlights: ["realEstateFeature8H1", "realEstateFeature8H2", "realEstateFeature8H3", "realEstateFeature8H4"]
    }
  ];

  const premiumFeatures = [
    {
      icon: TrendingUp,
      titleKey: "realEstatePremium1Title",
      descKey: "realEstatePremium1Desc"
    },
    {
      icon: Camera,
      titleKey: "realEstatePremium2Title",
      descKey: "realEstatePremium2Desc"
    },
    {
      icon: Video,
      titleKey: "realEstatePremium3Title",
      descKey: "realEstatePremium3Desc"
    },
    {
      icon: Award,
      titleKey: "realEstatePremium4Title",
      descKey: "realEstatePremium4Desc"
    }
  ];

  return (
    <main className="bg-[#151513] text-[#FDFDFD] overflow-x-hidden w-full max-w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#151513,#2A1A25,#151513)] bg-[length:300%_300%] animate-bgmove" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="w-12 h-12 text-[#B60238]" />
            <h1 className="text-5xl md:text-6xl font-bold">{t("realEstateTitle")}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            {t("realEstateSubtitle")}
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
            <h2 className="text-4xl font-bold mb-4">{t("realEstateFeaturesTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("realEstateFeaturesSubtitle")}
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
          {/* Property Catalog */}
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
                    <Search className="w-6 h-6 text-[#B60238]" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("realEstateCatalogTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("realEstateCatalogDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "realEstateCatalogItem1",
                    "realEstateCatalogItem2",
                    "realEstateCatalogItem3",
                    "realEstateCatalogItem4",
                    "realEstateCatalogItem5",
                    "realEstateCatalogItem6"
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
                    <span className="font-semibold">{t("realEstateFiltersTitle")}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Type", "Price", "T1/T2/T3", "Zone", "Area", "Parking"].map((filter) => (
                      <Badge key={filter} variant="outline" className="border-[#2a2a2a] text-gray-300">
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intelligent Map */}
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
                    <Map className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("realEstateLocationScore")}</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { labelKey: "realEstateLocationTransport", score: 85 },
                      { labelKey: "realEstateLocationSecurity", score: 90 },
                      { labelKey: "realEstateLocationCommerce", score: 75 },
                      { labelKey: "realEstateLocationLeisure", score: 80 }
                    ].map((item) => (
                      <div key={item.labelKey}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-300">{t(item.labelKey)}</span>
                          <span className="text-sm font-semibold">{item.score}/100</span>
                        </div>
                        <div className="w-full bg-[#151513] rounded-full h-2">
                          <div 
                            className="bg-[#B60238] h-2 rounded-full" 
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center">
                    <Map className="w-6 h-6 text-[#B60238]" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("realEstateMapTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("realEstateMapDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "realEstateMapItem1",
                    "realEstateMapItem2",
                    "realEstateMapItem3",
                    "realEstateMapItem4",
                    "realEstateMapItem5"
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

          {/* AI Recommendations */}
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
                    <Brain className="w-6 h-6 text-[#B60238]" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("realEstateAITitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("realEstateAIDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "realEstateAIItem1",
                    "realEstateAIItem2",
                    "realEstateAIItem3",
                    "realEstateAIItem4",
                    "realEstateAIItem5"
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
                    <Sparkles className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">AI Analysis</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Properties viewed</span>
                      <span className="text-[#B60238]">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average price range</span>
                      <span className="text-[#B60238]">€250k-€350k</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Preferred areas</span>
                      <span className="text-[#B60238]">3 zones</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Match score</span>
                      <span className="text-[#B60238] font-semibold">92%</span>
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
            <Badge className="bg-[#B60238] text-white mb-4">{t("realEstatePremiumTitle")}</Badge>
            <h2 className="text-4xl font-bold mb-4">{t("realEstatePremiumTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("realEstatePremiumSubtitle")}
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
            <h2 className="text-4xl font-bold mb-6">{t("realEstateCTATitle")}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("realEstateCTADesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#B60238] hover:bg-[#9a0229] text-white text-lg px-8 py-6 rounded-xl"
              >
                {t("realEstateCTAButton1")}
              </Button>
              <Button
                variant="outline"
                className="border-[#B60238] text-[#B60238] px-8 py-6 rounded-xl text-lg"
              >
                {t("realEstateCTAButton2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

