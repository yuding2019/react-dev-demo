const { resolve, resolveIp } = require('./utils');

const devServer = {
  contentBase: resolve('public'),
  compress: true,
  port: 3000,
  disableHostCheck: true,
  host: '0.0.0.0',
  public: resolveIp(),
  hot: true,
  quiet: true,
}

module.exports = devServer;
