/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
      },
      backgroundColor: {
        primary: "hsla(241, 41%, 62%, 0.3)",
      },
    },
  },
  plugins: [],
};
