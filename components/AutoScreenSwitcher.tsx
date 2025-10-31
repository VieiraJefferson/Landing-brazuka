"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AutoScreenSwitcherProps {
  screens: React.ReactNode[];
  interval?: number; // tempo em ms entre trocas
}

export default function AutoScreenSwitcher({
  screens,
  interval = 5000,
}: AutoScreenSwitcherProps) {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return; // pausa o loop
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % screens.length);
    }, interval);
    return () => clearInterval(timer);
  }, [screens.length, interval, paused]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {screens[index]}
        </motion.div>
      </AnimatePresence>

      {/* Indicadores de progresso */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {screens.map((_, i) => (
          <div
            key={i}
            className={`h-[3px] w-6 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#FD2163]" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

