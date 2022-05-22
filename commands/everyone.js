const execute = async (client, msg) => {
    if(msg.fromMe == true ){
        try{
        const chat = await msg.getChat();
        let text = "";
        let mentions = [];

        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);

            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        await chat.sendMessage(text, { mentions });
    }
    catch{
        msg.reply("```Error!```");
    }
    }
    else{
        msg.reply("You can't use this function 🙃");
    }
}

module.exports = {
name: "everyone",
description: "For mention all the members of the group",
command: "!everyone",
commandType: "plugin",
isDependent: false,
help: undefined,
execute,
};