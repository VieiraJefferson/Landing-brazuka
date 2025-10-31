"use client";
import { useTranslation } from "@/lib/i18n";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LanguageSelector() {
  const { language, setLanguage } = useTranslation();

  const languages = [
    { code: "pt" as const, name: "PT", flag: "🇧🇷" },
    { code: "en" as const, name: "EN", flag: "🇬🇧" },
    { code: "de" as const, name: "DE", flag: "🇩🇪" },
  ];

  return (
    <div className="relative group">
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {languages.find((l) => l.code === language)?.flag} {languages.find((l) => l.code === language)?.name}
        </span>
      </Button>
      
      <div className="absolute right-0 top-full mt-2 w-40 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors flex items-center gap-2 ${
              language === lang.code
                ? "bg-white/10 text-white"
                : "text-white/70 hover:text-white"
            } ${lang.code === languages[0].code ? "rounded-t-lg" : ""} ${
              lang.code === languages[languages.length - 1].code ? "rounded-b-lg" : ""
            }`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
            {language === lang.code && (
              <span className="ml-auto text-xs">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

