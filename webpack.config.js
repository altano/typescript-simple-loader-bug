/// <reference path="./typings/node/node.d.ts" />

var path = require('path');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8081',
    'webpack/hot/dev-server',
    path.resolve(ROOT_PATH, 'main'),
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts'],
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'typescript-simple-loader' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel?stage=1'],
        include: path.resolve(ROOT_PATH, 'app'),
      },
    ],
  },
};
