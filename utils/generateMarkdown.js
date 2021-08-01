const api = require("./api.js");

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  const myLicenseSplit = license.split(':');
  const myLicenseCode = myLicenseSplit[1]; 
  const myLicense = myLicenseSplit[0];
 
  if (myLicenseCode === "none") {
    return '';
  }
  return `<img alt="License Badge" src="https://img.shields.io/badge/License-${myLicenseCode}.svg">`
  }

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(myLicense) {
  if (myLicense === "No License") {
    return '';
  }
  return `https://opensource.org/licenses/${myLicense}`
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(myLicense) {
  if (myLicense === "No License") {
    return '';
  }
  return renderLicenseBadge(myLicense);
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
#<h1>${data.repoName}<h1>

##<h2>${data.title}</h2>

### <h3>Description</h3>
<p>${data.description}</p>

###<h3>Installation</h3> 
<p>${data.installation}</p>
          
###<h3>Usage</h3> 
<p>${data.usage}</p>
          
###<h3>Credits</h3>
<p>${data.credits}</p>

###<h3>License</h3> 
${renderLicenseSection(data.license)}

<img alt="GitHub Profile Pic" src="${data.profilePic}" width="200" height="200">

###<h3>Author</h>
<p>${data.username} http//:github.com/${data.username}</p>
###<h3>${data.email || ""}</h3>
`;
}

module.exports = generateMarkdown;
