// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(Licences) {
  const badges = {
    Mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    Boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  }
  return badges[Licences]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ${renderLicenseBadge(data.Licences)}

  ## https://github.com/${data.Username}/${data.Title}

  ## Description

  ${data.Description}
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#Contributors)
  * [Questions](#questions)

  ## Installation

  ### The Following necessary dependencies must be installed to run this application: ${data.Installation}.
  
  ## Usage

  ### In order to use this app, install ${data.Test} in the terminal and follow these Instructions ${data.Test}.
  
  ## License

  ${renderLicenseBadge(data.Licences)}
  
  ### This Project is licensed under the ${data.Licences} license.
  
  ## Contributors: 
  
  ${data.Contributing}
  
  ## Questions
  
  ### If You have any questions about the repo, open an issue or contact ${data.Questions} or ${data.Email}.
`;
}

module.exports = generateMarkdown;
