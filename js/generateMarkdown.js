// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == 'none') {
    return ' '
  }
  return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
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
    
    case 'none':
      return ' ';
    }
  renderLicenseSection(license);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if(license !== 'none') {
  return '## License'
 } else {
 return ' '
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {

  return `
# ${answers.title}

${renderLicenseBadge(answers.license)}

## Table of Contents
  - [ProjectDescription](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Questions](#Questions)
  - [License](#License)

## Description
  ${answers.description}

## Installation
  ${answers.installation}

## Usage
  ${answers.usage}

## Contribution
  ${answers.contribution}

## Questions
  ${answers.email}
  ${answers.github}

  ${renderLicenseSection(answers.license)}
  ${renderLicenseLink(answers.license)}
`;
}

module.exports = generateMarkdown;
