// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT": 
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
      break;
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
      break;
    case "GPL":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"
      break;
    case null: // If there is no license, return an empty string
      return ""
      break;
  }
}

// Create a function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT": 
      return "(https://opensource.org/licenses/MIT)"
      break;
    case "Apache":
      return "(https://opensource.org/licenses/Apache-2.0)"
      break;
    case "GPL":
      return "(https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case null: // If there is no license, return an empty string
      return ""
      break;
  }
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  switch (license) {
    case "MIT": 
      return `Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the “Software”), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the Software, and to 
permit persons to whom the Software is furnished to do so.`
      break;
    case "Apache":
      return `Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
      break;
    case "GPL":
      return `This program is free software: you can redistribute it and/or modify it under the 
terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
See the GNU General Public License for more details.`
      break;
    case null: // If there is no license, return an empty string
      return ""
      break;
  }
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## DESCRIPTION 
${data.description}

## TABLE OF CONTENTS
[INSTALLATION](#installation)<br>
[USAGE](#usage)<br>
[LICENSE](#license)<br>
[CONTRIBUTION](#contribution)<br>
[TESTS](#tests)<br>
[QUESTIONS](#questions)

## INSTALLATION 
${data.installation}

## USAGE 
${data.usage}

## LICENSE 
${data.license}:<br>
${renderLicenseSection(data.license)}

## CONTRIBUTION 
${data.contribution}

## TESTS 
${data.test}

## QUESTIONS 
If you have any questions, please feel free to reach out to me!<br>
GitHub page: [github.com/${data.github}](https://github.com/${data.github})<br>
Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = {
  generateMarkdown
};
