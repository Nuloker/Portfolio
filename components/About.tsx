export default function About() {
  return (
    <section id="sobre" className="section">
      <h2 className="text-2xl font-bold mb-6">
        Sobre <span className="gradient-text">mim</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 text-gray-400">
        <p>
          Sou desenvolvedor full-stack, atualmentee desenvolvendo o ERP GYM — um sistema de gestão para academias construído módulo
          por módulo, com foco em arquitetura sólida, autenticação segura e
          código organizado.
        </p>
        <p>
          Gosto de trabalhar tanto no backend quanto no frontend, entendendo o
          produto de ponta a ponta: da modelagem do banco de dados às
          interfaces que os usuários realmente usam no dia a dia.
        </p>
      </div>
    </section>
  );
}
