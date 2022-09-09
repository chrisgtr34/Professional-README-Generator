// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// using inquirer to prompt questions to user 
const generateQuestions = [
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your e-mail address.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username.',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
        
        }, 
        {
            type: 'list',
            name: 'license',
            message: 'Select a licence for your project.',
            choices: ['MIT', 'GNU'],
            default: ["MIT"],
        
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions on how to install the project',
        
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is this app used?',
        
        },
        {
            type: 'input',
            name: 'test', 
            message: 'What should be done in order to run the test.',
        
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide the number of people who contributed to this project',
        
        }
];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile('./dist/' + fileName, data, (error) => {
        if (error)
        throw error;
        console.log ('Complete! Your information has been added!')
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(generateQuestions)
    .then(function(input) {
        console.log(input)
        writeToFile("README.md", generateMarkdown(input));
    });
};

// Function call to initialize app
init();
