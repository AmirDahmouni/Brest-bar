/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryColor: '#B066F3',
        secondColor: '#201F23',
        grayColor: "rgb(44 44 44/var(--tw-bg-opacity))",
      }
    },
  },
  plugins: [],
}

