import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#202020",
        paper: "#F5F5F2",
        muted: "#737373",
        line: "#E5E5E0",
        accent: "#789477",
        "accent-hover": "#627D62",
        highlight: "#E8EFE6",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
