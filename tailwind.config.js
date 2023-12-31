/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    fontFamily: {
      markScript: ['Marck Script', "cursive"],
      poppins: ['Poppins', "sans-serif"],
      merienda:['Merienda', "cursive"]
    },
    extend: {
      borderRadius: {
        'none': '0',
        'xs': '6px',
        'sm': '8px',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '12px',
        'lg': '16px',
        'full': '9999px',
        'xl': '24px',
        '2xl': '40px',
      },
      colors: {
        'primary':'#F8F8F8',
        'secondary':'#414042',
        'tertiary':'#BEBEBE',
        'accent': '#FF595D',
        'secondaryAccent': '#DB3B47',
        'halfWhite': '#F5F5F5',
        'bg-tab':'#F0F0F0;'
      },
      maxWidth: {
        '4col': '305px',
      }
    },
  },
  plugins: [],
}

