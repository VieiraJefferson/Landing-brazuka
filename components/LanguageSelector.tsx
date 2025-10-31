"use client";
import { useTranslation } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Use setTimeout to avoid immediate closing on mobile
      setTimeout(() => {
        document.addEventListener("click", handleClickOutside, true);
        document.addEventListener("touchend", handleClickOutside, true);
      }, 0);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("touchend", handleClickOutside, true);
    };
  }, [isOpen]);

  const languages = [
    { code: "pt" as const, name: "PT", flag: "🇧🇷" },
    { code: "en" as const, name: "EN", flag: "🇬🇧" },
    { code: "de" as const, name: "DE", flag: "🇩🇪" },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  const handleLanguageChange = (langCode: typeof language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm border border-white/10 shadow-lg"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">
            {currentLang.flag} {currentLang.name}
          </span>
        </Button>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 text-white hover:text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 shadow-lg touch-manipulation"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {currentLang.flag} {currentLang.name}
        </span>
      </Button>
      
      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-2 w-40 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-lg z-[10000]"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageChange(lang.code);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageChange(lang.code);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm active:bg-white/20 transition-colors flex items-center gap-2 touch-manipulation ${
                language === lang.code
                  ? "bg-white/10 text-white"
                  : "text-white/70 active:text-white"
              } ${lang.code === languages[0].code ? "rounded-t-lg" : ""} ${
                lang.code === languages[languages.length - 1].code ? "rounded-b-lg" : ""
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

