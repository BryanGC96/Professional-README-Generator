// TODO: Include packages needed for this application
const fs = require('node:fs');
const inquirer = require('inquirer');

const licenseOptions = [
    {name: 'Academic Free License v3.0', value: 'AFL-3.0'},
    {name: 'Apache license 2.0', value: 'Apache-2.0'},
    {name: 'Artistic license 2.0', value: 'Artistic-2.0'},
    {name: 'BSD 2-clause "Simplified" license', value: 'BSD-2-Clause'},
    {name: 'Creative Commons license family', value: 'CC'},
    {name: 'Educational Community License v2.0', value: 'ECL-2.0'},
    {name: 'Open Software License 3.0', value: 'OSL-3.0'},
];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title of the project?',
        name: 'Title',
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
        name: 'GitHub Profile',
    },
    {
        type: 'input',
        message: 'Email Adress',
        name: 'Email Adress',
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

        const content = JSON.stringify(answers, null, 2); //defines the content wich the file will be created.
        writeToFile('README.md', content); //Calls function to write the 'ReadMe' file.
        console.log('Selected license option: ' , answers.License);
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

module.exports = { licenseOptions }; //Exports the license option array
