/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      sm: '560px',
      lg: '767px',
      xl: '992px',
      '2xl': '1200px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

