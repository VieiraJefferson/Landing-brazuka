"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";

const services = [
  { 
    name: "Corte", 
    time: "45 min", 
    price: "€22",
    image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761918231/u7539642511_Haarschnitt__Styling_--v_7_44ff04f0-8900-4d19-a47a-2284d3ae36ca_3_axwyya.png"
  },
  { 
    name: "Coloração", 
    time: "90 min", 
    price: "€49",
    image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761918236/u7539642511_Haarfrbung_--v_7_6a9fa7d8-5822-428f-bf48-cb171318d3a1_3_usfggk.png"
  },
  { 
    name: "Escova", 
    time: "40 min", 
    price: "€18",
    image: "https://res.cloudinary.com/dpilz4p6g/image/upload/v1761918231/u7539642511_Haarfrbung_--v_7_8791ac06-257a-4f86-abf0-415099a95b5e_3_xkafjm.png"
  },
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
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3"
            >
              <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/10">
                <img 
                  src={s.image} 
                  alt={s.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 -mt-1">
                <div className="text-sm font-medium -mb-0.5">{s.name}</div>
                <div className="text-sm text-white/60">
                  {s.time} • {s.price}
                </div>
              </div>
              <Button className="h-7 bg-[#FD2163] hover:bg-[#e31a57] shrink-0">Agendar</Button>
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

