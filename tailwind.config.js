/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#323a45',
        'primary-hover': '#3e4856',
        'primary-light': '#6b93b5',
        'secondary': '#21503b',
        'secondary-light': '#52b788',
        'muted': '#778899',
        'background': '#f6f7f9',
        'surface': '#ffffff',
        'soft-red': '#d3a39f',
        'soft-red-hover': '#a8817d',
        'text-dark': '#1e2530',
        'text-light': '#c8cdd4',
      }
    },
  },
  plugins: [],
}