// TODO: Include packages needed for this application
var inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your project title?",
      },
      {
        type: 'input',
        name: 'description',
        message: "What is the description of your project?",
      },
      {
        type: 'input',
        name: 'installation instructions',
        message: "What are the installation instructions for your project?",
      },
      {
        type: 'input',
        name: 'usage information',
        message: "What is the Usage Information for your project?",
      },
      {
        type: 'input',
        name: 'contribution guidelines',
        message: "What are the Contribution Guidelines for your project?",
      },
      {
        type: 'input',
        name: 'test instructions',
        message: "What are the Test Instructions for your project?",
      },
      {
        type: 'list',
        name: 'licences',
        message: 'Which license would you like to add?',
        choices: ['Mit License', 'Apache License 2.0', 'Boost Software License', 'I dont want to add a License'],
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your github user name?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is email address?",
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser();
