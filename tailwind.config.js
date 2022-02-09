module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%' : {
            transform: 'scale(1.1) rotate(3deg)',
          },
          '50%': {
            transform: 'scale(0.9) rotate(-3deg)',
          }
        },
      },
    },
  },
  plugins: [],
}
