"use client";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-auto">
        <LanguageSelector />
      </div>
    </header>
  );
}

