function renderLicenseBadge(license) {
  return `
  [![](https://img.shields.io/badge/license-${license}-blue.svg)]
  `;
}
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
