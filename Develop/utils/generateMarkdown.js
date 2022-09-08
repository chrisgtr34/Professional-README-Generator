// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; // 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};
function generateMarkdown(data)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [License](#license)
  * [Contribution](#contribution)
  * [GitHub](#github)
  * [Email](#email)
  
  <br/>

  # Description
  ${data.description}

  <br/>

  # Installation
  ${data.installation}

  <br/>

  # Usage
  ${data.usage}

  <br/>

  # Test
  ${data.test}

  <br/>

  # License
  ${renderLicenseBadge(data.license)}

  <br/>

  # Contribution
  ${data.contribution}

  <br/>

  # GitHub Username
(https://github.com/${data.github})

  <br/>

  # E-mail Address
  ${data.email}
`;
}

module.exports = generateMarkdown;
