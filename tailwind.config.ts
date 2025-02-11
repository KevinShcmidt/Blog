import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#00a7e1',
        secondary: '#007ea7',
        textColor: '#ffffff',
        backGroundColor: '#00111c',
        gridBg: '#003459',
      },
    },
  },
  plugins: [],
} satisfies Config;
