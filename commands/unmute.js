 /*
  =====================================================
  ÂŠī¸ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const execute = async (client, msg) => {

    if(msg.fromMe == true ){

        var chat = await msg.getChat();

        if(chat.isMuted == true) {
            client.unmuteChat(msg.to);
            msg.reply("```Chat unmuted đ```");
            
        }
        else {
            msg.reply("This chat already unmuted!\nsend ```!mute``` for mute chat.");
        }
    }else{
        msg.reply("You can't use this function đ");
    }

}
module.exports = {
    name: "unmute",
    description: "To unmute a muted chat",
    command: "!unmute",
    commandType: "admin",
    isDependent: false,
    help: undefined,
    execute,
  };