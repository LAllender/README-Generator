// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const README = require("create-readme")
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
      },
      {
        type: "input",
        message: "Please enter the name of your repo",
        name: "repoName",
      },
      {
        type: "input",
        message: "Enter the title of your repo?",
        name: "title",
      },
      {
        type: "editor",
        message: "Enter a description for your repo",
        name: "description",
      },
      {
        type: "input",
        message: "Enter installation instructions for your app (optional)",
        name: "installation",
      },
      {
        type: "input",
        message: "Please enter instructions for using your app (optional)",
        name: "usage",
      },
      {
        type: "input",
        message: "Please list any collaborators and/or third party assets for this app(optional)",
        name: "credits",
      },
      {
        type: "rawlist",
        name: "license",
        default: "No license",
        choices: ['No license',
                 'MIT license',
                 'Apache 2.0 License',
                 'BSD 3-Clause',
                 'GNU General Public License (GPL)'
        ]},
      {
        type: "input",
        message: "Please enter contributor info (optional)",
        name: "contributing",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(resp => {
        generateReadMe(resp);
    });
}

// Function call to initialize app
init();
