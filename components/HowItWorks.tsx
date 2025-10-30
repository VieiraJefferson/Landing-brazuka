"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "Briefing rápido", desc: "Você me conta sobre o seu negócio e o que precisa." },
  { title: "Design personalizado", desc: "Crio o layout visual do app com base na sua marca." },
  { title: "Desenvolvimento completo", desc: "App funcional com painel de administração." },
  { title: "Publicação e suporte", desc: "Seu app é publicado e acompanhado nas primeiras semanas." },
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

