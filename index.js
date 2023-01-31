// Loading all the modules needed
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')

// An array of objects that hold the different questions that will be asked and the appropriate error handling.
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please enter the title of your project")
            return false;
        }
    }
  },
  {
    type: "input",
    message: "Provide a description of your project",
    name: "description",
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please enter a description for your project")
            return false;
        }
    }
  },
  {
    type: "input",
    message: "How do you install this project?",
    name: "install",
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please explain how to install the project")
            return false;
        }
    }
  },
  {
    type: "input",
    message: "How will the user use the project?",
    name: "usage",
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please explain how to use the project")
            return false;
        }
    }
  },
  {
    type: "input",
    message: "How will people contribute to the project?",
    name: "contribute",
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please explain how people can contribute to your project")
            return false;
        }
    }
  },
  {
    type: "input",
    message: "How will users test this project?",
    name: "test",
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please explain how people can test your project")
            return false;
        }
    }
  },
  {
    type: "list",
    message: "Which license would you like to add?",
    name: "license",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "Eclipse Public License 2.0",
      "GNU General Public License v3.0",
      "Mozilla Public License 2.0",
      "None",
    ],
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please choose one of the options for license")
            return false;
        }
    }
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please enter your GitHub username")
            return false;
        }
    }
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: valid => {
        if (valid){
            return true;
        }else {
            console.log("Please enter an email address")
            return false;
        }
    }
  },
];

// This function will create a new file utilizing the parameters fileName and data
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// This function utilizes the inquirer package and prompts all the questions in the questions array.
// Then each response captured, will be used in the generateMarkdown function to create the README.md
function init() {
    inquirer.prompt(questions)
    .then(function (userInputs) {
        writeToFile("README.md", generateMarkdown(userInputs));
    });
};

// Function call to initialize app
init();