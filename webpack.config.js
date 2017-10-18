var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'mybundle.js',
    publicPath: '/build'
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
	  loaders: [      
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
	  ]
	}
}