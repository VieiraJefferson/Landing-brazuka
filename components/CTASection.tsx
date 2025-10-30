"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-32 px-6 text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="/videos/cta-bg.mp4"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#151513cc] to-[#151513]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para levar seu negócio ao próximo nível?
        </h2>
        <p className="text-gray-300 mb-10">
          Peça um orçamento gratuito e descubra como um app pode transformar o
          seu comércio.
        </p>
        <Button className="bg-[#B60238] hover:bg-[#9a0229] text-white text-lg px-10 py-6 rounded-xl">
          Solicitar orçamento gratuito
        </Button>
      </motion.div>
    </section>
  );
}

