var webpack = require('webpack');
var path = require('path');

module.exports = {
  watch: true,
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.join(__dirname),
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [['es2015']]
          }
        }]
      }
    ]
  }
}