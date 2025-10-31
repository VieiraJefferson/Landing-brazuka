"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  children: React.ReactNode;
  className?: string;
  bezelClassName?: string;
};

export default function PhoneMockup({
  children,
  className,
  bezelClassName,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-[320px] rounded-[42px] p-2 bg-gradient-to-b from-neutral-800 to-neutral-900 shadow-2xl",
        className
      )}
    >
      {/* Borda externa com brilho */}
      <div className={cn("absolute inset-0 rounded-[42px] ring-1 ring-white/10")} />
      {/* Notch */}
      <div className="absolute left-1/2 top-2 h-5 w-32 -translate-x-1/2 rounded-b-2xl bg-black/70" />
      {/* Botão lateral */}
      <div className="absolute -right-1 top-24 h-10 w-[6px] rounded-r bg-neutral-700" />
      <div className="absolute -right-1 top-40 h-20 w-[6px] rounded-r bg-neutral-700" />

      {/* Bezel interno */}
      <div className={cn("relative z-10 h-full w-full rounded-[34px] bg-black p-2", bezelClassName)}>
        {/* Tela */}
        <div className="h-full w-full overflow-hidden rounded-[28px] bg-[#0c0c0c]">
          {children}
        </div>
      </div>
    </div>
  );
}

