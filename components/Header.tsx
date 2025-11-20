"use client";
import LanguageSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-auto">
        {!isHomePage && (
          <Button
            onClick={() => router.push("/")}
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/10 shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </Button>
        )}
      </div>
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 pointer-events-auto">
        <LanguageSelector />
      </div>
    </header>
  );
}

