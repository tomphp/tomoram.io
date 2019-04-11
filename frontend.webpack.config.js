'use strict'

module.exports = {
  entry: './frontend/app.js',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: __dirname + '/static',
    filename: 'app.js'
  }
};
