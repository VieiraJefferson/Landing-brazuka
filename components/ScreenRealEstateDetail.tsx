"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function ScreenRealEstateDetail() {
  const { t } = useTranslation();
  
  return (
    <div className="h-full w-full bg-[radial-gradient(80%_60%_at_50%_0%,rgba(62,162,125,0.2),transparent),linear-gradient(#0c0c0c,#0c0c0c)] p-4 flex flex-col justify-between">
      {/* Imagem do imóvel */}
      <div>
        <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden mb-4 bg-white/10">
          <img 
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
            alt={t("screenProperty")}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-1">{t("screenProperty")}</h3>
        <div className="flex items-center gap-1 text-sm text-white/60 mb-2">
          <MapPin size={14} />
          <span>{t("screenLisbon")} - {t("screenCentral")}</span>
        </div>
        <div className="text-lg font-semibold text-[#FDFDFD] mb-3">€280.000</div>

        <p className="text-sm text-white/60 mb-4">
          {t("screenModernApartmentDesc")}
        </p>
      </div>

      <div>
        <Button className="w-full h-10 bg-[#3EA27D] hover:bg-[#358F6F] text-base text-white">
          {t("screenTalkToBroker")}
        </Button>
      </div>
    </div>
  );
}

