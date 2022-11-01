// TODO: Include packages needed for this application - Completed.
const inquirer = require('inquirer');
const fs = require('fs');

// console.log("run test");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of this project?',
    }, 
    {
        type: 'input',
        name: 'creator',
        message: 'Who created this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief, but descriptive summary of this project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the instructions to install this program?',
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Please provide the end user or potential contributor with clear useage information.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Tell us how to contribute to this open-source project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the instructions to test this program?',
    },
]

inquirer
    .prompt((questions))

    .then((response) => 
    console.log(response)
    );

    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
