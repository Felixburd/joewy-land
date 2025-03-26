/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'morph': 'morph 12s ease-in-out infinite',
      },
      keyframes: {
        morph: {
          '0%': {
            'background-position': '10% 20%, 80% 30%, 50% 80%',
          },
          '33%': {
            'background-position': '20% 40%, 70% 50%, 60% 70%',
          },
          '66%': {
            'background-position': '30% 10%, 90% 60%, 40% 90%',
          },
          '100%': {
            'background-position': '10% 20%, 80% 30%, 50% 80%',
          },
        },
      },
    },
  },
  plugins: [],
} 