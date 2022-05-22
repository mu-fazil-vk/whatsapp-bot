 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const Config = require('../config');
var axios = require("axios").default;
const { MessageMedia } = require('whatsapp-web.js');

async function execute(client, msg, args) {

    var url = `https://api.xteam.xyz/dl/play?lagu=${args}&APIKEY=${Config.XTEAM_API}`;

    var options = {
        method: 'GET',
        url: url
    }

    axios.request(options).then(async function (response) {
        var data = response.data
    	var title = data.judul;
        var thumb = data.thumbnail;
        var yt_link = data.source;
        var dl_link = data.url;
        var message = `*${title}* \n\n*YT Link:* ${yt_link}\n\n*Download Link:* ${dl_link}\n\n*© Elsa Wa-Bot*`;
        const media = await MessageMedia.fromUrl(thumb);
        client.sendMessage(msg.from, media, {caption: message});
        
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "Result not Found" + "```");
        msg.to(error);
     });

}

module.exports = {
    name: "play",
    description: "To search youtube videos.",
    command: "!play",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
