const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8888
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HPD Violations',
      template: 'src/index.ejs'
    })
//    new webpack.optimize.UglifyJsPlugin({})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/, 
        loader: "style!css",
        exclude: /node_modules/
      }
    ]
  }
};
