"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

const properties = [
  { title: "Apartamento Central", price: "€280.000", location: "Lisboa" },
  { title: "Casa Moderna", price: "€420.000", location: "Porto" },
  { title: "Studio Compacto", price: "€180.000", location: "Faro" },
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
            className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3"
          >
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-white/60">{p.location}</div>
            </div>
            <div className="text-sm font-semibold text-[#FD2163]">{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

