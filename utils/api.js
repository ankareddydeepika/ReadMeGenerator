var writeFile = require(`./writeToFile`);
var markdown = require('./generateMarkdown')

var axios = require("axios");
const api = {

  getUser(data) {

   const queryUrl = `https://api.github.com/users/${data.name}`;
   axios.get(queryUrl).then(function(response){
    const emailId = response.data.email;
    const profileimg = response.data.avatar_url;
    const profilename = response.data.name;
    writeFile.writeToFile(emailId);
    writeFile.writeToFile(`# ${profilename}\n`);
    writeFile.writeToFile(`![profilepic](${profileimg})`)

    if(data.badges.includes("License")){

     writeFile.writeToFile(`[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`) 

    }

    if(data.badges.includes("Maintained")){

      writeFile.writeToFile(`[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)`)
    }


    const result = markdown.generateMarkdown(data)
     writeFile.writeToFile(result);
    
});

  }
};

module.exports = api;
