"use client";
import { motion } from "framer-motion";
import AnimatedGradientBackground from "./AnimatedGradientBackground";

const types = [
  { name: "Restaurantes & Fast Food", img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851431/u7539642511_top-down_view_of_a_smartphone_displaying_a_digita_17778872-4b97-4957-8454-30501d3a965f_1_-_C%C3%B3pia_2_pqabaq.png", type: "image" },
  { name: "Imobiliárias", img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851476/u7539642511_a_floating_smartphone_displaying_a_real_estate_ap_1b0f0380-4901-4f67-8821-2dc54aadd236_3_akkmkm.png", type: "image" },
  { name: "Salões de Beleza", img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851483/u7539642511_a_minimalist_hairdresser_interior_with_a_smartpho_c51189ec-a5fc-4fb8-bda8-ecf8243bbe52_3_1_rm8lkp.png", type: "image" },
  { name: "Lojas Online", img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851461/u7539642511_a_floating_smartphone_displaying_a_fashion_e-comm_ac7cf516-37b3-4b3a-9f96-209be0ae9158_3_bgsxxl.png", type: "image" },
];

export default function AppTypes() {
  return (
    <AnimatedGradientBackground opacity={0.35}>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-10">Tipos de Aplicativos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {types.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden group border border-[#2a2a2a] aspect-square h-64"
            >
              {t.type === "image" ? (
                <img
                  src={t.img}
                  alt={t.name}
                  className="absolute inset-0 w-full h-full object-cover transition"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={t.img}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition"
                />
              )}
              <div className="absolute inset-0 bg-[#15151399] flex items-center justify-center">
                <h3 className="text-xl font-semibold z-10 px-4 text-center">{t.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedGradientBackground>
  );
}

