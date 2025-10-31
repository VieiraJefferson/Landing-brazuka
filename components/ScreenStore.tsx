"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

const products = [
  { 
    name: "Argola Minimal", 
    price: "€14,90",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=300&h=300&fit=crop"
  },
  { 
    name: "Colar Aurora", 
    price: "€24,90",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop"
  },
  { 
    name: "Pulseira Flux", 
    price: "€19,90",
    image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761917341/u7539642511_erstelle_mir_das_bild_von_einem_armband_aus_gold__81a9c92d-e679-4f4c-96d7-80124b133446_2_lhqyhk.png"
  },
  { 
    name: "Anel Prisma", 
    price: "€12,90",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop"
  },
];

export default function ScreenStore() {
  return (
    <div className="h-full w-full bg-[radial-gradient(70%_50%_at_60%_10%,rgba(253,33,99,0.2),transparent),linear-gradient(#0c0c0c,#0c0c0c)]">
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <input
            placeholder="Buscar..."
            className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40"
          />
          <Button variant="outline" className="border-white/20 text-white">
            Filtros
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-white/5 bg-white/5 p-3">
              <div className="mb-2 aspect-square w-full rounded-lg overflow-hidden bg-white/10">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm">{p.name}</div>
              <div className="text-xs text-white/60">{p.price}</div>
              <Button className="mt-2 h-8 w-full bg-[#FD2163] hover:bg-[#e31a57]">
                Comprar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

