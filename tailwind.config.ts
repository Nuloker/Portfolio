import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         background: "#0a0a0f",
         surface: "#12121a",
         accent: "#16a34a",
         accent2: "#4ade80",
      },
    },
  },
  plugins: [],
};
export default config;
