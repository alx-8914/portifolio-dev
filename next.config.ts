/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Gera arquivos estáticos (HTML/CSS/JS)
  trailingSlash: true, // Opcional: ajuda no Netlify
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;