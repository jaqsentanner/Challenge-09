// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

  class markDown {

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
