process.env.NODE_ENV = 'development';

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const baseConfig = require('../config/webpack.config');
const devConfig = require('../config/devServer');
const { logError, logSuccess } = require('./common');

function createCompiler(config, {
  public,
  port,
}) {
  const compiler = webpack(config);

  let compileHasError = false;
  // let typeCheckHasError = false;
  compiler.hooks.done.tap('done', stats => {
    if (stats.hasErrors()) {
      compileHasError = true;
      const {
        errors,
        warnings,
      } = stats.toJson({
        all: false,
        errors: true,
        warnings: true,
      });
      console.clear();
      logError({ errors, warnings });
      return;
    } else {
      compileHasError = false;
    }

    if (!compileHasError) {
      logSuccess(port, public);
    }
  });

  return compiler;
}

function start() {
  let dev;
  let compiler;
  try {
    console.log(`正在启动开发服务，请稍等...  ${chalk.green('^o^')}\n`);

    const base = baseConfig(process.env.NODE_ENV);
    const { port, public } = devConfig;

    compiler = createCompiler(base, {
      port,
      public,
    });

    dev = new WebpackDevServer(compiler, devConfig);
    dev.listen(port, public, err => devServerHandler(err));

    close(dev);
  } catch (error) {
    console.log(chalk.red('(っ °Д °;)っ  服务启动失败了') + '\n');
    logError(error);
    dev.close();
    process.exit(1);
  }
}

function devServerHandler(err) {
  if (err) {
    console.log(err);
    return;
  }
}

function close(server) {
  ['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      server.close();
      console.log('服务已关闭');
      process.exit();
    });
  });
}

start();
