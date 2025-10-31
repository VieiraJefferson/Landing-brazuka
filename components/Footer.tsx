"use client";
import { useTranslation } from "@/lib/i18n";
import { scrollToCTA } from "@/lib/scrollToCTA";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="py-10 px-6 bg-[#0a0a0a] text-center border-t border-[#2a2a2a]">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Jefferson Vieira — {t("footerRights")}.
      </p>
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <a href="#about" className="text-[#B60238] hover:underline">{t("navAbout")}</a>
        <a href="#portfolio" className="text-[#B60238] hover:underline">{t("navPortfolio")}</a>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            scrollToCTA();
          }}
          className="text-[#B60238] hover:underline"
        >
          {t("navContact")}
        </a>
      </div>
    </footer>
  );
}

