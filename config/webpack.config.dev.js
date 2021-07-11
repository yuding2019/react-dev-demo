const { merge } = require('webpack-merge');

const { resolve, resolveIp } = require('./utils');
const base = require('./webpack.config.base');

const devConfig = {
  mode: 'development',
  devServer: {
    contentBase: resolve('public'),
    compress: true,
    port: 3000,
    disableHostCheck: true,
    host: '0.0.0.0',
    public: resolveIp(),
    after: function (app, server, compiler) {
      console.clear();
      console.log('local: http://localhost:3000');
      console.log(`public: http://${resolveIp()}:3000`);
    }
  }
}

module.exports = merge(base, devConfig);
