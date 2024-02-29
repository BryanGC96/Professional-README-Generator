// TODO: Include packages needed for this application
const fs = require('node:fs');
const inquirer = require('inquirer');
const { generateMarkdown, renderLicenseBadge } = require('./utils/generateMarkdown');

const licenseOptions = [
    {name: 'Boost Software License 1.0', value: 'Boost 1.0'},
    {name: 'Apache license 2.0', value: 'Apache-2.0'},
    {name: 'Artistic license 2.0', value: 'Artistic-2.0'},
    {name: 'BSD 2-clause "Simplified" license', value: 'BSD-2-Clause'},
    {name: 'Eclipse Public License 1.0', value: 'EPL 1.0'},
    {name: 'GNU GPL v3', value: 'GPLv3'},
    {name: 'ISC License (ISC)', value: 'ISC'},
    {name: 'No License', value: ''},
];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title of the project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description of the project:',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Write your installation Instructions for the user:',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'Write some Usage Information',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'Test instructions',
        name: 'Tests',
    },
    {
        type: 'list',
        message: 'Choose a license option',
        name: 'License',
        choices: licenseOptions,
    },
    {
        type: 'input',
        message: 'GitHub Username',
        name: 'profile',
    },
    {
        type: 'input',
        message: 'Email Adress',
        name: 'mail',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err) {
            console.log(err);
        } else {
            console.log("File Writen Succesfully");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log("Info saved successfully");
        console.log("This are the answers:");
        console.log(answers);

        const readmeContent = generateMarkdown(answers);

        writeToFile('README.md', readmeContent); // Calls function to write the 'ReadMe' file.

        module.exports.answers = answers; // Exports the answers from the inquirer
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Promt couldn't be rendered in the current enviornment")
        } else {
            console.log("Something else went wrong")
        }
    });
}

// Function call to initialize app
init()     
