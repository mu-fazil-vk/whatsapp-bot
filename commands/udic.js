 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
var axios = require("axios").default;
const { defaultXyz } = require('../index.js');
const execute = async (client, msg, args) => {

    var options = {
      method: 'GET',
      url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
      params: {term: `${args}`},
      headers: {
        'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
        'x-rapidapi-key': defaultXyz.xyz
      }
    };

    axios.request(options).then(function (response) {
    	var data = response.data;
      var word = data.list[0].word;
      var liked = data.list[0].thumbs_up;
      var def = data.list[0].definition;
      var example = data.list[0].example;
      var link = data.list[0].permalink;

      msg.reply(`*Word :* ${word}\n*Like :* ${liked}\n\n*Definition :* ${def}\n\n*Example :* ${example}\n*Link :* ${link}\n\n*© Elsa Wa-Bot*`);

    }).catch(function (error) {
    	console.error(error);
        msg.reply("Error occured!");
    });
}

module.exports = {
    name: "udic",
    description: "To get information about given word from UDictionary.\n```!udic cat```",
    command: "!udic",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };