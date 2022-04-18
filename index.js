// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Whats the title of your project?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your app?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Instructions to be follow?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Any credits?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your app?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT License', 'Apache License', 'GPL License', 'GMU License', 'N/a'],
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Whats your Github username?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Whats your email?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
