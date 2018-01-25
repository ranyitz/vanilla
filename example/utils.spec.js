const { sum, product } = require('./utils');
const { expect } = require('chai');

describe('utils', () => {
  describe('sum', () => {
    it('should return the sum of two numbers', () => {
      expect(sum(1, 2)).to.equal(3);
    });

    it('should return the sum of four numbers', () => {
      expect(sum(1, 2, 3, 4)).to.equal(10);
    });
  });

  describe('product', () => {
    it('should return the product of two numbers', () => {
      expect(product(1, 2)).to.equal(2);
    });

    it('should return the product of four numbers', () => {
      expect(product(1, 2, 3, 4)).to.equal(24);
    });
  });
});
