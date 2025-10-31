"use client";
import { motion } from "framer-motion";
import AnimatedGradientBackground from "./AnimatedGradientBackground";
import { useTranslation } from "@/lib/i18n";

export default function AppTypes() {
  const { t } = useTranslation();
  
  const types = [
    { 
      nameKey: "appTypeRestaurants", 
      descKey: "appTypeRestaurantsDesc",
      img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851431/u7539642511_top-down_view_of_a_smartphone_displaying_a_digita_17778872-4b97-4957-8454-30501d3a965f_1_-_C%C3%B3pia_2_pqabaq.png", 
      type: "image" 
    },
    { 
      nameKey: "appTypeRealEstate", 
      descKey: "appTypeRealEstateDesc",
      img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851476/u7539642511_a_floating_smartphone_displaying_a_real_estate_ap_1b0f0380-4901-4f67-8821-2dc54aadd236_3_akkmkm.png", 
      type: "image" 
    },
    { 
      nameKey: "appTypeSalon", 
      descKey: "appTypeSalonDesc",
      img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851483/u7539642511_a_minimalist_hairdresser_interior_with_a_smartpho_c51189ec-a5fc-4fb8-bda8-ecf8243bbe52_3_1_rm8lkp.png", 
      type: "image" 
    },
    { 
      nameKey: "appTypeStore", 
      descKey: "appTypeStoreDesc",
      img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851461/u7539642511_a_floating_smartphone_displaying_a_fashion_e-comm_ac7cf516-37b3-4b3a-9f96-209be0ae9158_3_bgsxxl.png", 
      type: "image" 
    },
  ];
  
  return (
    <AnimatedGradientBackground opacity={0.35}>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 pt-2">{t("appTypesTitle")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
          {types.map((type, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-[3px] overflow-hidden group border border-[#2a2a2a] w-full h-[332px]"
            >
              {type.type === "image" ? (
                <img
                  src={type.img}
                  alt={t(type.nameKey)}
                  className="absolute inset-0 w-full h-full object-cover transition"
                />
              ) : (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={type.img}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151513] via-[#151513dd] to-[#15151399] flex flex-col items-center justify-end pb-6 px-4">
                <h3 className="text-xl font-semibold z-10 mb-3 text-center">{t(type.nameKey)}</h3>
                <p className="text-sm text-white/80 z-10 text-center leading-relaxed">{t(type.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedGradientBackground>
  );
}

