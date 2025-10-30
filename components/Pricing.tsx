"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "€499",
    desc: "App simples com design padrão e painel básico.",
    features: ["Design padrão", "Painel de pedidos", "Suporte inicial"],
  },
  {
    name: "Pro",
    price: "€899",
    desc: "App completo com design personalizado e suporte premium.",
    features: [
      "Design personalizado",
      "Painel completo",
      "Notificações push",
      "Suporte 30 dias",
    ],
  },
  {
    name: "Premium",
    price: "€1299",
    desc: "Solução completa com loja online, integrações e acompanhamento.",
    features: [
      "App + Loja Online",
      "Integrações externas",
      "Design exclusivo",
      "Suporte 60 dias",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] text-center">
      <h2 className="text-4xl font-bold mb-10">Planos e Orçamento</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-[#151513] border border-[#2a2a2a] rounded-2xl shadow-lg flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-[#B60238] mb-2">{p.name}</h3>
            <p className="text-gray-400 mb-4">{p.desc}</p>
            <p className="text-3xl font-bold mb-6">{p.price}</p>
            <ul className="text-gray-300 mb-8 text-left mx-auto">
              {p.features.map((f, i2) => (
                <li key={i2} className="mb-2">✅ {f}</li>
              ))}
            </ul>
            <Button className="bg-[#B60238] hover:bg-[#9a0229] text-white mt-auto">
              Solicitar orçamento
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

