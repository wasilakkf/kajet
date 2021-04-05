const path = require('path');

const PATHS = {
  ROOT: path.resolve(__dirname, '..'),
  DIST: path.resolve(__dirname, '../dist'),
  ENTRY: path.resolve(__dirname, '../src/index.ts'),
  INDEX: path.resolve(__dirname, '../public/index.html'),
};

module.exports = {PATHS};
