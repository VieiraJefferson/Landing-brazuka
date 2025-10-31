"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

const products = [
  { 
    name: "Camiseta Luz", 
    price: "€29,90", 
    oldPrice: "€39,90",
    image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761917341/u7539642511_erstelle_mir_das_bild_von_einem_t-shirt_fr_eine_S_0fba3d26-7307-4983-9a67-7ab3a468567e_1_w50tyh.png"
  },
  { 
    name: "Calça Jeans", 
    price: "€59,90", 
    oldPrice: "€79,90",
    image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761917340/u7539642511_erstelle_mir_das_bild_von_einer_hose_aus_jeanssto_d3c77086-0ed8-4ff9-824e-40294ffcb700_1_1_qtbrhr.png"
  },
  { 
    name: "Tênis Esportivo", 
    price: "€89,90", 
    oldPrice: "€119,90",
    image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761917358/png_1_gez4qe.png"
  },
  { 
    name: "T-shirt Artsy", 
    price: "€74,90", 
    oldPrice: "€99,90",
    image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761917340/u7539642511_erstelle_mir_das_bild_von_einem_t-shirt_fr_eine_S_0fba3d26-7307-4983-9a67-7ab3a468567e_3_hsrhs2.png"
  },
];

export default function ScreenStore2() {
  const { t } = useTranslation();
  
  return (
    <div className="h-full w-full bg-white">
      <div className="p-3 sm:p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold text-black">{t("screenPromotions")}</div>
            <div className="text-xs text-gray-600">{t("screenUpToOff")}</div>
          </div>
          <Button variant="outline" className="border-gray-300 text-white bg-[#1C1C1C] hover:bg-[#2C2C2C] text-xs h-7">
            {t("screenSeeAll")}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-gray-200 bg-[#EBEBEB] p-3">
              <div className="mb-2 aspect-square w-full rounded-lg overflow-hidden bg-gray-100 relative">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1 right-1 bg-[#FD2163] text-[10px] px-1.5 py-0.5 rounded text-white font-semibold">
                  {t("screenOff")}
                </span>
              </div>
              <div className="text-sm text-black font-medium">{p.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="text-xs font-semibold text-black">{p.price}</div>
                <div className="text-[10px] text-gray-400 line-through">{p.oldPrice}</div>
              </div>
              <Button className="mt-2 h-8 w-full bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white">
                {t("screenBuy")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

