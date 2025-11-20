"use client";
import { motion } from "framer-motion";
import { 
  Scissors, 
  Calendar, 
  User, 
  ClipboardList, 
  Gift, 
  Camera, 
  Bell,
  Package,
  CreditCard,
  MapPin,
  BarChart3,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Brain,
  Award,
  Star,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";

export default function BarbershopPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Calendar,
      titleKey: "barbershopFeature1Title",
      descKey: "barbershopFeature1Desc",
      highlights: ["barbershopFeature1H1", "barbershopFeature1H2", "barbershopFeature1H3", "barbershopFeature1H4", "barbershopFeature1H5"]
    },
    {
      icon: User,
      titleKey: "barbershopFeature2Title",
      descKey: "barbershopFeature2Desc",
      highlights: ["barbershopFeature2H1", "barbershopFeature2H2", "barbershopFeature2H3", "barbershopFeature2H4"]
    },
    {
      icon: ClipboardList,
      titleKey: "barbershopFeature3Title",
      descKey: "barbershopFeature3Desc",
      highlights: ["barbershopFeature3H1", "barbershopFeature3H2", "barbershopFeature3H3", "barbershopFeature3H4"]
    },
    {
      icon: User,
      titleKey: "barbershopFeature4Title",
      descKey: "barbershopFeature4Desc",
      highlights: ["barbershopFeature4H1", "barbershopFeature4H2", "barbershopFeature4H3", "barbershopFeature4H4"]
    },
    {
      icon: Gift,
      titleKey: "barbershopFeature5Title",
      descKey: "barbershopFeature5Desc",
      highlights: ["barbershopFeature5H1", "barbershopFeature5H2", "barbershopFeature5H3", "barbershopFeature5H4"]
    },
    {
      icon: Camera,
      titleKey: "barbershopFeature6Title",
      descKey: "barbershopFeature6Desc",
      highlights: ["barbershopFeature6H1", "barbershopFeature6H2", "barbershopFeature6H3", "barbershopFeature6H4"]
    },
    {
      icon: Bell,
      titleKey: "barbershopFeature7Title",
      descKey: "barbershopFeature7Desc",
      highlights: ["barbershopFeature7H1", "barbershopFeature7H2", "barbershopFeature7H3", "barbershopFeature7H4"]
    },
    {
      icon: Package,
      titleKey: "barbershopFeature8Title",
      descKey: "barbershopFeature8Desc",
      highlights: ["barbershopFeature8H1", "barbershopFeature8H2", "barbershopFeature8H3", "barbershopFeature8H4"]
    }
  ];

  const premiumFeatures = [
    {
      icon: Brain,
      titleKey: "barbershopPremium1Title",
      descKey: "barbershopPremium1Desc"
    },
    {
      icon: CreditCard,
      titleKey: "barbershopPremium2Title",
      descKey: "barbershopPremium2Desc"
    },
    {
      icon: Package,
      titleKey: "barbershopPremium3Title",
      descKey: "barbershopPremium3Desc"
    },
    {
      icon: BarChart3,
      titleKey: "barbershopPremium4Title",
      descKey: "barbershopPremium4Desc"
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
            <h1 className="text-5xl md:text-6xl font-bold">{t("barbershopTitle")}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            {t("barbershopSubtitle")}
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
            <h2 className="text-4xl font-bold mb-4">{t("barbershopFeaturesTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("barbershopFeaturesSubtitle")}
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
          {/* Professional Scheduling */}
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
                  <h3 className="text-3xl font-bold">{t("barbershopSchedulingTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("barbershopSchedulingDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "barbershopSchedulingItem1",
                    "barbershopSchedulingItem2",
                    "barbershopSchedulingItem3",
                    "barbershopSchedulingItem4",
                    "barbershopSchedulingItem5",
                    "barbershopSchedulingItem6"
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
                    <span className="font-semibold">{t("barbershopSchedulingFeatures")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("barbershopSchedulingFeature1")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("barbershopSchedulingFeature2")}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#B60238]" />
                      <span>{t("barbershopSchedulingFeature3")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client History */}
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
                    <User className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("barbershopHistoryTitle")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="p-3 bg-[#151513] rounded-lg">
                      <div className="font-semibold mb-1">Last Cut: 15 days ago</div>
                      <div className="text-xs text-gray-400">Low fade + Beard trim</div>
                    </div>
                    <div className="p-3 bg-[#151513] rounded-lg">
                      <div className="font-semibold mb-1">Machine: #2 blade</div>
                      <div className="text-xs text-gray-400">Products: Pomade, Oil</div>
                    </div>
                    <div className="p-3 bg-[#151513] rounded-lg">
                      <div className="font-semibold mb-1">Preferences</div>
                      <div className="text-xs text-gray-400">Sides shorter, top longer</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("barbershopHistoryTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("barbershopHistoryDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "barbershopHistoryItem1",
                    "barbershopHistoryItem2",
                    "barbershopHistoryItem3",
                    "barbershopHistoryItem4",
                    "barbershopHistoryItem5",
                    "barbershopHistoryItem6"
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

          {/* Digital Check-in */}
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
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("barbershopCheckinTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("barbershopCheckinDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "barbershopCheckinItem1",
                    "barbershopCheckinItem2",
                    "barbershopCheckinItem3",
                    "barbershopCheckinItem4"
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
                    <MapPin className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("barbershopCheckinButton")}</span>
                  </div>
                  <Button className="w-full bg-[#B60238] hover:bg-[#9a0229] text-white text-lg py-6">
                    📍 {t("barbershopCheckinButton")}
                  </Button>
                  <div className="mt-4 p-4 bg-[#151513] rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">{t("barbershopCheckinStatus")}</div>
                    <div className="text-lg font-semibold text-[#B60238]">Position #3 in queue</div>
                    <div className="text-sm text-gray-400 mt-2">Estimated wait: ~15 min</div>
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
            <Badge className="bg-[#B60238] text-white mb-4">{t("barbershopPremiumTitle")}</Badge>
            <h2 className="text-4xl font-bold mb-4">{t("barbershopPremiumTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("barbershopPremiumSubtitle")}
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
            <h2 className="text-4xl font-bold mb-6">{t("barbershopCTATitle")}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("barbershopCTADesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#B60238] hover:bg-[#9a0229] text-white text-lg px-8 py-6 rounded-xl"
              >
                {t("barbershopCTAButton1")}
              </Button>
              <Button
                variant="outline"
                className="border-[#B60238] text-[#B60238] px-8 py-6 rounded-xl text-lg"
              >
                {t("barbershopCTAButton2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

