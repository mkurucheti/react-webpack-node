var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
	  ]
	}
}