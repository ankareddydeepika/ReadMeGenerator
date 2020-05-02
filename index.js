var inquirer = require("inquirer");
var axios = require("axios");
var fs = require('fs');
var api = require('./utils/api')
var markdown = require('./utils/generateMarkdown')

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
    name: "Installation",
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
    message: "Enter license details to access this application"
},
{
    type: "input",
    name: "Contributing",
    message: "Enter the details od Developers who contributed to this project"
},
{
    type: "input",
    name: "Tests",
    message: "Enter Tests that are performed for this application"
}
]).then(function(data){

    
    const result = markdown.generateMarkdown(data)
    writeToFile(result);
  
    const queryUrl = `https://api.github.com/users/${data.name}`;

    axios.get(queryUrl).then(function(response){
    
            const emailId = response.data.email;
            const profileimg = response.data.avatar_url;
            const profilename = response.data.name;
            writeToFile(emailId);
            writeToFile(`![profilepic](${profileimg})`);
            writeToFile(profilename);
    
        });

});


function writeToFile(data) {

    fs.appendFile("README.md", data + '\n', function(err){
        if(err){
            return console.log(err);
        }

        console.log("Success!")
    });

};
    




// const questions = [

// ];


// function init() {

// }

// init();
