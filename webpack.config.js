const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    path: './public',
    filename: 'bundle.js',
  },
   node: {
    fs: 'empty'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },
    { test: /\.css$/,
      loader: "style!css"
    },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
