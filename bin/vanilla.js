#! /usr/bin/env node

const Runner = require('../src/runner.js');
const reporter = require('../src/reporter.js');

const runner = new Runner({ reporter });

runner.addFile('../example/utils.spec.js');

runner.run();
