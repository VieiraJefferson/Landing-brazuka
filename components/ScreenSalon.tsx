"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Corte & Styling", time: "45 min", price: "€22" },
  { name: "Coloração", time: "90 min", price: "€49" },
  { name: "Escova Modelada", time: "40 min", price: "€18" },
];

export default function ScreenSalon() {
  return (
    <div className="h-full w-full bg-[radial-gradient(80%_50%_at_40%_0%,rgba(253,33,99,0.2),transparent),linear-gradient(#0c0c0c,#0c0c0c)]">
      <div className="p-4">
        <div className="mb-4 rounded-xl bg-white/5 p-3">
          <div className="text-sm text-white/70">Próximo horário livre</div>
          <div className="text-lg font-semibold">Hoje, 16:30</div>
        </div>

        <div className="space-y-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-3"
            >
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-white/60">
                  {s.time} • {s.price}
                </div>
              </div>
              <Button className="h-8 bg-[#FD2163] hover:bg-[#e31a57]">Agendar</Button>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-white/70">
          {["Hoje", "Amanhã", "Sábado"].map((d, i) => (
            <button
              key={d}
              className={`rounded-lg border border-white/10 px-2 py-2 ${
                i === 0 ? "bg-white/10 text-white" : "hover:bg-white/10"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

