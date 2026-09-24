const groups = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["NestJS", "Node.js", "REST APIs", "JWT / RBAC"] },
  { title: "Banco de dados", items: ["MySQL", "TypeORM"] },
  { title: "Ferramentas", items: ["Docker", "Git / GitHub", "CI/CD"] },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="section">
      <h2 className="text-2xl font-bold mb-8">
        Tecnologias <span className="gradient-text">& Ferramentas</span>
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="p-5 rounded-xl glass">
            <h3 className="text-sm text-accent2 font-semibold mb-3">{g.title}</h3>
            <ul className="space-y-1 text-sm text-gray-400">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
