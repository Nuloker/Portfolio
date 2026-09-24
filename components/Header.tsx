import Link from "next/link";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glassmorphism backdrop-blur-md">
      <div className="section flex items-center justify-between !py-4">
        <span className="font-semibold tracking-tight">Gui Leonel</span>
        <nav className="hidden md:flex gap-6 text-sm text-gray-400">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-4 text-sm">
          <Link href="https://github.com/Nuloker" target="_blank" className="hover:text-accent2">
            GitHub
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-accent2">
            LinkedIn
          </Link>
        </div>
      </div>
    </header>
  );
}
