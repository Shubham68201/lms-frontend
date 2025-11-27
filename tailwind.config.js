/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- ENSURE THIS COVERS ALL YOUR FILES
  ],
  theme: {
    extend: {},
  },
  plugins: [
  require("daisyui")
  ],
}