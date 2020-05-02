
var fs = require('fs');
const File = {
    writeToFile(data) {

        fs.appendFile("README.md", data + '\n', function(err){
            if(err){
                return console.log(err);
            }
    
            console.log("Success!")
        });
    
}
}
    


module.exports = File;