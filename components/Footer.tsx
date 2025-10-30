"use client";

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-[#0a0a0a] text-center border-t border-[#2a2a2a]">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Jefferson Vieira — Todos os direitos reservados.
      </p>
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <a href="#about" className="text-[#B60238] hover:underline">Sobre</a>
        <a href="#portfolio" className="text-[#B60238] hover:underline">Portfólio</a>
        <a href="#contact" className="text-[#B60238] hover:underline">Contato</a>
      </div>
    </footer>
  );
}

