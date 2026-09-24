import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <h2 className="text-2xl font-bold mb-8">
        Projetos <span className="gradient-text">em destaque</span>
      </h2>
      <div className="grid md:grid-cols-1 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
