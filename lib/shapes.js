class Shape {
    constructor(shapeColor, fontColor, characters){
        this.shapeColor = shapeColor;
        this.fontColor = fontColor;
        this.characters = characters;
        this.firstLine = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        this.secondLineFirst = ""
        this.secondLineLast = `fill="${this.shapeColor}" />`
        this.thirdLine=`<text x="150" y="115" font-size="40" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>`;
        this.forthLine='</svg>';
    }
    createSvg() {
        return `${this.firstLine}
${this.secondLineFirst} ${this.secondLineLast}
${this.thirdLine}
${this.forthLine}`
    }
    render() {
        return `${this.secondLineFirst} ${this.secondLineLast}`
    }
}


class Circle extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
        this.secondLineFirst='<circle cx="150" cy="100" r="75"';
    }
};


class Square extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
        this.secondLineFirst='<rect x="75" y="25" width="150" height="150"';
    }
};


class Triangle extends Shape {
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
        this.secondLineFirst='<polygon points="60,175 240,175 150,25"';
        this.thirdLine=`<text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>`;
    }
};


module.exports = {
  Circle, Square, Triangle 
};