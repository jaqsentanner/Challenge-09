// TODO: Include packages needed for this application - Completed.
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');


// console.log("run test"); Testing that everything was working within node and the command line. Completed. 

// TODO: Create an array of questions for user input - Completed.
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
    {
        type: 'list',
        name: 'license',
        message: 'How is this project licensed?',
        choices: ['MIT', 'ISC', 'Apache License 2.0', 'Creative Commons', 'GNUPLv3', 'Mozilla Public License 2.0', 'This project is unlicensed'],
    },
]

inquirer
    .prompt((questions))
    
    .then((data) => {
    const marker = markDown.generateMarkdown(data)
    fs.writeFile('readme2.md', marker, (err) =>
    err ? console.error(err) : console.log('It worked, didnt it?'))
    });

    
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
