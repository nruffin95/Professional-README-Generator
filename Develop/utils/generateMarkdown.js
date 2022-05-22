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
function generateMarkdown(data) {
  return `
  # ${data.Title}
  https://github.com/${data.Username}/${data.Title}
  #Description
  ${data.Description}
  #Table_of_Contents
  -------------------
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  #Installation
  The Following necessary dependencies must be installed to run this application: ${data.Installation}.
  #Usage
  In order to use this app, install ${data.Test} in the terminal and follow these Instructions ${data.Test}.
  #License
  This Project is licensed under the ${data.Licences}.
  -----License Picture----
  #Contributing
  Contributors: ${data.Contributing}
  #Questions
  If You have any questions about the repo, open an issue or contact ${data.Username} or ${data.Email}.
`;
}

module.exports = generateMarkdown;
