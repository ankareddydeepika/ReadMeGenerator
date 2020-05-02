var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your GitHub Username?"
}]).then(function(data){

    console.log(data);
    fs.writeFile("ReadMe.md", data.name + '\n', function(err){
        if(err){
            return console.log(err);
        }

        console.log("Success!")
    });
});

    




// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
