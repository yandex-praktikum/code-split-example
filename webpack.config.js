const path = require('path');

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  mode: 'production',
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    minimize: false,
    splitChunks: false,
  },
  context: __dirname,
};

module.exports = config;
