export default function Contact() {
  return (
    <section id="contato" className="section text-center">
      <h2 className="text-2xl font-bold mb-4">
        Vamos <span className="gradient-text">conversar?</span>
      </h2>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        Estou aberto a novas oportunidades e colaborações. Entre em contato
        por qualquer um dos canais abaixo.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:guiilhermeleonel@gmail.com"
          className="px-5 py-3 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
        >
          E-mail
        </a>
        <a
          href="https://github.com/Nuloker"
          target="_blank"
          className="px-5 py-3 rounded-lg border border-white/10 hover:border-white/30 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="px-5 py-3 rounded-lg border border-white/10 hover:border-white/30 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
