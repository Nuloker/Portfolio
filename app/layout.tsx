import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gui Leonel | Desenvolvedor Full Stack",
  description:
    "Portfólio de Guilherme Leonel, desenvolvedor Full Stack — Next.js, NestJS, TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="bg-blobs">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        <div className="bg-grid" />
        {children}
      </body>
    </html>
  );
}
