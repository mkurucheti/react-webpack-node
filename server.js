var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(9080, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:9080');
  });
