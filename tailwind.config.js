/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#323a45',
        'accent': '#3f6184',
        'muted': '#778899',
        'background': '#f6f7f9',
        'surface': '#ffffff',
        'soft-red': '#d3a39f',
        'text-dark': '#1e2530',
        'text-light': '#c8cdd4',
        'light-blue': '#9ad0ff',
      }
    },
  },
  plugins: [],
}