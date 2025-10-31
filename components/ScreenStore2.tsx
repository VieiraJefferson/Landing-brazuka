"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

const products = [
  { name: "Camiseta Básica", price: "€29,90", oldPrice: "€39,90" },
  { name: "Calça Jeans", price: "€59,90", oldPrice: "€79,90" },
  { name: "Tênis Esportivo", price: "€89,90", oldPrice: "€119,90" },
  { name: "Jaqueta Casual", price: "€74,90", oldPrice: "€99,90" },
];

export default function ScreenStore2() {
  return (
    <div className="h-full w-full bg-[radial-gradient(70%_50%_at_60%_10%,rgba(253,33,99,0.2),transparent),linear-gradient(#0c0c0c,#0c0c0c)]">
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Promoções</div>
            <div className="text-xs text-white/60">Até 40% OFF</div>
          </div>
          <Button variant="outline" className="border-white/20 text-white text-xs h-7">
            Ver Tudo
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {products.map((p) => (
            <div key={p.name} className="rounded-xl border border-white/5 bg-white/5 p-3">
              <div className="mb-2 aspect-square w-full rounded-lg bg-gradient-to-br from-white/10 to-white/0 relative">
                <span className="absolute top-1 right-1 bg-[#FD2163] text-[10px] px-1.5 py-0.5 rounded text-white font-semibold">
                  OFF
                </span>
              </div>
              <div className="text-sm">{p.name}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="text-xs font-semibold">{p.price}</div>
                <div className="text-[10px] text-white/40 line-through">{p.oldPrice}</div>
              </div>
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

