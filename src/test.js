module.exports = class Test {
  constructor({ title, callback, runner }) {
    this.title = title;
    this.callback = callback;
    this.runner = runner;
  }

  run() {
    try {
      this.callback();
      this.runner.emit('test-pass', { title: this.title });
    } catch (error) {
      this.runner.emit('test-fail', { title: this.title, error });
    }
  }
};

