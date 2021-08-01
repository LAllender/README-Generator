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
# <h1>${data.title}</h1>

## <h2>Description</h2>
<p>${data.description}</p>

### <h2>Installation</h2> 
<p>${data.installation}</p>
          
### <h2>Usage</h2> 
<p>${data.usage}</p>
          
### <h2>Credits</h2>
<p>${data.credits}</p>

### <h2>License</h2> 
${renderLicenseSection(data.license)}

<img alt="GitHub Profile Pic" src="${data.profilePic}" width="200" height="200">

## <h3>${data.email || ""}</h3>

## <h2>Creator Username</h2>
<p>${data.username}</p>
`;
}

module.exports = generateMarkdown;
