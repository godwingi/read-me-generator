// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./generateMarkdown`);


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'Title',
            message: 'What is your project title?',
          },
          {
            type: 'input',
            name: 'Description',
            message: 'Give a brief description of your project. (i.e. objective, motivation, what you learned etc..)',
          },
          {
            type: 'input',
            name: 'Installation',
            message: 'Are there any Installation guidelines for your project?',
          },
          {
            type: 'input',
            name: 'Usage',
            message: 'How do you use what was created in this project?',
          },
          {
            type: 'input',
            name: 'Contribution',
            message: 'Are there any contributors or collaborators to your project? (include tutorials)',
          },
          {
            type: 'input',
            name: 'Email',
            message: 'Contact Information for questions - insert email',
          },
          {
            type: 'input',
            name: 'Github',
            message: 'What is your github repo name?',
          },
          {
            type: 'list',
            name: 'License',
            message: 'What license are your using?',
            choices: ['MIT', 'ISC', 'GNUGPLv3'],
            // filter(val){
            //     return val.toLowerCase();
            // }
          },
    ];

// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile(`./README.md`, generateMarkdown(answers), (err) => err ? console.log(err) : console.log('Success!')
)};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
      // const file = generateMarkdown(answers)
      // console.log(file)
        return writeToFile(answers);
    })
    .catch((error)=> {
        console.log(error)
    })
};

// Function call to initialize app
init();
