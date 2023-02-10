// 0. Import Circle, Square and Triangle classes from shapes.js
const Shapes = require('./shapes.js');


// 1. Test each shape class using render() method - check if the shape & its color part of SVG file is created as expected
// 1-1. Test Circle class
describe('Circle', () => { 
  describe('render', () => {
    it('should return true', () => {
      const expectedResult = '<circle cx="150" cy="100" r="75" fill="blue" />';
      const circle = new Shapes.Circle();
      circle.setColor("blue");
      expect(circle.render()).toEqual(expectedResult);
    });
  });
});

// 1-2. Test Square class
describe('Square', () => {
  describe('render', () => {
    it('should return true', () => {
      const expectedResult = '<rect x="75" y="25" width="150" height="150" fill="blue" />';
      const square = new Shapes.Square();
      square.setColor("blue");
      expect(square.render()).toEqual(expectedResult);
    });
  });
});

// 1-3. Test Triangle class
describe('Triangle', () => {
  describe('render', () => {
    it('should return true', () => {
      const expectedResult = '<polygon points="60,175 240,175 150,25" fill="blue" />';
      const triangle = new Shapes.Triangle();
      triangle.setColor("blue");
      expect(triangle.render()).toEqual(expectedResult);
    });
  });
});


// 2. Test each shape class using createSvg() method - check if the whole SVG file is created as expected
// 2-1. Test Circle class
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

// 2-2. Test Square class
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

// 2-3. Test Triangle class
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