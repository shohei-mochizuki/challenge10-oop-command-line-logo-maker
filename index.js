// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const shapeSvg = require("./lib/shapes.js");


// Create an array of questions for user input
const questions = [
{type: 'input',
message: 'What characters do you want to include in thd logo? (Up to 3 characters)',
name: 'characters'},
{type: 'input',
message: 'Which color do you want to use for the font? (Please type a color keyword or a hexadecimal number)',
name: 'font_color'},
{type: 'list',
message: 'Choose a shape for your logo.',
name: 'shape',
choices: ["circle ○", "square □", "triangle △"]},
{type: 'input',
message: 'Which color do you want to use for the shape? (Please type a color keyword or a hexadecimal number)',
name: 'shape_color'},
];


// Create a function to write README file
function createLogo(fileName, data) {
  switch (data.shape) {
    case "circle ○":
      // const circle = new shapeSvg.Circle(data.shape_color, data.font_color, data.characters);
      fs.writeFile(fileName, (new shapeSvg.Circle(data.shape_color, data.font_color, data.characters)).createSvg(), 
      (err) => err ? console.error(err) : console.log('Generated logo.svg'));
      break;
    case "square □":
      fs.writeFile(fileName, (new shapeSvg.Square(data.shape_color, data.font_color, data.characters)).createSvg(), 
      (err) => err ? console.error(err) : console.log('Generated logo.svg'));
      break;
    case "triangle △":
      fs.writeFile(fileName, (new shapeSvg.Triangle(data.shape_color, data.font_color, data.characters)).createSvg(), 
      (err) => err ? console.error(err) : console.log('Generated logo.svg'));
      break;
  }
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions) // Prompt window shows up first
  .then((response) => {
    createLogo("./examples/logo.svg", response); // Then logo.svg file will be created
  })
}


// Function call to initialize app
init();
