const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
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
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: resolve(__dirname, 'public'),
    publicPath: '/'
  },
}
