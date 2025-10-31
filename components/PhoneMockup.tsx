"use client";
import React from "react";

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto aspect-[9/17.67] w-[360px] rounded-[42px] bg-gradient-to-b from-[#1c1c1c] to-[#0f0f0f] p-[4px] ${className || ""}`}
    >
      {/* Tela */}
      <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black">
        {children}

        {/* Dynamic Island (notch) */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-full shadow-inner shadow-black flex items-center justify-center">
          <div className="w-[8px] h-[8px] bg-[#1b1b1b] rounded-full mr-[8px]" />
          <div className="w-[36px] h-[8px] bg-[#111] rounded-full" />
        </div>
      </div>
    </div>
  );
}

