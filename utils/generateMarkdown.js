// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `(https://opensource.org/licenses/${license})`;
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = `${renderLicenseBadge(license)}\n${renderLicenseLink(license)}`
  if (!license) {
    return '';
  } else {
    return licenseSection;
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description

  ${data.description}
  
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  
  ${data.install}
  
  
  ## Usage
  
  ${data.usage}
  
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  
  ## Contributions
  
  ${data.contributing}
  
  
  ## Tests
  
  ${data.test}
  
  
  ## Questions
  
  [${data.questions}](https://github.com/${data.questions})
  `
  };

module.exports = generateMarkdown;
