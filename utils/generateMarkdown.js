// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='No License') {
    return '';
  }
  if (license==='MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license==='Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license==='GNU General Public License (GPL)') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==='No License') {
    return '';
  }
  if (license==='MIT License') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  }
  if (license==='Apache License 2.0') {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license==='GNU General Public License (GPL)') {
    return `[GNU General Public License (GPL)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else {
    return `[Creative Commons licenses (for documentation)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==='No License') {
    return '';
  }
  badge = renderLicenseBadge();
  link = renderLicenseLink();

  return `## License
  ${badge}
  ${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseSection(data.license);
 
  return `# ${data.title}

  #Contents
  ---------
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}`;
}

export default generateMarkdown;
