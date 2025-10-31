"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function ScreenRealEstate() {
  const { t } = useTranslation();
  
  const properties = [
    { 
      nameKey: "screenModernApartment",
      locationKey: "screenCentral", 
      price: "€245.000", 
      rooms: 2,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=300&fit=crop"
    },
    { 
      nameKey: "screenHouseWithGarden",
      locationKey: "screenSuburb", 
      price: "€380.000", 
      rooms: 4,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop"
    },
    { 
      nameKey: "screenRenovatedStudio",
      locationKey: "screenHistoric", 
      price: "€125.000", 
      rooms: 1,
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop"
    },
  ];

  return (
    <div className="h-full w-full bg-[radial-gradient(75%_55%_at_50%_15%,rgba(62,162,125,0.2),transparent),linear-gradient(#0c0c0c,#0c0c0c)]">
      <div className="p-4 pb-6">
        <div className="mb-4 flex items-center gap-2">
          <input
            placeholder={t("screenSearchProperty")}
            className="flex-1 rounded-lg bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40"
          />
          <Button variant="outline" className="border-white/20 text-white bg-[#3EA27D] hover:bg-[#358F6F]">
            <Search size={16} />
          </Button>
        </div>

        <div className="mb-4 rounded-xl bg-white/5 p-3">
          <div className="mb-2 text-sm text-white/70">{t("screenQuickFilters")}</div>
          <div className="flex gap-2">
            <button className="rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white">
              {t("screenSale")}
            </button>
            <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-white/60 hover:bg-white/10">
              {t("screenRent")}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {properties.slice(0, 2).map((p) => (
            <div
              key={p.nameKey}
              className="flex gap-2 rounded-xl border border-white/5 bg-white/5 p-2"
            >
              <div className="h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
                <img 
                  src={p.image} 
                  alt={t(p.nameKey)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-medium text-xs">{t(p.nameKey)}</div>
                <div className="text-[10px] text-white/60 mt-0.5">{t(p.locationKey)} • {p.rooms} {t("screenRooms")}</div>
                <div className="flex items-center justify-between mt-1.5">
                  <div className="text-sm font-semibold text-[#FDFDFD]">{p.price}</div>
                  <Button className="h-6 px-2 bg-[#3EA27D] hover:bg-[#358F6F] text-[10px] text-white">
                    {t("screenView")}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl bg-white/5 p-3 text-center">
          <div className="text-xs text-white/70 mb-2">{t("screenScheduleVisit")}</div>
          <Button className="h-8 w-full bg-[#3EA27D] hover:bg-[#358F6F] text-white text-sm">
            {t("screenContactAgent")}
          </Button>
        </div>
      </div>
    </div>
  );
}

