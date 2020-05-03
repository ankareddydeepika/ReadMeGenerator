var inquirer = require("inquirer");

var api = require('./utils/api')

inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "What is your GitHub Username?"
},
{
    type: "input",
    name: "title",
    message: "What is your Project title"
},
{
    type: "input",
    name: "Description",
    message: "Write project Description"
},
{
    type: "input",
    name: "Installations",
    message: "Write Steps for installations"
},
{
    type: "input",
    name: "Usage",
    message: "What is use of this application?"
},
{
    type: "input",
    name: "License",
    message: "Enter details about your License",

},
{
    type: "input",
    name: "Contributing",
    message: "Enter the details of Developers who contributed to this project"
},
{
    type: "input",
    name: "Tests",
    message: "Enter Tests that are performed for this application"
},
{
    type: "checkbox",
    message: "Choose the badges you want to add",
    name: "badges",
    choices: [
      "License",
      "Maintained"
    ]
  }
]).then(function(data){

    console.log(data);

    api.getUser(data);

});







