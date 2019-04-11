'use strict'

module.exports = {
  entry: './frontend/app.js',
  target: 'web',
  output: {
    path: __dirname + '/static',
    filename: 'app.js'
  }
};
