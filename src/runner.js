const Suite = require('./suite');
const EventEmitter = require('events');

function rewireGlobals(context) {
  global.describe = context.addSuite.bind(context);
  global.it = context.addTest.bind(context);
}

function populateSuites(suites) {
  const suitesQueue = suites.slice(0);

  for (const suite of suitesQueue) {
    rewireGlobals(suite);
    suite.callback();
    suite.suites.forEach(childSuite => suitesQueue.push(childSuite));
  }
}

module.exports = class Runner extends EventEmitter {
  constructor({ reporter }) {
    super();
    this.files = [];
    this.rootSuite = new Suite({ runner: this });
    this.tests = [];
    this.reporter = reporter;
  }

  addFile(filePath) {
    this.files.push(filePath);
  }

  run() {
    this.reporter(this);

    rewireGlobals(this.rootSuite);
    this.files.forEach(require);
    populateSuites(this.rootSuite.suites);

    this.emit('start');
    this.rootSuite.run();
    this.emit('end');
  }
};

