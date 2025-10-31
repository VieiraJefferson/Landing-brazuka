"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { IoWifiOutline } from "react-icons/io5";

export function AppChrome({
  title,
  children,
  className,
  theme = "dark",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}) {
  const isLight = theme === "light";
  
  return (
    <div className={cn("flex h-full w-full flex-col", isLight ? "text-black" : "text-white", className)}>
      {/* Status + header */}
      <div className={cn(
        "px-3 sm:px-4 pt-3 pb-2 border-b",
        isLight 
          ? "bg-white border-gray-200" 
          : "bg-gradient-to-r from-[#1a1a1a] to-[#121212] border-white/5"
      )}>
        <div className={cn("flex items-center justify-between text-xs", isLight ? "text-gray-600" : "text-white/70")}>
          <span>9:41</span>
          <IoWifiOutline className="w-5 h-5 mr-2" />
        </div>
        <div className={cn("mt-2 text-lg font-semibold", isLight && "text-black")}>{title}</div>
      </div>
      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto">{children}</div>
      {/* Nav inferior */}
      <div className={cn(
        "grid grid-cols-4 border-t text-[11px]",
        isLight
          ? "border-gray-200 bg-gray-50"
          : "border-white/5 bg-black/60"
      )}>
        {["Início", "Buscar", "Favoritos", "Perfil"].map((t, i) => (
          <button
            key={t}
            className={cn(
              "py-2.5 text-center transition",
              isLight
                ? i === 0 
                  ? "text-black font-medium" 
                  : "text-gray-600 hover:text-black"
                : i === 0 
                  ? "text-white" 
                  : "text-white/60 hover:text-white"
            )}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

