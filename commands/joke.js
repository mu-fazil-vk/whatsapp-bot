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
  url: 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=single'
  }

  axios.request(options).then(function (response) {
    const res = response.data
  	var joke = (res['joke']);
    msg.reply(joke+'\n\n*© Elsa Wa-Bot*');
  }).catch(function (error) {
  	console.error(error);
    msg.reply('An error occured while fetching a joke.\n\n*© Elsa Wa-Bot*');
   });

}
module.exports = {
    name: "joke",
    description: "To get a Joke",
    command: "!joke",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };