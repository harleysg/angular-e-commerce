/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
    './projects/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      animation: {
        'background-shine': 'background-shine 2s linear infinite'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "products": "repeat(auto-fit, minmax(220px, 1fr))",
      },
      keyframes: {
        'background-shine': {
          from: {
            backgroundPosition: '0 0'
          },
          to: {
            backgroundPosition: '-200% 0'
          }
        }
      }
    }
  },
  plugins: []
}
