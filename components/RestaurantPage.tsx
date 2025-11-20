"use client";
import { motion } from "framer-motion";
import { 
  UtensilsCrossed, 
  ShoppingCart, 
  Calendar, 
  Truck, 
  Gift, 
  Bell, 
  CreditCard,
  User,
  Star,
  MessageSquare,
  Camera,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Package,
  Users,
  TrendingUp,
  Brain,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";

export default function RestaurantPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: UtensilsCrossed,
      titleKey: "restaurantFeature1Title",
      descKey: "restaurantFeature1Desc",
      highlights: ["restaurantFeature1H1", "restaurantFeature1H2", "restaurantFeature1H3", "restaurantFeature1H4", "restaurantFeature1H5"]
    },
    {
      icon: ShoppingCart,
      titleKey: "restaurantFeature2Title",
      descKey: "restaurantFeature2Desc",
      highlights: ["restaurantFeature2H1", "restaurantFeature2H2", "restaurantFeature2H3"]
    },
    {
      icon: Calendar,
      titleKey: "restaurantFeature3Title",
      descKey: "restaurantFeature3Desc",
      highlights: ["restaurantFeature3H1", "restaurantFeature3H2", "restaurantFeature3H3"]
    },
    {
      icon: Truck,
      titleKey: "restaurantFeature4Title",
      descKey: "restaurantFeature4Desc",
      highlights: ["restaurantFeature4H1", "restaurantFeature4H2", "restaurantFeature4H3", "restaurantFeature4H4"]
    },
    {
      icon: Gift,
      titleKey: "restaurantFeature5Title",
      descKey: "restaurantFeature5Desc",
      highlights: ["restaurantFeature5H1", "restaurantFeature5H2", "restaurantFeature5H3", "restaurantFeature5H4"]
    },
    {
      icon: Bell,
      titleKey: "restaurantFeature6Title",
      descKey: "restaurantFeature6Desc",
      highlights: ["restaurantFeature6H1", "restaurantFeature6H2", "restaurantFeature6H3", "restaurantFeature6H4"]
    },
    {
      icon: CreditCard,
      titleKey: "restaurantFeature7Title",
      descKey: "restaurantFeature7Desc",
      highlights: ["restaurantFeature7H1", "restaurantFeature7H2", "restaurantFeature7H3", "restaurantFeature7H4"]
    },
    {
      icon: User,
      titleKey: "restaurantFeature8Title",
      descKey: "restaurantFeature8Desc",
      highlights: ["restaurantFeature8H1", "restaurantFeature8H2", "restaurantFeature8H3", "restaurantFeature8H4"]
    }
  ];

  const premiumFeatures = [
    {
      icon: Brain,
      titleKey: "restaurantPremium1Title",
      descKey: "restaurantPremium1Desc"
    },
    {
      icon: Camera,
      titleKey: "restaurantPremium2Title",
      descKey: "restaurantPremium2Desc"
    },
    {
      icon: Truck,
      titleKey: "restaurantPremium3Title",
      descKey: "restaurantPremium3Desc"
    },
    {
      icon: Package,
      titleKey: "restaurantPremium4Title",
      descKey: "restaurantPremium4Desc"
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
            <UtensilsCrossed className="w-12 h-12 text-[#B60238]" />
            <h1 className="text-5xl md:text-6xl font-bold">{t("restaurantTitle")}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            {t("restaurantSubtitle")}
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
            <h2 className="text-4xl font-bold mb-4">{t("restaurantFeaturesTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("restaurantFeaturesSubtitle")}
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
          {/* Digital Menu */}
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
                    <UtensilsCrossed className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("restaurantMenuTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("restaurantMenuDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "restaurantMenuItem1",
                    "restaurantMenuItem2",
                    "restaurantMenuItem3",
                    "restaurantMenuItem4",
                    "restaurantMenuItem5",
                    "restaurantMenuItem6"
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
                  <div className="flex items-center gap-4 mb-6">
                    <Package className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("restaurantMenuFilters")}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Meats", "Sushi", "Vegan", "Desserts", "Beverages", "Gluten-free"].map((filter) => (
                      <Badge key={filter} variant="outline" className="border-[#2a2a2a] text-gray-300">
                        {filter}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Direct Orders */}
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
                    <ShoppingCart className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("restaurantOrderTracking")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("restaurantOrderStatus1")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("restaurantOrderStatus2")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("restaurantOrderStatus3")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("restaurantOrderStatus4")}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("restaurantOrdersTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("restaurantOrdersDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "restaurantOrdersItem1",
                    "restaurantOrdersItem2",
                    "restaurantOrdersItem3",
                    "restaurantOrdersItem4"
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
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("restaurantLoyaltyTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("restaurantLoyaltyDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "restaurantLoyaltyItem1",
                    "restaurantLoyaltyItem2",
                    "restaurantLoyaltyItem3",
                    "restaurantLoyaltyItem4",
                    "restaurantLoyaltyItem5"
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
                  <div className="flex items-center gap-4 mb-6">
                    <Star className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("restaurantLoyaltyLevels")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Bronze</span>
                      <Badge variant="outline" className="border-amber-500/50 text-amber-500">0-100 pts</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Silver</span>
                      <Badge variant="outline" className="border-gray-400/50 text-gray-400">101-500 pts</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Gold</span>
                      <Badge variant="outline" className="border-yellow-400/50 text-yellow-400">500+ pts</Badge>
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
            <Badge className="bg-[#B60238] text-white mb-4">{t("restaurantPremiumTitle")}</Badge>
            <h2 className="text-4xl font-bold mb-4">{t("restaurantPremiumTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("restaurantPremiumSubtitle")}
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
            <h2 className="text-4xl font-bold mb-6">{t("restaurantCTATitle")}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("restaurantCTADesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#B60238] hover:bg-[#9a0229] text-white text-lg px-8 py-6 rounded-xl"
              >
                {t("restaurantCTAButton1")}
              </Button>
              <Button
                variant="outline"
                className="border-[#B60238] text-[#B60238] px-8 py-6 rounded-xl text-lg"
              >
                {t("restaurantCTAButton2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

