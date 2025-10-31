"use client";
import { useTranslation } from "@/lib/i18n";

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="py-10 px-6 bg-[#0a0a0a] text-center border-t border-[#2a2a2a]">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Jefferson Vieira — {t("footerRights")}.
      </p>
    </footer>
  );
}

