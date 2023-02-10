const Shapes = require('./shapes.js');


describe('Circle', () => {
  describe('createSvg', () => {
    it('should return true', () => {
      const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="75" fill="yellow" />
<text x="150" y="115" font-size="40" text-anchor="middle" fill="black">ABC</text>
</svg>`;
      const circle = new Shapes.Circle("yellow", "black", "ABC");
      expect(circle.createSvg()).toEqual(expectedResult);
    });
  });
});


describe('Square', () => {
  describe('createSvg', () => {
    it('should return true', () => {
      const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="75" y="25" width="150" height="150" fill="yellow" />
<text x="150" y="115" font-size="40" text-anchor="middle" fill="black">ABC</text>
</svg>`;
      const square = new Shapes.Square("yellow", "black", "ABC");
      expect(square.createSvg()).toEqual(expectedResult);
    });
  });
});


describe('Triangle', () => {
  describe('createSvg', () => {
    it('should return true', () => {
      const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="60,175 240,175 150,25" fill="yellow" />
<text x="150" y="145" font-size="40" text-anchor="middle" fill="black">ABC</text>
</svg>`;
      const triangle = new Shapes.Triangle("yellow", "black", "ABC");
      expect(triangle.createSvg()).toEqual(expectedResult);
    });
  });
});