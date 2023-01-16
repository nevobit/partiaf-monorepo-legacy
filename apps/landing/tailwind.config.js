/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'gradient-yelow':"linear-gradient(180deg, #221B00 0%, #4E3D00 100%)"
      },
      gridTemplateColumns: {
        'autoColumn': 'repeat(auto-fit, 160px)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FBD132",
          "primary-content":"#333333",
          secondary: "#FFFFFF",
          accent: "#FFFFFF",
          neutral: "#161616",
          "neutral-content":"#FFFFFF",
          "base-100": "#EFEFEF",
          "base-200":"#DBDBDB",
          "base-300":"#9C9C9C",
          "base-content":"#333333",

          "--rounded-box": "0.75rem",
          "--rounded-badge": "0.75rem",
          "--btn-text-case": "uppercase",
          "--border-btn": "0.063rem"
        },
      }
    ],
  },
}
