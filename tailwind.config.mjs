/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,  // Used mainly for text color
      blue: {
        50: "#e6f8ff",
        100: "#ccf1ff",
        400: "#00b3ff",
        500: "#0099e6",
      }, // Accent colors, used mainly for star color, heading and buttons

      teal: {
        100: "#e6fffa",
        200: "#b2f5ea",
        300: "#00d5c0",
        400: "#00bfac",
        500: "#00a693",
        600: "#009688",
      }, // Primary colors, used mainly for links, buttons and svg icons
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      },
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
