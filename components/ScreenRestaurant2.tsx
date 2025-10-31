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
    <div className="h-full w-full bg-white">
      <div className="p-4">
        <div className="mb-3 rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-700">
          ⭐ Restaurante avaliado 4.9 • Entrega grátis acima de €20
        </div>
        <div className="mb-4 text-xl font-semibold text-black">Mais Pedidos</div>

        <div className="space-y-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="rounded-xl border border-gray-200 bg-gray-50 p-3"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                  <img 
                    src={it.image} 
                    alt={it.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-black">{it.name}</div>
                  <div className="text-xs text-gray-600 mt-1">⭐ {it.rating}</div>
                </div>
                <div className="text-lg font-semibold shrink-0 text-black">{it.price}</div>
              </div>
              <Button className="w-full bg-[#FF0033] hover:bg-[#CC0026] h-8 text-white">
                Adicionar ao Carrinho
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-red-50 border border-red-200 p-3">
          <div className="text-sm font-semibold mb-1 text-black">Frete Grátis!</div>
          <div className="text-xs text-gray-700">Adicione mais €5,10 para ganhar frete grátis</div>
        </div>
      </div>
    </div>
  );
}

