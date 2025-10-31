"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

export default function ScreenRestaurant2() {
  const items = [
    { 
      name: "Pizza Margherita", 
      price: "€12,50", 
      rating: "4.8",
      image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761916805/Pizza_Magarita_qz1rk0.png"
    },
    { 
      name: "Pasta Carbonara", 
      price: "€11,90", 
      rating: "4.9",
      image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761916845/Pasta_Cabornara_cpqe66.png"
    },
    { 
      name: "Risotto Funghi", 
      price: "€13,20", 
      rating: "4.7",
      image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761916804/Risotto_yffqn7.png"
    },
  ];
  return (
    <div className="h-full w-full bg-[radial-gradient(80%_60%_at_50%_0%,rgba(253,33,99,0.25),transparent),linear-gradient(#0c0c0c,#0c0c0c)]">
      <div className="p-4">
        <div className="mb-3 rounded-xl bg-white/5 px-3 py-2 text-sm text-white/80">
          ⭐ Restaurante avaliado 4.9 • Entrega grátis acima de €20
        </div>
        <div className="mb-4 text-xl font-semibold">Mais Pedidos</div>

        <div className="space-y-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="rounded-xl border border-white/5 bg-white/5 p-3"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
                  <img 
                    src={it.image} 
                    alt={it.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{it.name}</div>
                  <div className="text-xs text-white/60 mt-1">⭐ {it.rating}</div>
                </div>
                <div className="text-lg font-semibold shrink-0">{it.price}</div>
              </div>
              <Button className="w-full bg-[#FD2163] hover:bg-[#e31a57] h-8">
                Adicionar ao Carrinho
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-gradient-to-r from-[#FD2163]/20 to-[#e31a57]/20 border border-[#FD2163]/30 p-3">
          <div className="text-sm font-semibold mb-1">Frete Grátis!</div>
          <div className="text-xs text-white/70">Adicione mais €5,10 para ganhar frete grátis</div>
        </div>
      </div>
    </div>
  );
}

