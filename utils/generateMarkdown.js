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
  return `[![License](https://img.shields.io/badge/License-${myLicenseCode}.svg)](${renderLicenseLink(myLicense)})`
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
<h3>${renderLicenseSection(data.license)}</h3>

<img alt="GitHub Profile Pic" src="${data.profilePic}">

## <h3>${data.email || ""}</h3>

## <h3>${data.username}</h3>
`;
}

module.exports = generateMarkdown;
