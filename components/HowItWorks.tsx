"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Briefing rápido", desc: "Você me conta que tipo de aplicativo precisa e quais funções ele deve ter. Juntos definimos os objetivos principais e o estilo do projeto." },

  { title: "Design personalizado", desc: " Crio um design moderno e personalizado que combina com a identidade da sua marca. Você recebe prévias e pode dar feedback antes do desenvolvimento começar." },

  { title: "Desenvolvimento completo", desc: "Programo o aplicativo completo — com painel administrativo, sistema de pedidos ou gestão de clientes. Tudo é testado e otimizado para o melhor desempenho." },

  { title: "Publicação e suporte", desc: "Cuido da publicação nas lojas de aplicativos e acompanho você na fase inicial. Ofereço treinamento e suporte para que você possa gerenciar seu app com segurança." },

];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-center">
      <h2 className="text-4xl font-bold mb-10">Como Funciona</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-[#151513] rounded-2xl shadow-lg border border-[#2a2a2a]"
          >
            <h3 className="text-xl font-semibold text-[#B60238] mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

