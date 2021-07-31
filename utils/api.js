const axios = require("axios");
const api = {
  async getUser(username) {
    const results = await axios.get(`https://api.github.com/users/${username}`)
    // console.log(results.data.avatar_url);
    return results.data;
    /*(err) => err ? console.log('Error') : console.log(success);*/
}};
module.exports = api;

