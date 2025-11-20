"use client";
import { motion } from "framer-motion";
import { 
  Scissors, 
  Calendar, 
  Users, 
  Star, 
  Gift, 
  Package, 
  CreditCard,
  User,
  Bell,
  MessageSquare,
  Camera,
  BarChart3,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Brain,
  FileText,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";

export default function BeautySalonPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Calendar,
      titleKey: "beautySalonFeature1Title",
      descKey: "beautySalonFeature1Desc",
      highlights: ["beautySalonFeature1H1", "beautySalonFeature1H2", "beautySalonFeature1H3", "beautySalonFeature1H4"]
    },
    {
      icon: Users,
      titleKey: "beautySalonFeature2Title",
      descKey: "beautySalonFeature2Desc",
      highlights: ["beautySalonFeature2H1", "beautySalonFeature2H2", "beautySalonFeature2H3", "beautySalonFeature2H4"]
    },
    {
      icon: User,
      titleKey: "beautySalonFeature3Title",
      descKey: "beautySalonFeature3Desc",
      highlights: ["beautySalonFeature3H1", "beautySalonFeature3H2", "beautySalonFeature3H3", "beautySalonFeature3H4"]
    },
    {
      icon: Scissors,
      titleKey: "beautySalonFeature4Title",
      descKey: "beautySalonFeature4Desc",
      highlights: ["beautySalonFeature4H1", "beautySalonFeature4H2", "beautySalonFeature4H3", "beautySalonFeature4H4"]
    },
    {
      icon: Bell,
      titleKey: "beautySalonFeature5Title",
      descKey: "beautySalonFeature5Desc",
      highlights: ["beautySalonFeature5H1", "beautySalonFeature5H2", "beautySalonFeature5H3", "beautySalonFeature5H4"]
    },
    {
      icon: User,
      titleKey: "beautySalonFeature6Title",
      descKey: "beautySalonFeature6Desc",
      highlights: ["beautySalonFeature6H1", "beautySalonFeature6H2", "beautySalonFeature6H3", "beautySalonFeature6H4"]
    },
    {
      icon: Star,
      titleKey: "beautySalonFeature7Title",
      descKey: "beautySalonFeature7Desc",
      highlights: ["beautySalonFeature7H1", "beautySalonFeature7H2", "beautySalonFeature7H3", "beautySalonFeature7H4"]
    },
    {
      icon: Package,
      titleKey: "beautySalonFeature8Title",
      descKey: "beautySalonFeature8Desc",
      highlights: ["beautySalonFeature8H1", "beautySalonFeature8H2", "beautySalonFeature8H3", "beautySalonFeature8H4"]
    }
  ];

  const premiumFeatures = [
    {
      icon: Brain,
      titleKey: "beautySalonPremium1Title",
      descKey: "beautySalonPremium1Desc"
    },
    {
      icon: Camera,
      titleKey: "beautySalonPremium2Title",
      descKey: "beautySalonPremium2Desc"
    },
    {
      icon: CreditCard,
      titleKey: "beautySalonPremium3Title",
      descKey: "beautySalonPremium3Desc"
    },
    {
      icon: FileText,
      titleKey: "beautySalonPremium4Title",
      descKey: "beautySalonPremium4Desc"
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
            <Scissors className="w-12 h-12 text-[#B60238]" />
            <h1 className="text-5xl md:text-6xl font-bold">{t("beautySalonTitle")}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            {t("beautySalonSubtitle")}
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
            <h2 className="text-4xl font-bold mb-4">{t("beautySalonFeaturesTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("beautySalonFeaturesSubtitle")}
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
          {/* Intelligent Scheduling */}
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
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("beautySalonSchedulingTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("beautySalonSchedulingDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "beautySalonSchedulingItem1",
                    "beautySalonSchedulingItem2",
                    "beautySalonSchedulingItem3",
                    "beautySalonSchedulingItem4",
                    "beautySalonSchedulingItem5",
                    "beautySalonSchedulingItem6"
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
                    <Sparkles className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("beautySalonSchedulingFeatures")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("beautySalonSchedulingFeature1")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("beautySalonSchedulingFeature2")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("beautySalonSchedulingFeature3")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Catalog */}
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
                    <Scissors className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("beautySalonServicesTitle")}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Hair", "Nails", "Makeup", "Lashes", "Hair Removal", "Facial"].map((service) => (
                      <Badge key={service} variant="outline" className="border-[#2a2a2a] text-gray-300">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center">
                    <Scissors className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("beautySalonServicesTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("beautySalonServicesDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "beautySalonServicesItem1",
                    "beautySalonServicesItem2",
                    "beautySalonServicesItem3",
                    "beautySalonServicesItem4"
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
                  <h3 className="text-3xl font-bold">{t("beautySalonLoyaltyTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("beautySalonLoyaltyDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "beautySalonLoyaltyItem1",
                    "beautySalonLoyaltyItem2",
                    "beautySalonLoyaltyItem3",
                    "beautySalonLoyaltyItem4",
                    "beautySalonLoyaltyItem5"
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
                    <span className="font-semibold">{t("beautySalonLoyaltyLevels")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Bronze</span>
                      <Badge variant="outline" className="border-amber-500/50 text-amber-500">0-50 pts</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Silver</span>
                      <Badge variant="outline" className="border-gray-400/50 text-gray-400">51-200 pts</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-[#151513] rounded-lg">
                      <span>Gold</span>
                      <Badge variant="outline" className="border-yellow-400/50 text-yellow-400">200+ pts</Badge>
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
            <Badge className="bg-[#B60238] text-white mb-4">{t("beautySalonPremiumTitle")}</Badge>
            <h2 className="text-4xl font-bold mb-4">{t("beautySalonPremiumTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("beautySalonPremiumSubtitle")}
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
            <h2 className="text-4xl font-bold mb-6">{t("beautySalonCTATitle")}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("beautySalonCTADesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#B60238] hover:bg-[#9a0229] text-white text-lg px-8 py-6 rounded-xl"
              >
                {t("beautySalonCTAButton1")}
              </Button>
              <Button
                variant="outline"
                className="border-[#B60238] text-[#B60238] px-8 py-6 rounded-xl text-lg"
              >
                {t("beautySalonCTAButton2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

