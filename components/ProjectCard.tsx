import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl glass-strong overflow-hidden">
      {project.imageUrl ? (
        <div className="relative w-full aspect-video bg-black/40">
          <Image
            src={project.imageUrl}
            alt={`Screenshot do ${project.name}`}
            fill
            className="object-contain"
          />
        </div>
      ) : (
        <div className="h-56 bg-gradient-to-br from-accent/20 to-accent2/10 flex items-center justify-center text-gray-500 text-sm">
          Screenshot do sistema
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{project.name}</h3>
        <p className="text-accent2 text-sm mb-3">{project.tagline}</p>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <ul className="text-sm text-gray-400 list-disc list-inside mb-4 space-y-1">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="text-sm px-4 py-2 rounded-lg border border-white/10 hover:border-accent2/50 transition-colors"
            >
              Ver no GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="text-sm px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors"
            >
              Ver projeto
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
