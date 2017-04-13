var path = require('path');
var webpack = require('webpack');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devtool: 'source-map',
  entry: './src/app.js',
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: __dirname,
    port: 3000
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
        enforce: 'pre',
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
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.js$/,
        include: resolve('src'),
        loader: 'babel-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]);
}