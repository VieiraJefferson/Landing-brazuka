"use client";
import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";
import { AppChrome } from "./AppChrome";
import AutoScreenSwitcher from "./AutoScreenSwitcher";
import ScreenRestaurant from "./ScreenRestaurant";
import ScreenRestaurant2 from "./ScreenRestaurant2";
import ScreenStore from "./ScreenStore";
import ScreenStore2 from "./ScreenStore2";
import ScreenSalon from "./ScreenSalon";
import ScreenSalon2 from "./ScreenSalon2";
import ScreenRealEstate from "./ScreenRealEstate";
import ScreenRealEstateList from "./ScreenRealEstateList";
import ScreenRealEstateDetail from "./ScreenRealEstateDetail";

export default function MockupShowcase() {
  const cards = [
    { 
      title: "Delivery & Restaurantes", 
      screens: [
        <ScreenRestaurant key="1" />,
        <ScreenRestaurant2 key="2" />
      ]
    },
    { 
      title: "Lojas & E-commerce", 
      screens: [
        <ScreenStore key="1" />,
        <ScreenStore2 key="2" />
      ]
    },
    { 
      title: "Salões & Clínicas", 
      screens: [
        <ScreenSalon key="1" />,
        <ScreenSalon2 key="2" />
      ]
    },
    { 
      title: "Imobiliárias", 
      screens: [
        <ScreenRealEstate key="1" />,
        <ScreenRealEstateList key="2" />,
        <ScreenRealEstateDetail key="3" />
      ]
    },
  ];

  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#151513,#2A1A25,#151513)] bg-[length:300%_300%] animate-bgmove" />

      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 text-center text-[#FDFDFD]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold">Veja o potencial do seu app</h2>
          <p className="mt-3 text-white/70">
            Mockups funcionais (em código) que mostram a experiência real no celular.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 w-full max-w-[1920px] mx-auto">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-white/10 bg-black/30 p-4 md:p-6 backdrop-blur w-full"
            >
              <div className="mb-5 text-left">
                <div className="text-lg font-semibold">{c.title}</div>
                <div className="text-sm text-white/60">
                  UI moderna, fluida e pensada para conversão.
                </div>
              </div>

              <PhoneMockup>
                <AppChrome title={c.title}>
                  {c.screens.length > 1 ? (
                    <AutoScreenSwitcher screens={c.screens} interval={5000} />
                  ) : (
                    c.screens[0]
                  )}
                </AppChrome>
              </PhoneMockup>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

