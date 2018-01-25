module.exports.sum = (...args) =>
  args.reduce((sum, num) => sum + num, 0);

module.exports.product = (...args) =>
  args.reduce((product, num) => product * num, 1);
