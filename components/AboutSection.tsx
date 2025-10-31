"use client";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-center">
      <h2 className="text-4xl font-bold mb-10">{t("aboutTitle")}</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <div className="w-32 h-32 rounded-full mb-6 border-2 border-white bg-white p-1">
          <img
            src="https://res.cloudinary.com/dpilz4p6g/image/upload/v1761042758/g8ll1tbzboofjrvwmvre.png"
            alt="Jefferson Vieira"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <p 
          className="text-gray-300 leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: t("aboutDesc") }}
        />
        <div className="flex gap-6 justify-center">
          <a 
            href="https://www.linkedin.com/in/jefferson-vieira-6b660b242/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#0077B5] hover:text-[#005885] transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://github.com/VieiraJefferson" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-gray-300 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://portifolio-jefferson-vieira.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#B60238] hover:text-[#FD2163] transition-colors duration-200"
            aria-label="Portfólio"
          >
            <Globe size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

