// Exports both functions to be accessed on generateMarkdown.js
module.exports = {
  getBadge,
  getContent
}

// Function that checks if the license parameter matches one of the cases and returns a badge
function getBadge(license) {
  switch (license){
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache License 2.0':
      return ' [![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Eclipse Public License 2.0':
      return '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case "Mozilla Public License 2.0":
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case "None":
      return '![No License](https://img.shields.io/badge/No_License-0298c3.svg)';
  }
}

// Function that checks if the license parameter matches one of the cases and returns which license is used or if n/a
function getContent(license) {
  switch (license){
    case 'MIT License':
    case 'Apache License 2.0': 
    case 'Eclipse Public License 2.0':
    case 'GNU General Public License v3.0':
    case "Mozilla Public License 2.0":
      return `This project is licensed under the ${license}`;
    case "None":
      return 'n/a'
  };
}