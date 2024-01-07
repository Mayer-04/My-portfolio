/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        gabarito: ["Gabarito", "sans-serif"],
      },
      backgroundImage: {
        "gradient-100":
          "linear-gradient(30.6deg, hsla(241, 41%, 62%, 0.3) 28.69%, rgba(124, 130, 177, 0.12) 100%)",
        "gradient-200":
          "radial-gradient(77.6% 94.7% at 81.2% 50%, #3D3F8A 0%, #1d1d1d 100%)",
        "gradient-300":
          "linear-gradient(64deg, rgb(117, 195, 255) 0%, rgb(110, 231, 183) 100%)",
      },
      colors: {
        "mayer-100": "hsla(241, 41%, 62%, 0.3)",
        "mayer-200": "rgba(124, 130, 177, 0.12)",
        "mayer-300": "#1D1D1D",
      },
    },
  },
  plugins: [],
};

// primary-gradient
