import Link from "next/link";

export default function Hero() {
  return (
    <section className="section flex flex-col items-start justify-center min-h-[80vh] pt-24">
      <p className="text-accent2 text-sm mb-4 tracking-widest uppercase">
        Olá, eu sou
      </p>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Guilherme Leonel <span className="gradient-text">— Desenvolvedor Full Stack</span>
      </h1>
      <p className="text-gray-400 max-w-xl mb-8">
        Construo aplicações web com foco em arquitetura, backend robusto e
        experiências de usuário eficientes. Atualmente desenvolvendo o ERP GYM, um sistema completo de gestão para academias.
      </p>
      <div className="flex gap-4">
        <Link
          href="#projetos"
          className="px-5 py-3 rounded-lg bg-accent hover:bg-accent/80 transition-colors font-medium"
        >
          Ver projetos
        </Link>
        <Link
          href="https://github.com/Nuloker"
          target="_blank"
          className="px-5 py-3 rounded-lg border border-white/10 hover:border-white/30 transition-colors font-medium"
        >
          GitHub
        </Link>
      </div>
    </section>
  );
}
