// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require('axios');
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");

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
        message: "Enter the title of your app?",
        name: "title",
      },
      {
        type: "input",
        message: "Enter a description for your app and it's purpose",
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
      
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const filename = "GeneratedREADME.md";
  const userInfo = api.getUser(questions.username);
  questions.email = userInfo.email;
  questions.profilePic = userInfo.avatar_url;
  const answers = generateMarkdown(questions);
  fs.writeFile(filename, answers, function() {
    console.log("Successfully generated README.md file!");
  });
  } error(err) = error.message(`An error occured while writing the file`);
    console.log(err);
  

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
