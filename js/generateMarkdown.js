// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
  case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  
  case 'ISC':
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  
  case 'GNUGPLv3':
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  
  default:
    return ' ';
  }
  renderLicenseLink(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT':
      return '[https://opensource.org/licenses/MIT]';
    
    case 'ISC':
      return '[https://opensource.org/licenses/ISC]';
    
    case 'GNUGPLv3':
      return '[https://www.gnu.org/licenses/gpl-3.0]';
    
    default:
      return ' ';
    }
  renderLicenseSection(license);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 return generateMarkdown.license
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
return `
# ${answers.title}
##Table of Contents
  - [Project Description] (#Description)
  - [Installation] (#Installation)
  - [Usage] (#Usage)
  - [Contribution] (#Contribution)
  - [Questions] (#Questions)
  - [License] (#License)

##Description
  ${answers.Description}

## Installation
  ${answers.Installation}

## Usage
  ${answers.Usage}

## Contribution
  ${answers.Contribution}

## Questions
  ${answers.Email}
  ${answers.Github}

## License
  ${answers.License}

`;
}

module.exports = generateMarkdown;
