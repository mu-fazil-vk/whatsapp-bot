 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();

const execute = async (client, msg) => {
    
    let dl_speed = getNetworkSpeed();

    async function getNetworkSpeed() {
      const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
      const fileSizeInBytesd = 500000;
      const speedd = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytesd);
      dl_speed = await speedd['mbps'];
      console.log(dl_speed)
      const options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/catchers/544b09b4599c1d0200000289',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const fileSizeInBytesu = 2000000
      const speedu = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytesu);
      up_speed = speedu['mbps'];
      console.log(up_speed);
      await msg.reply(`*📡 Network Speed :*\n\nDownload Speed : ${dl_speed} Mbps\nUpload Speed : ${up_speed} Mbps\n\n*© Elsa Wa-Bot*`);
    }
}

module.exports = {
    name: "ping",
    description: "To check the network speed of bot.",
    command: "!ping",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
    };