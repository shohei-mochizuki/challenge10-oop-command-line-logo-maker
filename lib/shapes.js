class Shape {
    constructor(shapeColor, fontColor, characters){
        this.shapeColor = shapeColor;
        this.fontColor = fontColor;
        this.characters = characters;
        this.firstLine = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        this.secondLineFirst = ""
        this.secondLineLast = `fill="${this.shapeColor}" />`
        this.thirdLine=`<text x="150" y="110" font-size="40" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>`;
        this.forthLine='</svg>';
    }
    createSvg() {
        return `${this.firstLine}
${this.secondLineFirst} ${this.secondLineLast}
${this.thirdLine}
${this.forthLine}`
    }
}


class Circle extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
        this.secondLineFirst='<circle cx="150" cy="100" r="75"';
    }
//     createSvg() {
//         return `${this.firstLine}
// <circle cx="150" cy="100" r="75" ${this.secondLineLast}
// ${this.thirdLine}
// ${this.forthLine}`
//     }
};


class Square extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
    }
    createSvg() {
        return `${this.firstLine}
<rect x="75" y="25" width="150" height="150" ${this.secondLineLast}
${this.thirdLine}
${this.forthLine}`
    }
};


class Triangle extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
        this.thirdLine=`<text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>`;
    }
    createSvg() {
        return `${this.firstLine}
<polygon points="60,175 240,175, 150,25" ${this.secondLineLast}
${this.thirdLine}
${this.forthLine}`
    }
};


module.exports = {
  Circle, Square, Triangle 
};