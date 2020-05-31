
const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Describe your  project"
      },
      {
        type: "input",
        name: "toc",
        message: "Enter your table of contents"
      },
      {
        type: "input",
        name: "install",
        message: "Provide installation details"
      },
      {
        type: "input",
        name: "description",
        message: "Describe your  project"
      },
      {
        type: "input",
        name: "usage",
        message: "What is the project usage?"
      },
      {
        type: "input",
        name: "license",
        message: "What is your license type?"
      },
      {
        type: "input",
        name: "contributors",
        message: "Any contributors?"
      },
      {
        type: "input",
        name: "test",
        message: "Any Tests?"
      },
      {
        type: "input",
        name: "questions",
        message: "Questions?"
      }
    ]);
  }

function writeToFile(fileName, data) {
}

function init() {

}

promptUser();
init();
