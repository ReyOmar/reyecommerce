/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // ya no "tailwindcss", sino el plugin PostCSS oficial:
    '@tailwindcss/postcss': {},
    // autoprefixer para añadir prefixes que Tailwind no gestiona:
    autoprefixer: {},
  },
};

export default config;
