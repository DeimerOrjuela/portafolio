module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Esto es crucial para que Tailwind reconozca tus archivos
  ],
  theme: {
    extend: {
      colors: {
        "olive-green": "#06011a",
      },
    },
  },
  plugins: [],
};
