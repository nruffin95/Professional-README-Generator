// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: "What is your project title?",
      },
      {
        type: 'input',
        name: 'Description',
        message: "What is the project about? Give A detailed description of your project?",
      },
      {
        type: 'input',
        name: 'Table of Contents',
        message: "Table of contents",
      },
      {
        type: 'input',
        name: 'installation',
        message: "What dependencies does the user need to install to run this app?",
      },
      {
        type: 'input',
        name: 'usage',
        message: "How is the app used? Give instructions",
      },
      {
        type: 'list',
        name: 'Licences',
        message: 'Which license would you like to add? (ie ...MIT)',
        choices: ['Mit License', 'Apache License 2.0', 'Boost Software License'],
      },
      {
        type: 'input',
        name: 'Contributing',
        message: "Who contributed to this project?",
      },
      {
        type: 'input',
        name: 'Questions',
        message: "Contact info for inquiries?",
      },
      {
        type: 'input',
        name: 'Username',
        message: "What is your github user name?",
      },
      {
        type: 'input',
        name: 'Email',
        message: "What is email address?",
      },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName),
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('success')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README1.md", generatorMarkdown(data));
        })
}

// Function call to initialize app
init()