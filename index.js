// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a title to continue');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: ' description',
            message: 'Project description?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a description to continue');
                    return false;
                }
            }
            
        },

        {
            type: 'input',
            name: 'installation',
            message: 'What does the user need to install to run this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a title to continue');
                    return false;
                }
            }
        },
       
        {
            type: 'input',
            name: 'contributions',
            message: 'How can users contribute to your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a value to continue');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'test',
            message: 'Provide test for your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a test to continue');
                    return false;
                }
            }
        },
       
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT License', 'Apache 2.0 License', 'ISC License', 'None'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a license to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Whats your Github username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a username to continue');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Whats your email?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter a email to continue');
                    return false;
                }
            }
        },
    ];


// TODO: Create a function to write README file
function writeToFile (fileName, data) {
   fs.writeFile(fileName, data, (err) => {
       if (err) {
           return console.log(err);
       }
       console.log('Sucess! Readme file created!')
   })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('README.md', generateMarkdown(userInput));
    });
};


// Function call to initialize app
init();

module.exports = questions;
