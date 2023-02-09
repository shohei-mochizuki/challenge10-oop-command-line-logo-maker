// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const htmlContent = require("./utils/generateMarkdown");


// Create an array of questions for user input
const questions = [
{type: 'input',
message: 'What is the title of your project?',
name: 'title'},
{type: 'input',
message: 'Describe your project briefly.',
name: 'description'},
{type: 'input',
message: 'Please explain about installation',
name: 'installation'},
{type: 'input',
message: 'Please explain how to use it',
name: 'usage'},
{type: 'input',
message: 'How can other engineers contribute to your application?',
name: 'contribution'},
{type: 'input',
message: 'Please explain how to test this application.',
name: 'test'},
{type: 'list',
message: 'Choose a license for your application.',
name: 'license',
choices: ["MIT", "Apache", "GPL"]},
{type: 'input',
message: 'What is your GitHub username?',
name: 'github'},
{type: 'input',
message: 'What is your email address?',
name: 'email'},
];


// Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(fileName, htmlContent.generateMarkdown(data), 
    (err) => err ? console.error(err) : console.log('README is successfully created!'));
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions) // Prompt window shows up first
  .then((response) => {
    writeToFile("README_sample.md", response); // Then sampleREADME.md file will be created
  })
}


// Function call to initialize app
init();
