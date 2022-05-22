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

    var options = {
        method: 'GET',
        url: `https://open-weather13.p.rapidapi.com/city/${args}`,
        headers: {
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
          'x-rapidapi-key': defaultXyz.xyz
        }
      };
      
      axios.request(options).then(function (response) {
          var data = response.data;
      
          var name= data.name;
          var country = data.sys.country;
          var lon= data.coord.lon;
          var lat= data.coord.lat;
          var tempf= data.main.temp;
          var tempc = (tempf-32)*(5/9);
          var temp = tempc.toFixed(2);
          var feels_likef= data.main.feels_like;
          var feels_likec = (feels_likef-32)*(5/9);
          var feels_like = feels_likec.toFixed(2);
          var humidity= data.main.humidity;
          var pressure= data.main.pressure;
          var wind_speed= data.wind.speed;
          var clouds= data.clouds.all;
          var wind_dir= data.wind.deg;
          var weather_main= data.weather[0].main;
          var weather_desc= data.weather[0].description;

          const weather_main_send = '```'+weather_main+'```';
      
          var weather = `*Place : ${name}*\n*Country Code : ${country}*\n*Latitude : ${lat}*\n*Longitude : ${lon}*\n\n${weather_main_send}\n\n*Desc : ${weather_desc}*\n*Clouds : ${clouds}%*\n*Temparature : ${temp}℃*\n*Feels Like : ${feels_like}℃*\n*Humidity : ${humidity}%*\n*Atmospheric Pressure : ${pressure}hPa*\n*Wind Speed : ${wind_speed} km/h*\n*Wnid Direction : ${wind_dir}*\n`;
          
          client.sendMessage(msg.from, MessageMedia.fromFilePath('./elsa/Weather.jpg'), {caption: `${weather}\n\n*© Elsa Wa-Bot*`});
          
        
      }).catch(function (error) {
        if(500){
          msg.reply('```Sorry, City not found !```');
        }
          msg.reply(error);
      });

}


module.exports = {
    name: "weather",
    description: "To check live weather. ```!weather London```",
    command: "!weather",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };