// Define the parent class "Shape"
class Shape {
    constructor(shapeColor, fontColor, characters){
        this.shapeColor = shapeColor;
        this.fontColor = fontColor;
        this.characters = characters;
        this.firstLine = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'; // This will be the first line of SVG file
        this.secondLineFirst = "" // This will be the first half of the second line of SVG file
        this.secondLineLast = `fill="${this.shapeColor}" />` // This will be the seconf half of the second line of SVG file
        this.thirdLine=`<text x="150" y="115" font-size="40" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>`; // This will be the third line of SVG file
        this.forthLine='</svg>'; // This will be the forth/last line of SVG file
    }
    createSvg() { // Method which creates a whole SVG file
        return `${this.firstLine}
${this.secondLineFirst} ${this.secondLineLast}
${this.thirdLine}
${this.forthLine}`
    }   
    setColor(color) { // Method which sets the color of the shape (This method is for testing purpose *shapes.test.js)
        this.secondLineLast = `fill="${color}" />`
    }
    render() { // Method which creates only the second line of SVG file (This method is for testing purpose *shapes.test.js)
        return `${this.secondLineFirst} ${this.secondLineLast}`
    }
}


// Define a child class "Circle"
class Circle extends Shape { // Inherit properties and functions from its parent class "Shape"
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
        this.secondLineFirst='<circle cx="150" cy="100" r="75"'; // This part should be different from its parent class (polymorphism)
    }
};


// Define a child class "Square"
class Square extends Shape { // Inherit properties and functions from its parent class "Shape"
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
        this.secondLineFirst='<rect x="75" y="25" width="150" height="150"'; // This part should be different from its parent class (polymorphism)
    }
};


// Define a child class "Triangle"
class Triangle extends Shape { // Inherit properties and functions from its parent class "Shape"
    constructor(shapeColor, fontColor, characters){
        super(shapeColor, fontColor, characters)
        this.secondLineFirst='<polygon points="60,175 240,175 150,25"'; // This part should be different from its parent class (polymorphism)
        this.thirdLine=`<text x="150" y="145" font-size="40" text-anchor="middle" fill="${this.fontColor}">${this.characters}</text>`; // This part should be different from its parent class (polymorphism)
    }
};


// Export shape classes so that other JS files (index.js and shapes.test.js) can use these classes 
module.exports = {
  Circle, Square, Triangle 
};