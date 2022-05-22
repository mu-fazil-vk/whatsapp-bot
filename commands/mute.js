 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const execute = async (client, msg) => {

    if(msg.fromMe == true ){

        var chat = await msg.getChat();

        if(chat.isMuted == true) {
            msg.reply("You are already muted!\nsend ```!unmute``` for unmute chat.");
        }
        else {

        client.muteChat(msg.to);
        msg.reply("```🤐 Chat muted forever!```");
        }
    }else{
        msg.reply("You can't use this function 🙃");
    }

}
module.exports = {
    name: "mute",
    description: "To mute a chat",
    command: "!mute",
    commandType: "admin",
    isDependent: false,
    help: undefined,
    execute,
  };