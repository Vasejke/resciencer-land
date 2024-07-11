/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-block": "url('@/assets/backgrounds/Background.png')",
        resume: "url('@/assets/backgrounds/bg_resume.png')",
        last: "url('@/assets/backgrounds/last_bg.png')",
      }),
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      container: {
        margin: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      colors: {
        color1: "#00A7FF",
        color2: "#103752",
        gray: {
          DEFAULT: "#999999",
        },
        white: {
          default: "#E8EBEF",
        },
      },
      linearGradientColors: ["color1", "color2"],
    },
  },
  plugins: [],
};
