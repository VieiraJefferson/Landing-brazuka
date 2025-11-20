"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import AnimatedGradientBackground from "./AnimatedGradientBackground";
import { useTranslation } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export default function AppTypes() {
  const { t } = useTranslation();
  const router = useRouter();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const types = [
    { 
      nameKey: "appTypeRestaurants", 
      descKey: "appTypeRestaurantsDesc",
      img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851431/u7539642511_top-down_view_of_a_smartphone_displaying_a_digita_17778872-4b97-4957-8454-30501d3a965f_1_-_C%C3%B3pia_2_pqabaq.png", 
      type: "image",
      route: "/restaurant"
    },
    { 
      nameKey: "appTypeRealEstate", 
      descKey: "appTypeRealEstateDesc",
      img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851476/u7539642511_a_floating_smartphone_displaying_a_real_estate_ap_1b0f0380-4901-4f67-8821-2dc54aadd236_3_akkmkm.png", 
      type: "image",
      route: "/real-estate"
    },
    { 
      nameKey: "appTypeSalon", 
      descKey: "appTypeSalonDesc",
      img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851483/u7539642511_a_minimalist_hairdresser_interior_with_a_smartpho_c51189ec-a5fc-4fb8-bda8-ecf8243bbe52_3_1_rm8lkp.png", 
      type: "image",
      route: "/beauty-salon"
    },
    { 
      nameKey: "appTypeStore", 
      descKey: "appTypeStoreDesc",
      img: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761851461/u7539642511_a_floating_smartphone_displaying_a_fashion_e-comm_ac7cf516-37b3-4b3a-9f96-209be0ae9158_3_bgsxxl.png", 
      type: "image",
      route: null // Store não tem página ainda
    },
  ];

  const moreTypes = [
    {
      nameKey: "appTypeITSupport",
      descKey: "appTypeITSupportDesc",
      route: "/it-support"
    },
    {
      nameKey: "appTypeBarbershop",
      descKey: "appTypeBarbershopDesc",
      route: "/barbershop"
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };

    if (isMoreOpen) {
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside, true);
        document.addEventListener("touchend", handleClickOutside, true);
      }, 0);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("touchend", handleClickOutside, true);
    };
  }, [isMoreOpen]);

  const handleTypeClick = (route: string | null) => {
    if (route) {
      router.push(route);
    }
  };

  const handleMoreClick = (route: string) => {
    router.push(route);
    setIsMoreOpen(false);
  };
  
  return (
    <section id="app-types-section" className="py-24 relative z-50" style={{ overflow: 'visible' }}>
      <AnimatedGradientBackground opacity={0.35}>
        <div className="text-center" style={{ overflow: 'visible' }}>
          <h2 className="text-4xl font-bold mb-8 pt-2">{t("appTypesTitle")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4 mb-12">
            {types.map((type, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleTypeClick(type.route)}
                className={`relative rounded-[3px] overflow-hidden group border border-[#2a2a2a] w-full h-[332px] ${type.route ? 'cursor-pointer' : ''}`}
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
          
          {/* More Options Select */}
          <div className="max-w-md mx-auto px-4 relative" ref={dropdownRef}>
            <Button
              variant="outline"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="w-full border-[#2a2a2a] bg-[#151513] hover:bg-[#1a1a1a] text-white text-lg py-6 flex items-center justify-between touch-manipulation"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span>{t("appTypesMore")}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
            </Button>
            
            {isMoreOpen && (
              <div className="absolute top-full mt-2 w-full bg-[#151513] border border-[#2a2a2a] rounded-lg shadow-2xl overflow-hidden z-[99999]">
                {moreTypes.map((type, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleMoreClick(type.route);
                    }}
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleMoreClick(type.route);
                    }}
                    className="w-full text-left px-4 py-3 text-sm active:bg-white/20 transition-colors hover:bg-white/10 border-b border-[#2a2a2a] last:border-b-0 touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span className="font-semibold text-white">{t(type.nameKey)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </AnimatedGradientBackground>
    </section>
  );
}

