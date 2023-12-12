/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#93A5CF",
        "light-blue-two": "#E4EfE9",
        "dark-blue": "#2e484e",
      },
      fontFamily: {
        main: ["Moirai One"],
        secondary: ["Raleway"],
      },
      backgroundImage: {
        "geometric-form": "url('./public/geometrico.svg')",
      },
    },
  },
  plugins: [],
};
