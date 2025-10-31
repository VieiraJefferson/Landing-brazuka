"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import { scrollToCTA } from "@/lib/scrollToCTA";

export default function Pricing() {
  const { t } = useTranslation();

  const plans = [
    {
      nameKey: "planStarter",
      price: "€299",
      descKey: "planStarterDesc",
      features: [
        "featureStandardDesign",
        "featureOrderPanel",
        "featureInitialSupport",
      ],
    },
    {
      nameKey: "planPro",
      price: "€599",
      descKey: "planProDesc",
      features: [
        "featureCustomDesign",
        "featureFullPanel",
        "featurePushNotifications",
        "featureSupport30Days",
      ],
    },
    {
      nameKey: "planPremium",
      price: "€999",
      descKey: "planPremiumDesc",
      features: [
        "featureAppStore",
        "featureExternalIntegrations",
        "featureExclusiveDesign",
        "featureSupport60Days",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-center">
      <h2 className="text-4xl font-bold mb-10">{t("pricingTitle")}</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-[#151513] border border-[#2a2a2a] rounded-2xl shadow-lg flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-[#B60238] mb-2">{t(p.nameKey)}</h3>
            <p className="text-gray-400 mb-4">{t(p.descKey)}</p>
            <p className="text-3xl font-bold mb-6">{p.price}</p>
            <ul className="text-gray-300 mb-8 text-left mx-auto">
              {p.features.map((featureKey, i2) => (
                <li key={i2} className="mb-2">✅ {t(featureKey)}</li>
              ))}
            </ul>
            <Button 
              onClick={scrollToCTA}
              className="bg-[#B60238] hover:bg-[#9a0229] text-white mt-auto"
            >
              {t("pricingButton")}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

