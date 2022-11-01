
function renderLicenseLink(license) {}
function renderLicenseSection(license) {}

  class markDown {

    /*function renderLicenseBadge(license) {
      const badges = {
          mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
          isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
      }
      return badges[license]
    } */

    static generateMarkdown(data) {
      return `
# ${data.title}

## Table of Contents
- [Project Description](#Description)
- [Created By](#Creator)
- [Installation Instructions](#Install)
- [Usage](#Usage)
- [How to Contribute](#Constribution)
- [Testing Instructions](#Test)
- [License](#License)
  
## Description
${data.description}
  
## CreatedBy
${data.creator}
  
## Installation
${data.install}
  
## Useage
${data.useage}
  
## Contribution
${data.contribution}
  
## Testing
${data.test}
  
## Licensing
${data.license}
    `;
    }}

module.exports = markDown
