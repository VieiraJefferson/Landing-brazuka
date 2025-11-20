"use client";
import { motion } from "framer-motion";
import { 
  Wrench, 
  ClipboardList, 
  Calendar, 
  Package, 
  FileText, 
  CreditCard, 
  ShoppingBag,
  Bell,
  User,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Brain,
  Shield,
  Users,
  Laptop,
  Smartphone,
  Network,
  Printer,
  Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";

export default function ITSupportPage() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Wrench,
      titleKey: "itSupportFeature1Title",
      descKey: "itSupportFeature1Desc",
      highlights: ["itSupportFeature1H1", "itSupportFeature1H2", "itSupportFeature1H3", "itSupportFeature1H4"]
    },
    {
      icon: ClipboardList,
      titleKey: "itSupportFeature2Title",
      descKey: "itSupportFeature2Desc",
      highlights: ["itSupportFeature2H1", "itSupportFeature2H2", "itSupportFeature2H3", "itSupportFeature2H4"]
    },
    {
      icon: Calendar,
      titleKey: "itSupportFeature3Title",
      descKey: "itSupportFeature3Desc",
      highlights: ["itSupportFeature3H1", "itSupportFeature3H2", "itSupportFeature3H3"]
    },
    {
      icon: Package,
      titleKey: "itSupportFeature4Title",
      descKey: "itSupportFeature4Desc",
      highlights: ["itSupportFeature4H1", "itSupportFeature4H2", "itSupportFeature4H3", "itSupportFeature4H4", "itSupportFeature4H5", "itSupportFeature4H6"]
    },
    {
      icon: FileText,
      titleKey: "itSupportFeature5Title",
      descKey: "itSupportFeature5Desc",
      highlights: ["itSupportFeature5H1", "itSupportFeature5H2", "itSupportFeature5H3", "itSupportFeature5H4"]
    },
    {
      icon: CreditCard,
      titleKey: "itSupportFeature6Title",
      descKey: "itSupportFeature6Desc",
      highlights: ["itSupportFeature6H1", "itSupportFeature6H2", "itSupportFeature6H3", "itSupportFeature6H4"]
    },
    {
      icon: ShoppingBag,
      titleKey: "itSupportFeature7Title",
      descKey: "itSupportFeature7Desc",
      highlights: ["itSupportFeature7H1", "itSupportFeature7H2", "itSupportFeature7H3", "itSupportFeature7H4"]
    },
    {
      icon: Bell,
      titleKey: "itSupportFeature8Title",
      descKey: "itSupportFeature8Desc",
      highlights: ["itSupportFeature8H1", "itSupportFeature8H2", "itSupportFeature8H3", "itSupportFeature8H4"]
    }
  ];

  const premiumFeatures = [
    {
      icon: Brain,
      titleKey: "itSupportPremium1Title",
      descKey: "itSupportPremium1Desc"
    },
    {
      icon: MessageSquare,
      titleKey: "itSupportPremium2Title",
      descKey: "itSupportPremium2Desc"
    },
    {
      icon: Shield,
      titleKey: "itSupportPremium3Title",
      descKey: "itSupportPremium3Desc"
    },
    {
      icon: BarChart3,
      titleKey: "itSupportPremium4Title",
      descKey: "itSupportPremium4Desc"
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
            <Wrench className="w-12 h-12 text-[#B60238]" />
            <h1 className="text-5xl md:text-6xl font-bold">{t("itSupportTitle")}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
            {t("itSupportSubtitle")}
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
            <h2 className="text-4xl font-bold mb-4">{t("itSupportFeaturesTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("itSupportFeaturesSubtitle")}
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
          {/* Quick Support Request */}
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
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("itSupportRequestTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("itSupportRequestDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "itSupportRequestItem1",
                    "itSupportRequestItem2",
                    "itSupportRequestItem3",
                    "itSupportRequestItem4",
                    "itSupportRequestItem5",
                    "itSupportRequestItem6"
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
                    <ClipboardList className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("itSupportServiceCategories")}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Laptop, label: "Computers" },
                      { icon: Smartphone, label: "Smartphones" },
                      { icon: Network, label: "Networks" },
                      { icon: Printer, label: "Printers" },
                      { icon: Shield, label: "Security" },
                      { icon: Camera, label: "CCTV" }
                    ].map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <Badge key={cat.label} variant="outline" className="border-[#2a2a2a] text-gray-300 flex items-center gap-2">
                          <Icon className="w-3 h-3" />
                          {cat.label}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Equipment Tracking */}
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
                    <Package className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("itSupportTrackingTitle")}</span>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    {[
                      { status: "itSupportTrackingStatus1", icon: "📍" },
                      { status: "itSupportTrackingStatus2", icon: "🔧" },
                      { status: "itSupportTrackingStatus3", icon: "🛠️" },
                      { status: "itSupportTrackingStatus4", icon: "✔" },
                      { status: "itSupportTrackingStatus5", icon: "🚚" },
                      { status: "itSupportTrackingStatus6", icon: "📦" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-lg">{item.icon}</span>
                        <span>{t(item.status)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#B60238]/10 flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("itSupportTrackingTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("itSupportTrackingDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "itSupportTrackingItem1",
                    "itSupportTrackingItem2",
                    "itSupportTrackingItem3",
                    "itSupportTrackingItem4"
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

          {/* Digital Quote */}
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
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{t("itSupportQuoteTitle")}</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  {t("itSupportQuoteDesc")}
                </p>
                <div className="space-y-3">
                  {[
                    "itSupportQuoteItem1",
                    "itSupportQuoteItem2",
                    "itSupportQuoteItem3",
                    "itSupportQuoteItem4",
                    "itSupportQuoteItem5"
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
                    <FileText className="w-6 h-6 text-[#B60238]" />
                    <span className="font-semibold">{t("itSupportQuoteActions")}</span>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full bg-green-600/20 hover:bg-green-600/30 text-green-400 border border-green-600/30">
                      👍 {t("itSupportQuoteApprove")}
                    </Button>
                    <Button variant="outline" className="w-full border-red-600/30 text-red-400 hover:bg-red-600/10">
                      👎 {t("itSupportQuoteReject")}
                    </Button>
                    <Button variant="outline" className="w-full border-[#2a2a2a] text-gray-300 hover:bg-[#151513]">
                      💬 {t("itSupportQuoteReview")}
                    </Button>
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
            <Badge className="bg-[#B60238] text-white mb-4">{t("itSupportPremiumTitle")}</Badge>
            <h2 className="text-4xl font-bold mb-4">{t("itSupportPremiumTitle")}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {t("itSupportPremiumSubtitle")}
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
            <h2 className="text-4xl font-bold mb-6">{t("itSupportCTATitle")}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t("itSupportCTADesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-[#B60238] hover:bg-[#9a0229] text-white text-lg px-8 py-6 rounded-xl"
              >
                {t("itSupportCTAButton1")}
              </Button>
              <Button
                variant="outline"
                className="border-[#B60238] text-[#B60238] px-8 py-6 rounded-xl text-lg"
              >
                {t("itSupportCTAButton2")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

