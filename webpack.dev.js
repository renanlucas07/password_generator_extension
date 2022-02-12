const { merge } = require('webpack-merge');
const path = require('path');
const config = require('./webpack.config.js');

module.exports = merge(config, 
  {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
  },
);
