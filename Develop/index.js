// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: function (response) {
            if (response.length < 1) {
                return console.log('Please enter your username.')
            }
            return true
    },
    
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: function (response) {
            if (response.length < 1) {
                return console.log('Please enter your email.')
            }
            return true
    },
    
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        validate: function (response) {
            if (response.length < 1) {
                return console.log('Please enter a title.')
            }
            return true
        }

    },
    {
        type: 'input',
        message: 'Please provide a description.',
        name: 'description',
        validate: function (response) {
            if (response.length < 1) {
                return console.log('Please enter a description.')
            }
            return true
        }    
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide usage information.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please choose a license.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please provide contribution guidelines.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please provide test instructions',
        name: 'tests'
    },
   
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, err => {
        if(err) {
            console.log(err);
        } else {
            console.log('Your README file has been written.')
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile('README.md', data);
        }
            );
}

// Function call to initialize app
console.log('Initializing..');
init();
