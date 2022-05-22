 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */

const Config = require('../config');
var axios = require("axios").default;

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/dl/igv2?url=${args}&APIKEY=${Config.XTEAM_API}`;

    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(function (response) {
        var data = response.data
        var dl_link = data.result.url[0]['url'];
        msg.reply(`*Download Link:* ${dl_link}\n\n*© Elsa Wa-Bot*`);
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Result not Found" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "instadl",
    description: "Download from instagram",
    command: "!instadl",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
