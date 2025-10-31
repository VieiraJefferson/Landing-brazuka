"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import ContactModal from "./ContactModal";

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "351965898953"; // substitua pelo seu número (sem +)
  const whatsappMsg = encodeURIComponent(
    "Olá! Vi o seu site e quero saber mais sobre apps para o meu negócio."
  );

  return (
    <section className="relative py-24 text-center text-[#FDFDFD] bg-[#0c0c0c]">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#151513,#2A1A25,#151513)] bg-[length:300%_300%] animate-bgmove" />

      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Vamos criar o seu app juntos</h2>
        <p className="text-white/70 mb-10">
          Entre em contato e receba um orçamento personalizado em minutos.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            className="flex items-center gap-2 bg-[#43BB89] hover:bg-[#3EA27D] text-white text-lg py-6 px-8"
            onClick={() =>
              window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, "_blank")
            }
          >
            <ImWhatsapp className="w-5 h-5" />
            Falar no WhatsApp
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white py-6 px-8 text-lg"
            onClick={() => setOpen(true)}
          >
            <Mail className="w-5 h-5" />
            Enviar e-mail
          </Button>
        </div>
      </div>

      <ContactModal open={open} setOpen={setOpen} />
    </section>
  );
}

