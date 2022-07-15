const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@app(.*)$': '<rootDir>/src',
        '^@store(.*)$': '<rootDir>/src/store',
      },
    },
  },
};
