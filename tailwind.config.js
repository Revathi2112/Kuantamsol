/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        plum: "#46304F",
        "plum-900": "#2A1B33",
        magenta: "#C42B8F",
        violet: "#7F3F98",
        mist: "#F8F4FC",
      },
      fontFamily: {
        head: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        sora: ["Sora", "system-ui", "sans-serif"], // kept from the original project
      },
    },
  },
  plugins: [],
};
