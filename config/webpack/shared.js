// Note: You must restart bin/webpack-watcher for changes to take effect

var path    = require('path')
var webpack = require('webpack')
var glob    = require('glob')
var extname = require('path-complete-extname')

module.exports = {
  entry: glob.sync(path.join('..', 'app', 'javascript', 'packs', '*.js*')).reduce(
    function(map, entry) {
      var basename = path.basename(entry, extname(entry))
      map[basename] = entry
      return map
    }, {
      'react_bundle': ['react', 'react-dom', 'redux', 'react-redux', 'react-router', 'react-router-redux']
    }
  ),

  output: { filename: '[name].js', path: path.join('..', 'public', 'packs') },

  module: {
    rules: [
      { test: /\.coffee(.erb)?$/, loader: "coffee-loader" },
      /*
      {
        test: /\.jsx?(.erb)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          configFile: '../config/.eslintrc.json'
        },
      },
      */
      {
        test: /\.jsx?(.erb)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'react',
            [ 'latest', { 'es2015': { 'modules': false } } ]
          ],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.erb$/,
        enforce: 'pre',
        loader: 'rails-erb-loader',
        options: {
          runner: '../bin/rails runner'
        }
      },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('react_bundle')
  ],

  resolve: {
    extensions: [ '.js', '.coffee' ],
    modules: [
      path.resolve('../app/javascript'),
      path.resolve('../vendor/node_modules')
    ]
  },

  resolveLoader: {
    modules: [ path.resolve('../vendor/node_modules') ]
  }
}
