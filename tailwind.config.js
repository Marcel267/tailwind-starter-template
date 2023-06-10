/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: 'hsl(262, 80%, 50%)',
        secondary: 'hsl(316, 70%, 50%)',
        accent: 'hsl(175, 70%, 41%)',
        neutral: 'hsl(218, 18%, 12%)',
        base: 'hsl(220, 18%, 20%)',
        info: 'hsl(198, 93%, 60%)',
        success: 'hsl(158, 64%, 52%)',
        warning: 'hsl(43, 96%, 56%)',
        error: 'hsl(0, 91%, 71%)'
      }
    },
  },
  plugins: [],
}
