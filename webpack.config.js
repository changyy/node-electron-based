// https://webpack.js.org/
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'src', 'html', 'mainRenderer'),
    },
    allowedHosts: 'all',
    compress: true,
    port: 9000,
  },
  entry: {
    mainRendererHTML: './src/html/mainRenderer/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'bundle', 'html', 'mainRenderer'),
    filename: 'index.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/html/mainRenderer/index.html', to: path.resolve(__dirname, 'bundle', 'html', 'mainRenderer'), },
        { from: './src/main', to: path.resolve(__dirname, 'bundle', 'main'), },
        { from: './src/preload', to: path.resolve(__dirname, 'bundle', 'preload'), },
        { from: './src/renderer', to: path.resolve(__dirname, 'bundle', 'renderer'), },
      ]
    }),
  ]
};
