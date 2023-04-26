/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: '#6b7280',
        primaryBackground: '#f0f9ff',
        primaryText: '#0f172a',
        secondary: '',
        secondaryBackground: '#fff',
        secondaryText: '#64748b',
        dark: '#0f172a',
        darkLight: '#64748b'
      }
    },
  },
  plugins: [],
}

