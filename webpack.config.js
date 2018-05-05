const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/js/app.jsx'),
    vendor: [ 'react', 'prop-types', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'babel-polyfill', 'whatwg-fetch' ],
    styles: path.resolve(__dirname, 'app/css/main.scss'),
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compact',
            },
          },
        ]),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].min.css',
      allChunks: true,
    }),
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
    }),
  ],
};
