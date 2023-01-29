const licenseGenerator = require('./licenseGenerator')

function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseGenerator.checkLicense(data.license)}

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

  ${licenseGenerator.licenseContent(data.license)}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test}
  
  ## Questions
  
  If you have any questions, you can contact me via the information below.

  // TODO: Add link to github with username 
  * Github: ${data.username}
  * Email: ${data.email}
`;
}

module.exports = generateMarkdown;
