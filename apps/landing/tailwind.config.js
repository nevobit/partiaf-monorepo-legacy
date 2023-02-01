/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/forms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-yelow": "linear-gradient(180deg, #221B00 0%, #4E3D00 100%)",
      },
      gridTemplateColumns: {
        autoColumn: "repeat(auto-fit, 160px)",
      },
      backgroundImage: {
        "hero-mobile": "url('/images/heroMobile.jpg')",
        "hero-desktop": "url('/images/heroDesktop.jpg')",
        "heroBusiness-desktop": "url('/images/BackgroundForBusiness.png')",
        "footer-mobile": "url('/images/bgGradientMobile.jpg')",
        "footer-destop": "url('/images/bgGradientDesktop.jpg')",
      },
      dropShadow: {
        '3xl': '0px 6px 22px rgba(0, 0, 0, 0.2)',
      },
      boxShadow: {
        '3xl': '0px 0px 12px 8px rgba(46,46,46,0.95)',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
  },
  plugins: [require("daisyui"),require('@tailwindcss/line-clamp')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FBD132",
          "primary-content": "#333333",
          secondary: "#333333",
          "secondary-content": "#FBD132",
          accent: "#FFFFFF",
          neutral: "#161616",
          "neutral-content": "#FFFFFF",
          "base-100": "#EFEFEF",
          "base-200": "#DBDBDB",
          "base-300": "#9C9C9C",
          "base-400":"#676767",
          "base-500":"#C0C0C1",
          "base-content": "#333333",
          error: "#FF5481",

          "--rounded-box": "0.75rem",
          "--rounded-badge": "0.75rem",
          "--btn-text-case": "uppercase",
          "--border-btn": "0.063rem",
        },
      },
    ],
  },
};
