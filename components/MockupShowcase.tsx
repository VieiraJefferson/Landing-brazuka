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
import { useTranslation } from "@/lib/i18n";

export default function MockupShowcase() {
  const { t, language } = useTranslation();

  const cards = [
    { 
      titleKey: "portfolioDelivery",
      screens: [
        <ScreenRestaurant key="1" />,
        <ScreenRestaurant2 key="2" />
      ]
    },
    { 
      titleKey: "portfolioStore",
      screens: [
        <ScreenStore key="1" />,
        <ScreenStore2 key="2" />
      ]
    },
    { 
      titleKey: "portfolioSalon",
      screens: [
        <ScreenSalon key="1" />,
        <ScreenSalon2 key="2" />
      ]
    },
    { 
      titleKey: "portfolioRealEstate",
      screens: [
        <ScreenRealEstate key="1" />,
        <ScreenRealEstateList key="2" />,
        <ScreenRealEstateDetail key="3" />
      ]
    },
  ];

  return (
    <section className="relative py-24 overflow-x-hidden w-full max-w-full">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#151513,#2A1A25,#151513)] bg-[length:300%_300%] animate-bgmove overflow-hidden w-full max-w-full" />

      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 text-center text-[#FDFDFD] overflow-x-hidden max-w-full">
        <div className="mx-auto max-w-6xl px-2 relative" style={{ transform: 'translateZ(0)' }}>
          <h2 className="text-4xl font-bold" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>{t("portfolioTitle")}</h2>
          <p className="mt-3 text-white/70">
            {t("portfolioSubtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 mx-auto w-full max-w-full px-0">
          {cards.map((c, i) => (
            <motion.div
              key={`${c.titleKey}-${language}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-white/10 bg-black/30 p-2.5 sm:p-4 md:p-6 backdrop-blur w-full max-w-full overflow-hidden"
            >
              <div className="mb-5 text-left">
                <div className="text-lg font-semibold">{t(c.titleKey)}</div>
                <div className="text-sm text-white/60">
                  {t("portfolioDesc")}
                </div>
              </div>

              <PhoneMockup>
                <AppChrome title={t(c.titleKey)} theme={c.titleKey === "portfolioDelivery" || c.titleKey === "portfolioStore" ? "light" : "dark"}>
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

