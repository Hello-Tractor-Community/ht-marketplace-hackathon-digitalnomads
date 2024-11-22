import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: "var(--font-manrope)",
        merriweather: "var(--font-merriweather)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pri
      },
    },
  },
  plugins: [],
} satisfies Config;
