export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "erp-gym",
    name: "ERP GYM",
    tagline: "Sistema de gestão para academias",
    description:
      "Aplicação full-stack desenvolvida para centralizar a gestão operacional e financeira de academias, com autenticação JWT, RBAC, multi-tenancy, gestão de alunos, matrículas, treinos, avaliações físicas, financeiro e auditoria global de ações.",
    stack: [
      "Next.js",
      "React",
      "NestJS",
      "TypeScript",
      "TypeORM",
      "MySQL",
      "Docker",
      "JWT",
    ],
    features: [
      "Autenticação JWT com RBAC (RolesGuard + @Roles())",
      "Multi-tenancy",
      "Dashboards adaptados por papel de usuário",
      "Módulos de treinos e avaliações físicas",
      "Relatórios com exportação em CSV",
      "Auditoria global via interceptor",
    ],
    githubUrl: "https://github.com/Nuloker/erp-gym",
    featured: true,
    imageUrl: "/projects/erp-gym.png",
  },

  {
    slug: "portfolio-handebol",
    name: "Portfólio Handebol",
    tagline: "Apresentacao do meu trabalho como jogador de handebol",
    description:
      "Aplicação front-end desenvolvida para apresentar meu trabalho como jogador de handebol, com informações sobre minha carreira, conquistas, estatísticas e vídeos de jogos.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    features: [
      "Página inicial com informações sobre minha carreira e conquistas",
    ],
    githubUrl: "https://github.com/Nuloker/handebol.portfolio.guilherme.leonel",
    liveUrl: "https://nuloker.github.io/handebol.portfolio.guilherme.leonel/",
    featured: true,
    imageUrl: "/projects/portfolio-handebol.png",
  },
];
