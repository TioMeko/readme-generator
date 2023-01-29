module.exports = {
  checkLicense,
  licenseContent
}

function checkLicense(license) {
  if (license == "MIT License") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license == "Apache License 2.0") {
    return ` [![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "Eclipse Public License 2.0") {
    return '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
  } else if (license == "GNU General Public License v3.0") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license == "Mozilla Public License 2.0") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license == "None") {
    return '![No License](https://img.shields.io/badge/No_License-0298c3.svg)'
  }
}

function licenseContent(license) {

  if (license == 'MIT License' ||
    license == "Apache License 2.0" ||
    license == "Eclipse Public License 2.0" ||
    license == "GNU General Public License v3.0" ||
    license == "Mozilla Public License 2.0") {
    return `This project is licensed under the ${license}`;
  } else if (license == "None") {
    return 'n/a'
  }
}