"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-center">
      <h2 className="text-4xl font-bold mb-10">Sobre Mim</h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto flex flex-col items-center"
      >
        <img
          src="/me-profile.jpg"
          alt="Foto do desenvolvedor"
          className="w-32 h-32 rounded-full mb-6 border-2 border-[#B60238]"
        />
        <p className="text-gray-300 leading-relaxed mb-6">
          Sou <strong>Jefferson Vieira</strong>, desenvolvedor fullstack apaixonado
          por tecnologia e design. Crio aplicativos sob medida para pequenos
          negócios, ajudando empreendedores locais a vender mais, fidelizar
          clientes e se destacar online.
        </p>
        <div className="flex gap-6 justify-center">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#B60238] hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#B60238] hover:underline">
            GitHub
          </a>
          <a href="https://portifolio-jefferson-vieira.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#B60238] hover:underline">
            Portfólio
          </a>
        </div>
      </motion.div>
    </section>
  );
}

