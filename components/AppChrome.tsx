"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function AppChrome({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex h-full w-full flex-col text-white", className)}>
      {/* Status + header */}
      <div className="bg-gradient-to-r from-[#1a1a1a] to-[#121212] px-4 pt-3 pb-2 border-b border-white/5">
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>9:41</span>
          <span className="tracking-widest">LTE ●●●</span>
        </div>
        <div className="mt-2 text-lg font-semibold">{title}</div>
      </div>
      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto">{children}</div>
      {/* Nav inferior */}
      <div className="grid grid-cols-4 border-t border-white/5 bg-black/60 text-[11px]">
        {["Início", "Buscar", "Favoritos", "Perfil"].map((t, i) => (
          <button
            key={t}
            className={cn(
              "py-2.5 text-center text-white/60 hover:text-white transition",
              i === 0 && "text-white"
            )}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

