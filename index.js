var inquirer = require("inquirer");
var axios = require("axios");
var fs = require('fs');

inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your GitHub Username?"
}]).then(function(data){

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

    fs.appendFile("ReadMe.md", data + '\n', function(err){
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
