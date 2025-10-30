"use client";
import { motion } from "framer-motion";
import AnimatedGradientBackground from "./AnimatedGradientBackground";

const projects = [
  {
    name: "Burger Express",
    type: "App de delivery de fast food",
    img: "/mockups/burger.png",
  },
  {
    name: "ImobEasy",
    type: "App para imobiliária com catálogo interativo",
    img: "/mockups/imobiliaria.png",
  },
  {
    name: "Studio Glam",
    type: "App de agendamento para salão de beleza",
    img: "/mockups/salao.png",
  },
];

export default function Portfolio() {
  return (
    <AnimatedGradientBackground opacity={0.35}>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-10">Exemplos de Aplicativos</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#151513] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-64 object-cover opacity-90 hover:opacity-100 transition"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#B60238]">{p.name}</h3>
                <p className="text-gray-300 mt-2">{p.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedGradientBackground>
  );
}

