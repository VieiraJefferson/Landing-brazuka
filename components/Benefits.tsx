"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Presença constante",
    desc: "Seu negócio no celular do cliente, a um toque de distância.",
  },
  {
    title: "Mais vendas e fidelização",
    desc: "Notificações push, promoções e pedidos diretos sem taxas.",
  },
  {
    title: "Independência de plataformas",
    desc: "Livre-se da dependência de redes sociais e apps de terceiros.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-center">
      <h2 className="text-4xl font-bold mb-10">Por que ter um App?</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 bg-[#151513] border border-[#2a2a2a] rounded-2xl shadow-lg flex flex-col items-center"
          >
            <CheckCircle className="text-[#B60238] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
            <p className="text-gray-400">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

