const axios = require("axios");
const api = {
  async getUser(username) {
    const results = await axios.get(`https://api.github.com/users/${username}`)
    return results.data;

}};
module.exports = api;