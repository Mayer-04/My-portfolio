/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(30.6deg, hsla(241, 41%, 62%, 0.3) 28.69%, rgba(124, 130, 177, 0.12) 100%)",
      },
      colors: {
        "mayer-100": "hsla(241, 41%, 62%, 0.3)",
        "mayer-200": "rgba(124, 130, 177, 0.12)",
      },
    },
  },
  plugins: [],
};
