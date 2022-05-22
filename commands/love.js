 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
var axios = require("axios").default;
const { defaultXyz } = require('../index.js');
const { MessageMedia } = require('whatsapp-web.js');

const execute = async (client, msg, args) => {

    var names = args.toString().split("|");
    
    console.log(names);

    var options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: {sname: names[0], fname: names[1]},
      headers: {
        'x-rapidapi-host': defaultXyz.c,
        'x-rapidapi-key': defaultXyz.xyz
      }
    };

    axios.request(options).then(function (response) {
    	data = response.data;
        loven = `\`\`\`${names[1]} 💖 ${names[0]} :\`\`\`\n\n\`\`\`${names[1]}\`\`\` and \`\`\`${names[0]}\`\`\` love each other \`\`\`${data.percentage}%\`\`\`\n\n *Result :* ${data.result}`;
        client.sendMessage(msg.from, MessageMedia.fromFilePath('./elsa/Love.jpg'), { caption: loven + '\n\n*© Elsa Wa-Bot*' });
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```There is an Error !```")
    });

}  

module.exports = {
    name: "love",
    description: "To Calculate Love between Two person. ```!love Girl|Boy```",
    command: "!love",
    commandType: "plugin",
    isDependent: false,
    help: "To Calculate Love between Two person. ```!love Girl|Boy```\n *Use | for seperate names*",
    execute,
  };
