'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    new CopyWebpackPlugin([
      {from: 'static'},
    ]),
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
  },
};
