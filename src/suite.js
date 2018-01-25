const Test = require('./test');

module.exports = class Suite {
  constructor({ title, callback, runner }) {
    this.title = title;
    this.runner = runner;
    this.callback = callback;
    this.suites = [];
    this.tests = [];
  }

  addSuite(title, callback) {
    this.suites.push(new Suite({ title, callback, runner: this.runner }));
  }

  addTest(title, callback) {
    this.tests.push(new Test({ title, callback, runner: this.runner }));
  }

  run() {
    this.tests.forEach(test => test.run());
    this.suites.forEach((suite) => {
      this.runner.emit('start-suite', (suite));
      suite.run();
      this.runner.emit('end-suite');
    });
  }
};

