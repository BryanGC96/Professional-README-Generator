
// Returns a license badge based on which license is passed in.
function renderLicenseBadge(answers) {
  const license = answers.License;
  if (license === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "Boost 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else if (license === "Artistic-2.0") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
  } else if (license === "BSD-2-Clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  } else if (license === "CC0 1.0") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
  } else if (license === "EPL 1.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  } else if (license === "GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license === "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
  } else {
    return ''; // When theres no license selected, returns an empty string.
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {  
  const license = answers.License;
  if (license === "Apache-2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "Boost 1.0") {
    return "https://www.boost.org/LICENSE_1_0.txt"
  } else if (license === "Artistic-2.0") {
    return "https://opensource.org/licenses/Artistic-2.0"
  } else if (license === "BSD-2-Clause") {
    return "https://opensource.org/licenses/BSD-2-Clause"
  } else if (license === "CC0 1.0") {
    return "http://creativecommons.org/publicdomain/zero/1.0/"
  } else if (license === "EPL 1.0") {
    return "https://opensource.org/licenses/EPL-1.0"
  } else if (license === "GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC"
  } else {
    return ''; // When theres no license selected, returns an empty string.
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(answers) {  
  const license = answers.License;
  if (license === '') {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data);
  const link = renderLicenseLink(data);
  return `# ${data.title}
  **License used:** ${licenseBadge}

  ## Table of Contents:

  - [Description](#description)
  - [Installation](#installation-instructions)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Contact Info](#github-profile)

  
  ## Description: 
  ${data.Description}

  ---

  ### Installation Instructions:
  ${data.Installation}
  ### Usage:
  ${data.Usage}
  ### Contributing:
  ${data.Contributing}
  ### Tests:
  ${data.Tests}
  ## License:
  The application is covered under the license:"${data.License}", for more information about how
  this license works, follow the link: ${link}.

  ---
  ### GitHub profile:
  [https://www.github.com/${data.profile}](https://www.github.com/${data.profile})

  ---
  For more information, feel free to contact me at my Email Adress: ${data.mail} .

`;
}

module.exports = { renderLicenseBadge, generateMarkdown };
