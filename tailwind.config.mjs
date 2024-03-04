/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP Variable", "sans-serif"],
      },
      backgroundImage: {
        "radial-gradient":
          "background: radial-gradient(50% 50% at 50% 50%, #FEF3A4 0%, #BA891F 100%)",
      },
    },
  },
  plugins: [],
};
