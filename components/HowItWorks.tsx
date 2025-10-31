"use client";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { titleKey: "step1Title", descKey: "step1Desc" },
    { titleKey: "step2Title", descKey: "step2Desc" },
    { titleKey: "step3Title", descKey: "step3Desc" },
    { titleKey: "step4Title", descKey: "step4Desc" },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-center">
      <h2 className="text-4xl font-bold mb-10">{t("howItWorksTitle")}</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-[#151513] rounded-2xl shadow-lg border border-[#2a2a2a]"
          >
            <h3 className="text-xl font-semibold text-[#B60238] mb-2">{t(step.titleKey)}</h3>
            <p className="text-gray-300">{t(step.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

