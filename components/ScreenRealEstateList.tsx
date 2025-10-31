"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

const properties = [
  { 
    title: "Apartamento Central", 
    price: "€280.000", 
    location: "Lisboa",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=300&fit=crop"
  },
  { 
    title: "Casa Moderna", 
    price: "€420.000", 
    location: "Porto",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&h=300&fit=crop"
  },
  { 
    title: "Studio Compacto", 
    price: "€180.000", 
    location: "Faro",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop"
  },
];

export default function ScreenRealEstateList() {
  return (
    <div className="h-full w-full bg-[radial-gradient(70%_50%_at_60%_10%,rgba(253,33,99,0.25),transparent),linear-gradient(#0c0c0c,#0c0c0c)] p-4">
      {/* Filtros */}
      <div className="mb-3 flex items-center gap-2">
        <input
          placeholder="Buscar por cidade..."
          className="w-full rounded-lg bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40"
        />
        <Button variant="outline" className="border-white/20 text-white">
          Filtros
        </Button>
      </div>

      {/* Lista */}
      <div className="space-y-3">
        {properties.map((p) => (
          <div
            key={p.title}
            className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3"
          >
            <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
              <img 
                src={p.image} 
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-white/60">{p.location}</div>
            </div>
            <div className="text-sm font-semibold text-[#FD2163] shrink-0">{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

