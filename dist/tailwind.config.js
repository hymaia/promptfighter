/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./dist/**/*.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      colors: {
        russian: "#231955",
        pink: "#FF87A1",
        asure: "#3CE7F0",
        lavander: "#BFB6FC",
        chartreuse: "#DCF42F",
      },
      fontFamily: {
        sans: ['Greycliff CF', 'Source Code Pro'],
        serif: ['Merriweather', 'serif'],
      },
    },
    plugins: [],
  };
  