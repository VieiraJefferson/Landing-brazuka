"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

const professionals = [
  { name: "Ana Silva", specialty: "Corte & Cor", rating: "4.9", available: true },
  { name: "Maria Santos", specialty: "Escova & Alisamento", rating: "4.8", available: true },
  { name: "Julia Costa", specialty: "Coloração Premium", rating: "5.0", available: false },
];

export default function ScreenSalon2() {
  return (
    <div className="h-full w-full bg-[radial-gradient(80%_50%_at_40%_0%,rgba(253,33,99,0.2),transparent),linear-gradient(#0c0c0c,#0c0c0c)]">
      <div className="p-4">
        <div className="mb-4 rounded-xl bg-white/5 p-3">
          <div className="text-sm text-white/70 mb-1">Nossos Profissionais</div>
          <div className="text-xs text-white/60">Escolha seu especialista favorito</div>
        </div>

        <div className="space-y-3">
          {professionals.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3"
            >
              <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-br from-white/20 to-white/5" />
              <div className="flex-1">
                <div className="font-medium text-sm">{p.name}</div>
                <div className="text-xs text-white/60 mt-0.5">{p.specialty}</div>
                <div className="text-xs text-white/70 mt-1">⭐ {p.rating}</div>
              </div>
              <Button 
                className={`h-8 px-3 bg-[#FD2163] hover:bg-[#e31a57] ${
                  !p.available && "opacity-50 cursor-not-allowed"
                }`}
                disabled={!p.available}
              >
                {p.available ? "Agendar" : "Indisponível"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl bg-white/5 p-3">
          <div className="text-xs text-white/70 mb-2">Avaliações Recentes</div>
          <div className="text-sm">"Atendimento excelente! ⭐⭐⭐⭐⭐"</div>
          <div className="text-xs text-white/60 mt-1">- Cliente satisfeito</div>
        </div>
      </div>
    </div>
  );
}

