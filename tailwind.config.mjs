import contactMobile from "./src/images/assets/contact-image-mobile.jpg";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans JP Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
