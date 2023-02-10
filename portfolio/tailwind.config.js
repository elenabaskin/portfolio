/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#bdd3ff',
        purple: '#c6bdff',
        yellow: '#ffe8a3',
        green: '#d1f4af',
        pink: '#ffc7c2',
        orange: '#fcc49c',
      },
      fontFamily: {
        header: ['Lora', 'serif'],
        body: ['Lato', 'sans-serif'],
        game: ['VT323', 'monospace'],
        hand: ['Homemade Apple', 'cursive'],
      },
    },
  },
  plugins: [],
};
