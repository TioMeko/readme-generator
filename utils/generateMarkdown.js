// Loading the module needed from licenseGenerator
const licenseGenerator = require('./licenseGenerator')

// exports the function generateMarkdown to be used on index.js to generate the file
module.exports = generateMarkdown;

// Creates a function that returns a template literal that is written in Markdown syntax
function generateMarkdown(data) {
    return `# ${data.title}

  ${licenseGenerator.getBadge(data.license)}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#how-to-contribute)
  - [Testing](#tests)
  - [Questions](#questions)

  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.install}

  ## Usage

  ${data.usage}
  
  ## License

 ${licenseGenerator.getContent(data.license)}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  If you have any questions, you can contact me via the information below.

  * Github: https://github.com/${data.username}
  * Email: ${data.email}
`;
}