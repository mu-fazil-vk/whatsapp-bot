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
        var res = []
        for(i=0;i<data.result.url.length;i++){
            var subname = data.result.url[i]['subname'];
            var link = data.result.url[i]['url'];
            res.push(`${subname}: ${link} + \n\n`);
        }
        msg.reply(`*Download Links:*\n${res.toString().replace(/ *, */g, '')}\n\n*© Elsa Wa-Bot*`);
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Result not Found" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "fbdl",
    description: "Download Facebook videos",
    command: "!fbdl",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
