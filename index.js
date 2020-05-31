
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

  /*function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.github}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.license}</li>
        <li class="list-group-item">LinkedIn: ${answers.usage}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
  }
  */

//function writeToFile(fileName, data) {
   // return 
//}

function init() {

}

promptUser();
init();
