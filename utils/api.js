var writeFile = require(`./writeToFile`);
var markdown = require('./generateMarkdown')

var axios = require("axios");
const api = {

  getUser(data) {

   const queryUrl = `https://api.github.com/users/${data.name}`;
   axios.get(queryUrl).then(function(response){
    const result = markdown.generateMarkdown(data)
     writeFile.writeToFile(result);
    const emailId = response.data.email;
    const profileimg = response.data.avatar_url;
    const profilename = response.data.name;
    writeFile.writeToFile(emailId);
    writeFile.writeToFile(`![profilepic](${profileimg})`);
    writeFile.writeToFile(profilename);
});

  }
};

module.exports = api;
