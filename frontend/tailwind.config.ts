import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "cus-bg-dark-white": "#f4f2ee",
      },
      clipPath: {
        "custom-diagonal": "polygon(0 0, 100% 0, 100% 100%, 0 60%)",
        "bottom-diagonal": "polygon(0 0, 100% 50%, 100% 100%, 0 100%)",
      },
      screens: {
        "md-xl": "900px",
        "extra-sm": "470px",
        "very-sm": "390px",
        "lg-1": "900px",
        "lg-2": "1160px",
        "lg-3": "1270px",
      },
      fontSize: {
        small: "12px",
        medium: "14px",
      },
      textColor: {
        para: "#00000099",
        "icon-black": "#000000bf",
        "e6-color": "#000000e6",
      },
      keyframes: {
        squeezeUp: {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        squeezeUp: "squeezeUp 5s linear",
      },
      textUnderlineOffset: {
        7: "7px",
      },
    },
  },
  plugins: [],
};
export default config;
