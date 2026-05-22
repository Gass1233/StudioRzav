import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        rzav: {
          black: "#080806",
          ink: "#13130f",
          graphite: "#272724",
          smoke: "#8f908a",
          pearl: "#f7f5ef",
          ivory: "#ebe7dc",
          stone: "#c9c4b8",
          brass: "#a88f58",
          clay: "#876f62"
        }
      },
      fontFamily: {
        display: [
          "Barlow Condensed",
          "Barlow Semi Condensed",
          "Barlow",
          "Arial Narrow",
          "sans-serif"
        ],
        semi: [
          "Barlow Semi Condensed",
          "Barlow Condensed",
          "Barlow",
          "sans-serif"
        ],
        accent: [
          "Cormorant Garamond",
          "Times New Roman",
          "serif"
        ],
        sans: [
          "Barlow",
          "Barlow Semi Condensed",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      boxShadow: {
        soft: "0 22px 80px rgba(0, 0, 0, 0.24)"
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
