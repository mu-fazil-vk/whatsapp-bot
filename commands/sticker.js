 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const { MessageMedia } = require('whatsapp-web.js');

const execute = async (client, msg) => {
    let quotedMsg = await msg.getQuotedMessage();
    if (quotedMsg.hasMedia) {
        let media = await quotedMsg.downloadMedia();
        await client.sendMessage(msg.from, media, { sendMediaAsSticker: true, stickerAuthor: 'Fazil vk', stickerName: 'elsa wa bot'});
    } else {
        await client.sendMessage(msg.from, `🙇‍♂️ *Error*\n\n` + "```No image found to make a Sticker```");
    }
};

module.exports = {
    name: 'Sticker',
    description: 'generates sticker from image',
    command: '!sticker',
    commandType: 'plugin',
    isDependent: false,
    help: `*Sticker Maker*\n\nCreate sticker from Image.\n\nReply an image with *!sticker* to get a sticker of that image.`,
    execute,
};
