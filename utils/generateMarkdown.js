const api = require("./api.js");

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No licence") {
    return '';
  }
  return `[![License](https://img.shields,io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
  }

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No license") {
    return '';
  }
  return `https://opensource.org/licenses/${license}`
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No licence") {
    return '';
  }
  return renderLicenseBadge(license);
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# <h1>${data.title}</h1>

## <h2>Description</h2>
<h3>${data.description}</h3>

### <h2>Installation</h2> 
<h3>${data.installation}</h3>
          
### <h2>Usage</h2> 
<h3>${data.usage}</h3>
          
          ### <h2>Credits</h2>
          <h3>${data.credits}</h3>

          ### <h2>License</h2> 
          <h3>${renderLicenseBadge(data.license)}</h3>

          <img alt="GitHub Profile Pic" src="${data.profilePic}">

          ## <h3>${data.email || ""}</h3>

          ## <h3>${data.username}</h3>
`;
}

module.exports = generateMarkdown;
