const markdown = {
  generateMarkdown(data) {
    return `
  # ${data.title}
  ## Description \n \n${data.Description}
  ## Table of Contents \n \n
  - [Installations](#installations)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  ## Installations \n \n ${data.Installations}
  ## Usage \n \n ${data.Usage}
  ## License\n \t ${data.License}
  ## Contributing \n \n ${data.Contributing}
  ## Tests \n \n ${data.Tests}
  
  `
  }
};

module.exports = markdown;
