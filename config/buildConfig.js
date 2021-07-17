const TerserPlugin = require('terser-webpack-plugin');

const build = {
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
  }
};

module.exports = build;
