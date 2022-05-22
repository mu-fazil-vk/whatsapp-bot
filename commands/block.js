const { format } = require("express/lib/response");

const execute = async (client, msg) => {
    if (msg.fromMe == true){
        if (!msg.to.includes("-")) {
          await msg.reply(`*😤 Blocked* \n\n You have been blocked\n\n _©️ Elsa wa-bot_`);
          let chat = await msg.getChat();
          let contact = await chat.getContact();
          contact.block();
        }
    };
}
  
  module.exports = {
    name: "Block", 
    description: "Block current chat",
    command: "!block", 
    commandType: "admin", 
    isDependent: false,
    help: "Type !block in the chat to block the user",
    execute,
  };