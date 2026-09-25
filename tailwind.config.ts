import scrollbar from 'tailwind-scrollbar';
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Caminho para os arquivos do App Router
  ],
  safelist: [
    'scrollbar-thin',
    'scrollbar-thumb-gray-500',
    'scrollbar-track-gray-200',
    // Adicione outras classes de scrollbar que você utiliza
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
  plugins: [
    scrollbar,
  ],
};