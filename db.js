const Cloudant = require('@cloudant/cloudant');
const creds = require("./database.json")

const cloudant = Cloudant({
  url: creds.url,
  plugins: { iamauth: { iamApiKey: creds.apikey } }
});

module.exports.db = cloudant.db