/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '1/48': '48%',
      },
      height: {
        '500': '500px'
      },
      maxHeight: {
        '500': '500px'
      },
      fontFamily: {
        'oswald': ['var(--font-oswald)'],
        'hauora': ['var(--font-hauora)'],
        'nordique': ['var(--font-nordique)']
      },
      colors: {
        'jud-brown': {
          light: '#5F3529',
          DEFAULT: '#5F3529',
          dark: '#9D776C'
        },
        'jud-sunset': {
          light: '#F2D0A4',
          DEFAULT: '#F2D0A4',
          dark: '#B79D7C'
        },
        'jud-beige': {
          light: '#FFECCC',
          DEFAULT: '#FFECCC',
          dark: '#A89C89'
        },
        'jud-green-tea': {
          light: '#C8D6AF',
          DEFAULT: '#C8D6AF',
          dark: '#8B937C'
        },
        'jud-blue': {
          light: '#48639C',
          DEFAULT: '#48639C',
          dark: '#30436C'
        },
        'jud-brown-secondary': {
          light: '#9D776C',
          DEFAULT: '#9D776C',
          dark: '#5F3529'
        },
        'jud-warning': {
          light: '#ffc107',
          DEFAULT: '#ffc107',
          dark: '#ffc107'
        }
      },
    },
  },
  plugins: [],
}
