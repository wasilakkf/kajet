const {merge} = require('webpack-merge');
const webpack = require('webpack');
const {PATHS} = require('./consts');
const webpackBaseConfig = require('./webpack.config.base');

module.exports = merge(webpackBaseConfig, {
  devtool: false,
  devServer: {
    contentBase: PATHS.DIST,
    compress: true,
    open: true,
    overlay: true,
    stats: 'minimal'
  },
  plugins: [
    new webpack.EvalSourceMapDevToolPlugin({
      exclude: /node_modules/
    })
  ]
});