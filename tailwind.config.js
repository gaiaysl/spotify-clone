/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#1cdf63",
        backdrop:"#121212",
        link:"#b3b3b3",
        footer:"#181818",
        active:"#282828",
        button:"#2a2929",
        heart:"#5320f1",
        navlink:"#202020  "
      }
    },
  },
  plugins: [],
}
