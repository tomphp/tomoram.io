'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/app.js',
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tomoram.io',
      template: './frontend/index.hbs',
    }),
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
  },
};
