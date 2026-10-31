/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0f",
        coal: "#1a1a1d",
        smoke: "#36393f",
        riot: "#a020f0",
        vio: "#9b59b6",
        pulse: "#00e5ff",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,229,255,0.3)",
        riot: "0 0 30px rgba(160,32,240,0.35)",
      },
    },
  },
  plugins: [],
};
