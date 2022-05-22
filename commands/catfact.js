 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
var axios = require("axios").default;

const execute = async (client, msg) => {
    var options = {
        method: 'GET',
        url: 'https://catfact.ninja/fact/'
    }

    axios.request(options).then(function (response) {
        const data = response.data
    	const fact = data['fact'];
        msg.reply(`*🐱 Fact :* ${fact}\n\n*© Elsa Wa-Bot*`);
    }).catch(function (error) {
    	console.error(error);
        msg.reply("```" + "There is an Error! Please try after sometime." + "```");
        msg.to(error);
     });
    }

    module.exports = {
        name: "catfact",
        description: "To get random fact about Cat.",
        command: "!catfact",
        commandType: "plugin",
        isDependent: false,
        help: undefined,
        execute,
      };
