// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const shapeSvg = require("./lib/shapes");


// Create an array of questions for user input
const questions = [
{type: 'input',
message: 'What characters do you want to include in thd logo? (Up to 3 characters)',
name: 'characters'},
{type: 'input',
message: 'Which color do you want to use for the font',
name: 'font_color'},
{type: 'list',
message: 'Choose a shape for your logo.',
name: 'shape',
choices: ["circle", "square", "triangle"]},
{type: 'input',
message: 'Which color do you want to use for the shape?',
name: 'shape_color'},
];


// Create a function to write README file
function createLogo(fileName, data) {
  switch (data.shape) {
    case "circle":
      
      break;
  
    default:
      break;
  }
  
  
  fs.appendFile(fileName, svgContent.generateSvg(data), 
    (err) => err ? console.error(err) : console.log('README is successfully created!'));
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions) // Prompt window shows up first
  .then((response) => {
    createLogo("./example/logo.svg", response); // Then logo.svg file will be created
    console.log(response);
  })
}


// Function call to initialize app
init();
