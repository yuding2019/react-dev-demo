const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

const { resolve } = require('./utils');
const base = require('./webpack.config.base');

const _env = 'production';

const prod = {
  mode: _env,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
    nodeEnv: _env,
  }
};

module.exports = merge(base(_env), prod);
