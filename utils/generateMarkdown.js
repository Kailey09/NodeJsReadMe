const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === ISC) {
    badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
  } else if (license == 'ISC') {
    licenseLink = 'https://www.isc.org/licenses/'
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}


  ## Table of Contents:
  ### *[License](*license)
  ### *[Installation](*Installation)
  ### *[Usage](*usage)
  ### *[Contributors](*contributors)
  ### *[Tests(*tests)
  ### *[Questions](*questions)


  

`;
}

module.exports = generateMarkdown;
