import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#13293d',
        secondary: '#003566',
        textColor: '#ffffff',
        textColorDark : "#00111c",
        backGroundColor: '#00111c',
        gridBg: '#001d3d',
      },
    },
  },
  plugins: [],
} satisfies Config;
