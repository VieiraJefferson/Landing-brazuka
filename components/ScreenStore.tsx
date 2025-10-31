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
    <div className="h-full w-full bg-[#FDF7ED]">
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <input
            placeholder="Buscar..."
            className="w-full rounded-lg bg-[#FBEFDA] px-3 py-2 text-sm outline-none placeholder:text-gray-400 border border-gray-200"
          />
          <Button variant="outline" className="border-gray-300 text-white bg-[#1C1C1C] hover:bg-[#2C2C2C]">
            Filtros
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-gray-200 bg-[#FBEFDA] p-3">
              <div className="mb-2 aspect-square w-full rounded-lg overflow-hidden bg-gray-100">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-sm text-black font-medium">{p.name}</div>
              <div className="text-xs text-gray-600">{p.price}</div>
              <Button className="mt-2 h-8 w-full bg-[#1C1C1C] hover:bg-[#2C2C2C] text-white">
                Comprar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

