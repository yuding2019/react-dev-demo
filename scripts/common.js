const chalk = require('chalk');

function logError(error) {
  const { errors, warnings } = error;

  console.clear();
  console.log(chalk.redBright('(っ °Д °;)っ  编译失败了\n'));

  if (errors && Array.isArray(errors)) {
    errors.forEach(err => {
      console.error(chalk.redBright('ERROR ') + err.message);
      console.log('\n');
    });
  }

  if (warnings && Array.isArray(warnings)) {
    warnings.forEach(warn => {
      console.warn(chalk.yellowBright('WARNINGS ') + warn.message);
      console.log('\n');
    });
  }
  
  if (!errors && !warnings) {
    console.error(error);
  }
}

function logSuccess(port, host) {
  console.clear();

  console.log('\n服务启动成功了，你可以愉快的编码啦  o((>ω< ))o\n')
  console.log(`${chalk.green('本地地址：')} http://localhost:${port}`);
  host && console.log(`${chalk.green('局域网地址：')} http://${host}:${port}\n`);
}

module.exports = {
  logError,
  logSuccess,
}
