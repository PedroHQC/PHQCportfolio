module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Caminho para os arquivos do App Router
  ],
  theme: {
    extend: {
      animation: {
        'custom-spin': 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};