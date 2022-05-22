 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
var axios = require("axios").default;
const { defaultXyz } = require('../index.js');
const execute = async (client, msg) => {

    var options = {
      method: 'GET',
      url: 'https://quotes15.p.rapidapi.com/quotes/random/',
      headers: {
        'x-rapidapi-host': 'quotes15.p.rapidapi.com',
        'x-rapidapi-key': defaultXyz.xyz
      }
    };

    axios.request(options).then(function (response) {
      var data = response.data;
      var quote = data.content;
      var author = data.originator.name;
      msg.reply(`*Quote :* ${quote}\n\t"${author}"\n\n*© Elsa Wa-Bot*`)
    }).catch(function (error) {
    	console.error(error);
        msg.reply("An error occured while fetching the quote. Please try again later.");
    });
}

module.exports = {
    name: "quote",
    description: "To get Random Quotes",
    command: "!quote",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };