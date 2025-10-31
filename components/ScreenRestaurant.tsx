"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

export default function ScreenRestaurant() {
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
    <div className="h-full w-full bg-[radial-gradient(80%_60%_at_50%_0%,rgba(253,33,99,0.25),transparent),linear-gradient(#0c0c0c,#0c0c0c)]">
      <div className="p-4">
        <div className="mb-3 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/80">
          Entrega em ~ 25 min • Frete: €1,90
        </div>
        <div className="mb-4 text-xl font-semibold">Destaques</div>

        <div className="space-y-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
                <img 
                  src={it.image} 
                  alt={it.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-white/60">{it.price}</div>
              </div>
              <Button className="bg-[#FD2163] hover:bg-[#e31a57] h-8 px-3 shrink-0">
                Adicionar
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-white/5 p-3">
          <div className="mb-2 text-sm text-white/70">Cupom do dia</div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">APP10</div>
            <Button variant="outline" className="h-8 border-white/20 text-white">
              Usar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

