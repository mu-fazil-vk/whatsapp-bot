 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const fs = require('fs');
const tts = require('google-translate-tts');
const { MessageMedia } = require('whatsapp-web.js');

function splitStr(str, separator) {
    var string = str.split(separator);
    return string;
}

const execute = async (client, msg, args) => {

    var str = `${args}`;

    var separator = "|";

    var text = splitStr(str, separator);



    if (text.length > 1) {
        var lang = text[1];
        var last = lang.replace(/[,\s]+|[,\s]+/g, '').trim();


        const saveFile = async () => {
            try {
                const buffer = await tts.synthesize({
                    text: `${text[0].toString().replace(/ *, */g, ' ')}`,
                    voice: `${last}`,
                    slow: false
                });
            
                fs.writeFileSync('./temp/voice.mp3', buffer);
                msg.reply(MessageMedia.fromFilePath('./temp/voice.mp3'));
            } catch (error) {
                console.error('error');
                msg.reply('```An Error Occured!```');
            }


        };

        saveFile();
    } else {
        const saveFile = async () => {
            try {
                const buffer = await tts.synthesize({
                    text: `${text[0].toString().replace(/ *, */g, ' ')}`,
                    voice: 'en',
                    slow: false
                });
            
                fs.writeFileSync('./temp/voice.mp3', buffer);
                msg.reply(MessageMedia.fromFilePath('./temp/voice.mp3'));
            } catch (error) {
                console.error('error');
                msg.reply('```An Error Occured!```');
            }


        };

        saveFile();
    }

}

module.exports = {
    name: "tts",
    description: "Text to speech. Type ```!tts text|language```\neg: !tts hello|en\nFor more type !help ```tts```",
    command: "!tts",
    commandType: "plugin",
    isDependent: false,
    help: 'Text to speech. Type ```!tts text|language```\neg: !tts hello|en or how are you | en',
    execute,
};