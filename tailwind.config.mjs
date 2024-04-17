/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#17202A",
        secondary: "#ecc94b",
        transparent: "transparent",
        current: "currentColor",
        slate: colors.slate,
        stone: colors.stone,
        blue: colors.blue,
        green: colors.green,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
