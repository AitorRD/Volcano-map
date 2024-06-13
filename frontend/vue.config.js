const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://volcano-map-frontend.onrender.com', // Reemplaza con la URL de tu servidor Django
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
});