// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        message: "Enter a Title",
        name: "title",
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('You must enter a title.');
                return false;
            }
        }
    },
    {
        message: "Enter a Description",
        name: "description",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('You must enter a description.');
                return false;
            }
        }
    },
    {
        message: "Enter the Installation instructions",
        name: "install",
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log('You must enter the installation instructions.');
                return false;
            }
        }
    },
    {
        message: "Enter your intended usage",
        name: "usage",
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('You must enter your intended usage.');
                return false;
            }
        }
    },
    {
        type: "list",
        message: "Choose your License",
        name: "license",
        choices: ["Apache-2.0", "EPL-1.0", "ISC", "MIT", "OFL-1.1", "Zlib"],
        validate: license => {
            if (license) {
                return true;
            } else {
                console.log('You must choose a license from the list.');
                return false;
            }
        }
    },
    {
        message: "Enter your contribution credits",
        name: "contributions",
        validate: contributing => {
            if (contributing) {
                return true;
            } else {
                console.log('You must enter your contribution credits.');
                return false;
            }
        }
    },
    {
        message: "Enter your test descriptions",
        name: "Test",
        validate: test => {
            if (test) {
                return true;
            } else {
                console.log('You must enter a test description.');
                return false;
            }
        }
    },
    {
        message: "Enter your GitHub username",
        name: "questions",
        validate: questions => {
            if (questions) {
                return true;
            } else {
                console.log('You must enter your Github username.');
                return false;
            }
        }
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data) , (err) => {
        err ? console.log(err) : console.log('ReadMe.md has been created!')
    });

};
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
            .then((data) => {
                const fileName = "README(My test).md";
                writeToFile(fileName, data);
            })
};
// Function call to initialize app
init();
