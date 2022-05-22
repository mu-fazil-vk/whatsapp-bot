const fs = require("fs");
require("dotenv").config();
function convertToBool(text, fault = 'true') {
  return text === fault ? true : false;
}

module.exports = {
  session: JSON.parse(
    process.env.SESSION ||
      fs.readFileSync(__dirname + "/session.json", { encoding: "utf8" })
  ), //if not using env vars create a file named session.json
  ai_chat_enabled: process.env.AI_CHAT_ENABLED || "false",
  BRANCH: 'master',
  HEROKU: {
    HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
  },
  XTEAM_API: process.env.XTEAM_API
};
