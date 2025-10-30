"use client";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedGradientBackgroundProps {
  opacity?: number;
  children: React.ReactNode;
}

export default function AnimatedGradientBackground({
  opacity = 0.6,
  children,
}: AnimatedGradientBackgroundProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* 🌈 Gradiente animado suave */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(120deg, #151513, #0a2028, #B60238, #151513)`,
          backgroundSize: "300% 300%",
          opacity,
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Overlay mais sutil */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#15151320] to-[#15151360]" />

      {/* Conteúdo */}
      <div className="relative z-10 px-6">{children}</div>
    </section>
  );
}

