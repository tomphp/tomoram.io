'use strict';

module.exports = {
  clearMocks: true,
  setupFiles: [
    '<rootDir>/enzyme.config.js',
    '<rootDir>/fetch.config.js',
  ],
  verbose: false,
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(png|gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
