class Circle {};
Circle.createSvg = (shapeColor, fontColor, characters) => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${fontColor}">${characters}</text>
    </svg>`}

class Square {};
Square.createSvg = (shapeColor, fontColor, characters) => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${fontColor}">${characters}</text>
    </svg>`}

class Triangle {};
Triangle.createSvg = (shapeColor, fontColor, characters) => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="70,180 230,180, 150,20" fill="${shapeColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${fontColor}">${characters}</text>
    </svg>`}

module.exports = {
  Circle, Square, Triangle 
};

// constructor(shapeColor, fontColor, characters){
//   this.shapeColor = shapeColor;
//   this.fontColor = fontColor;
//   this.characters = characters;
// }