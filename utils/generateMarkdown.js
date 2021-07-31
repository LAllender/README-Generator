const api = require("./api.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No licence") {
    return '';
  }
  return `[![License](https://img.shields,io/badge/License-${license}-yellow.svg)](${renderLicenseLink(license)})`
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No license") {
    return '';
  }
  return `https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No licence") {
    return '';
  }
  return renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
          # ${data.title}

          ## Description 
          ${data.description}

          ### Installation 
          ${data.installation}
          
          ### Usage 
          ${data.usage}
          
          ### Credits 
          ${data.credits}

          ### License 
          ${data.license}

          <img alt="GitHub Profile Pic" src="${data.profilePic}">

          ## ${data.email || ""}

          ## ${data.username} 
`;
}

module.exports = generateMarkdown;
