class Shape {
    constructor(shapeColor, fontColor, characters){
        this.shapeColor = shapeColor;
        this.fontColor = fontColor;
        this.characters = characters;
        this.firstLine = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        this.secondLineLast = `fill="${this.shapeColor}" />`
        this.thirdLine=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>`;
        this.forthLine='</svg>';
    }
}


class Circle extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
    }
    createSvg() {
        return `${this.firstLine}
<circle cx="150" cy="100" r="80" ${this.secondLineLast}
${this.thirdLine}
${this.forthLine}`
    }
};


class Square extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
    }
    createSvg() {
        return `${this.firstLine}
<rect x="70" y="20" width="160" height="160" ${this.secondLineLast}
${this.thirdLine}
${this.forthLine}`
    }
};


class Triangle extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
    }
    createSvg() {
        return `${this.firstLine}
<polygon points="70,180 230,180, 150,20" ${this.secondLineLast}
${this.thirdLine}
${this.forthLine}`
    }
};


module.exports = {
  Circle, Square, Triangle 
};