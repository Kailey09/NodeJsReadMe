// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: ' description',
            message: 'Project description?',
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'Table of Contents',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What does the user need to install to run this app?',
        },
       
        {
            type: 'input',
            name: 'contributing',
            message: 'How can users contribute to your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test for your project?',
        },
       
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: ['MIT License', 'Apache 2.0 License', 'ISC License', 'Unlicense'],
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Whats your Github username?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Whats your email?',
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./generateREADME.md', fileContent)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
        var fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
    });
}

// Function call to initialize app
init();
