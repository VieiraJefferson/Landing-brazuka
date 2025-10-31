"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export default function ScreenRestaurant() {
  const { t } = useTranslation();
  
  const items = [
    { 
      name: "Burger da Casa", 
      price: "€8,90",
      image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761916869/House_Burger_plxems.png"
    },
    { 
      name: "Cheese Duplo", 
      price: "€9,50",
      image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761916803/Cheese_Burger_j4i0lv.png"
    },
    { 
      name: "Veggie Crispy", 
      price: "€8,20",
      image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761916869/Veggie_Burger_sqxt1c.png"
    },
  ];
  return (
    <div className="h-full w-full bg-white">
      <div className="p-4">
        <div className="mb-3 rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-700">
          {t("screenDeliveryTime")}
        </div>
        <div className="mb-4 text-xl font-semibold text-black">{t("screenHighlights")}</div>

        <div className="space-y-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src={it.image} 
                  alt={it.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-black">{it.name}</div>
                <div className="text-sm text-gray-600">{it.price}</div>
              </div>
              <Button className="bg-[#FF0033] hover:bg-[#CC0026] h-8 px-3 shrink-0 text-white">
                {t("screenAdd")}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-gray-100 p-3">
          <div className="mb-2 text-sm text-gray-700">{t("screenCouponOfDay")}</div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-black">APP10</div>
            <Button className="h-8 bg-[#FF0033] hover:bg-[#CC0026] text-white">
              {t("screenUse")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

