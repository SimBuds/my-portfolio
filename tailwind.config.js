/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f29377',
        accent: '#3b82f6',
        secondary: '#f9fafb',
      },
    },
  },
  plugins: [],
}
