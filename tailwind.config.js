/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'lg2': '960px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        "float-delay-200": "float 3s ease-in-out infinite 0.2s",
        "float-delay-600": "float 3s ease-in-out infinite 0.6s",
      },
    },
  },
  plugins: [],
}

