module.exports = {
    checkLicense,
    licenseContent
}

function checkLicense (license) {
    if (license == "MIT License") {
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }else if (license == "Apache License 2.0"){
      return ` [![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }else if (license == "Eclipse Public License 2.0"){
      return '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
    }else if (license == "GNU General Public License v3.0"){
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }else if (license == "Mozilla Public License 2.0"){
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    }else if (license == "None"){
      return '[![No License](https://img.shields.io/badge/No_License-0298c3.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
  }

function licenseContent (license) {
    if (license == "MIT License") {
        return `
    MIT License
        
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
        
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
        
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
        `;
      }else if (license == "Apache License 2.0"){
        return ` [![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      }else if (license == "Eclipse Public License 2.0"){
        return '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
      }else if (license == "GNU General Public License v3.0"){
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      }else if (license == "Mozilla Public License 2.0"){
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      }else if (license == "None"){
        return '[![No License](https://img.shields.io/badge/No_License-0298c3.svg)](https://opensource.org/licenses/MPL-2.0)'
      }
  }
