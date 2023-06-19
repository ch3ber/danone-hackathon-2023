/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)']
      },
      fontSize: {
        h1: '69px',
        h2: '55px',
        h3: '44px',
        h4: '36px',
        h5: '28px',
        body: '18px',
        button: '14px',
        caption: '12px'
      },
      colors: {
        general: {
          bg: '#F4F2F2',
          loginBar: '#324BAA'
        },
        brand: {
          50: '#E8F3FF',
          100: '#d5e8ff',
          200: '#b3d3ff',
          300: '#85b4ff',
          400: '#5686ff',
          500: '#2f59ff',
          600: '#0c26ff',
          700: '#0017eb',
          800: '#061ccd',
          900: '#10249f',
          950: '#0a135c'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
