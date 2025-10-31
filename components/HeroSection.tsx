"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";
import { scrollToCTA } from "@/lib/scrollToCTA";
import { scrollToAppTypes } from "@/lib/scrollToAppTypes";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">
      {/* 🎥 Vídeo Cloudinary otimizado com parallax sutil */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          src="https://res.cloudinary.com/dpilz4p6g/video/upload/v1761834241/202510201410_3_kpoeye.mp4"
        />
      </motion.div>

      {/* 🔹 Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#15151340] to-[#15151380]" />

      {/* 🔹 Conteúdo principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {t("heroTitle")}
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          {t("heroSubtitle")}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToCTA}
            className="bg-[#B60238] hover:bg-[#9a0229] text-white text-lg px-8 py-6 rounded-xl"
          >
            {t("heroCTA")}
          </Button>
          <Button
            onClick={scrollToAppTypes}
            variant="outline"
            className="border-[#B60238] text-[#B60238] px-8 py-6 rounded-xl"
          >
            {t("navExamples")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

