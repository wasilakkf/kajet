const {PATHS} = require('./consts');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: PATHS.ENTRY
  },
  output: {
    filename: '[name].[hash].js',
    path: PATHS.DIST,
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: PATHS.INDEX})
  ]
};  