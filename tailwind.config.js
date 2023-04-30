/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00d7ac",
          secondary: "#4ed2e1",
          accent: "#d5bbba",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#93c5fd",
          success: "#4ade80",
          warning: "#fdba74",
          error: "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
