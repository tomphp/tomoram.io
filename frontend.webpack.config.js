'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
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
    }),
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(env.API_URL),
    }),
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
  },
});
