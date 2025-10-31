"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import ContactModal from "./ContactModal";
import { useTranslation } from "@/lib/i18n";

export default function ContactSection() {
  const { t, language } = useTranslation();
  const [open, setOpen] = useState(false);
  const whatsappNumber = "351965898953"; // substitua pelo seu número (sem +)
  const whatsappMsg = encodeURIComponent(
    language === "pt" 
      ? "Olá! Vi o seu site e quero saber mais sobre apps para o meu negócio."
      : language === "en"
      ? "Hello! I saw your website and want to know more about apps for my business."
      : "Hallo! Ich habe Ihre Website gesehen und möchte mehr über Apps für mein Unternehmen erfahren."
  );

  return (
    <section id="cta-section" className="relative py-24 text-center text-[#FDFDFD] bg-[#0c0c0c]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#151513,#2A1A25,#151513)] bg-[length:300%_300%] animate-bgmove" />

      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-white/70 mb-10">
          {t("ctaSubtitle")}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="flex items-center gap-2 bg-[#43BB89] hover:bg-[#3EA27D] text-white text-lg py-6 px-8"
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, "_blank")
            }
          >
            <ImWhatsapp className="w-5 h-5" />
            WhatsApp
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white py-6 px-8 text-lg"
            onClick={() => setOpen(true)}
          >
            <Mail className="w-5 h-5" />
            {t("contactSend")}
          </Button>
        </div>
      </div>

      <ContactModal open={open} setOpen={setOpen} />
    </section>
  );
}

