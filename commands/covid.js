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

    var name = `${args}`;
    var options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country/code',
        params: {code: name},
        headers: {
          'x-rapidapi-host': defaultXyz.a,
          'x-rapidapi-key': defaultXyz.xyz
        }
      };
      
      axios.request(options).then(function (response) {
        data = response.data;
        var country = data[0].country;
        var code = data[0].code;
        var confirmed = data[0].confirmed;
        var recovered = data[0].recovered;
        var critical = data[0].critical;
        var deaths = data[0].deaths;

        var info = `*Country   : ${country}*\n*Code      :* ${code}\n*Confirmed :* ${confirmed}\n*Recovered :* ${recovered}\n*Critical  :* ${critical}\n*Deaths    :* ${deaths}`;
        client.sendMessage(msg.from, MessageMedia.fromFilePath('./elsa/Covid.jpg'), { caption: info + '\n\n*© Elsa Wa-Bot*' });
      }).catch(function (error) {
          console.error(error);
          client.sendMessage(msg.from, "Error: " + error);
      });

}

module.exports = {
    name: "covid",
    description: "To check covid informations *!covid country-code*\n ```!covid in```",
    command: "!covid",
    commandType: "plugin",
    isDependent: false,
    help: "To check covid informations *!covid country-code*\n ```!covid in``` \n\n*Some Country Codes:* \nAmerica : us\nArgentina :	ar\nArmenia : am\nBahrain : bh\nBrazil : br\nCanada : ca\nFrance : fr\nIndia : in\nJapan : jp\n",
    execute,
  };