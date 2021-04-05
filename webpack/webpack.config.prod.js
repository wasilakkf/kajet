const {merge} = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');

module.exports = merge(webpackBaseConfig, {
  devtool: false
});