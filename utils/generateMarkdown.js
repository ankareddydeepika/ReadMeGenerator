const markdown = {
  generateMarkdown(data) {
    return `
  # ${data.title}
  ## Description \n \t ${data.Description}
  ## Table of Contents \n \t
  * TOC
   {:toc}
  ## Installations \n \t ${data.Installations}
  ## Usage \n \t ${data.Usage}
  ## License\n \t ${data.License}
  ## Contributing \n \t ${data.Contributing}
  ## Tests \n \t ${data.Tests}
  
  `
  }
};

module.exports = markdown;
