process.env.NODE_ENV = 'production';

const chalk = require('chalk');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseConfig = require('../config/webpack.config');
const buildConfig = require('../config/buildConfig');
const { logError } = require('./common');

function compile(compiler) {
  return new Promise((res, rej) => {
    compiler.run((err, stats) => {
      if (err) {
        rej(err);
        return;
      }

      if (stats.hasErrors()) {
        const {
          errors,
          warnings,
        } = stats.toJson({
          all: false,
          warnings: true,
          errors: true,
        });
        rej({ errors, warnings });
        return;
      }

      console.clear();
      console.log(chalk.greenBright(`编译成功！你可以部署啦  (●'◡'●)\n`));
      res();
    });
  });
}

async function build() {
  console.clear();
  console.log('编译中...');

  const config = merge(baseConfig(process.env.NODE_ENV), buildConfig);
  try {
    const compiler = webpack(config);
    await compile(compiler);
  } catch (error) {
    console.clear();
    logError(error);
    process.exit(1);
  }
}

build();
