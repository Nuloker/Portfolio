"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass backdrop-blur-md">
      <div className="section flex items-center justify-between !py-4">
        <span className="font-semibold tracking-tight">Gui Leonel</span>

        <nav className="hidden md:flex gap-6 text-sm text-gray-400">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4 text-sm">
          <Link href="https://github.com/Nuloker" target="_blank" className="hover:text-accent2">
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-accent2">
            LinkedIn
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glassmorphism backdrop-blur-md border-t border-white/5">
          <nav className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-300">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-6 pt-4 border-t border-white/5">
              <Link href="https://github.com/Nuloker" target="_blank" className="hover:text-accent2">
                GitHub
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-accent2">
                LinkedIn
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
