const Shapes = require('./shapes.js');
// const Square = require('./shapes.js');
// const Triangle = require('./shapes.js');

describe('Circle', () => {
  describe('Circle test 1', () => {
    it('should return true', () => {
      const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="yellow" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text>
      </svg>`;
      const circle = new Shapes.Circle();
      expect(circle.createSvg("yellow", "black", "ABC")).toEqual(expectedResult);
    });
  });
});