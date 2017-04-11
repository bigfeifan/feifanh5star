var webpack = require('webpack');
var path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  watch: true,
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/main.js'
  },

  devServer: {
    contentBase: path.join(__dirname),
    port: 3000,
  },
  resolve: {
    extensions: ['.js','.json'],
    alias: {
      'src': resolve('src'),
      'common': resolve('src/common')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        include: resolve('src'),
        use: [{
          loader: 'eslint-loader',
          options: {
             formatter: require('eslint-friendly-formatter')
          }
        }]
      },
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
        include: resolve('src'),
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