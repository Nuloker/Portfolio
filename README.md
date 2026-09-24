# Portfólio — Gui

Portfólio pessoal construído com Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Como rodar

```bash
npm install
npm run dev
```

Depois acesse http://localhost:3000

## Estrutura

- `app/` — página principal (App Router)
- `components/` — Header, Hero, About, Technologies, Projects, Education, Contact, Footer
- `data/projects.ts` — lista de projetos (já com o ERP GYM preenchido)

## Para personalizar

1. **`components/Hero.tsx`** e **`components/About.tsx`** — troque o texto de apresentação.
2. **`components/Contact.tsx`** e **`components/Header.tsx`** — troque os links de e-mail, GitHub e LinkedIn.
3. **`data/projects.ts`** — adicione novos projetos seguindo o formato do ERP GYM.
4. **`components/ProjectCard.tsx`** — troque o placeholder "Screenshot do sistema" por uma imagem real (coloque em `public/` e use `<Image />` do Next.js).
5. **`components/Education.tsx`** — preencha com sua formação real.

## Deploy

Pode ser publicado gratuitamente na Vercel (`vercel.com`), conectando o repositório do GitHub.
