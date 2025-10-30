"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carla Mendes",
    company: "Lanchonete Sabor & Arte",
    quote:
      "O app que o Jefferson fez dobrou nossos pedidos em apenas 2 meses. Atendimento excelente!",
  },
  {
    name: "Rodrigo Lima",
    company: "ImobEasy",
    quote:
      "O app ficou lindo e muito funcional. Os clientes adoram ver os imóveis direto no celular!",
  },
  {
    name: "Ana Paula",
    company: "Studio Glam",
    quote:
      "Agora meus clientes agendam tudo pelo app. Muito mais prático e profissional.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">Depoimentos</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#151513] border border-[#2a2a2a] p-6 rounded-2xl shadow-lg"
          >
            <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
            <h4 className="text-[#B60238] font-semibold">{t.name}</h4>
            <p className="text-sm text-gray-400">{t.company}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

