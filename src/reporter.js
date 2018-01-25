const chalk = require('chalk');

module.exports = (runner) => {
  let depth = 0;
  let pass = 0;
  let fail = 0;

  const log = message => console.log('  '.repeat(depth) + message);

  runner.on('start', () => {
    console.log(chalk.green('start testing!'));
    console.log('');
  });

  runner.on('start-suite', ({ title }) => {
    depth++;
    log(title);
  });

  runner.on('end-suite', () => {
    depth--;
  });

  runner.on('test-pass', ({ title }) => {
    pass++;
    log(chalk.green('  ✓ ') + chalk.grey(title));
  });

  runner.on('test-fail', ({ title, error }) => {
    fail++;
    log(chalk.red(` ${fail}) ${title}`));
    log('');
    log(chalk.yellow(error.toString()));
    log('');
  });

  runner.on('end', () => {
    if (fail === 0) {
      console.log('');
      console.log(chalk.green(` ${pass} tests pass`));
      process.exit(0);
    } else {
      console.log('');
      console.log(chalk.red('  tests failed 😥'));
      console.log('');

      console.log(chalk.green(`  pass: ${pass}`));
      console.log(chalk.red(`  fail: ${fail}`));
      process.exit(1);
    }
  });
};
