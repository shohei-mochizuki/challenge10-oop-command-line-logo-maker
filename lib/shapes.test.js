const Shapes = require('./shapes.js');


describe('Circle', () => {
  describe('createSvg', () => {
    it('should return true', () => {
      const expectedResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="yellow" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text>
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
<rect x="70" y="20" width="160" height="160" fill="yellow" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text>
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
<polygon points="70,180 230,180, 150,20" fill="yellow" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">ABC</text>
</svg>`;
      const triangle = new Shapes.Triangle("yellow", "black", "ABC");
      expect(triangle.createSvg()).toEqual(expectedResult);
    });
  });
});