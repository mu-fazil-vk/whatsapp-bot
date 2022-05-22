const execute = async (client, msg) => {
    client.sendPresenceAvailable();
    msg.reply("```" + "I will be online from now." + "```");
  };
  
  module.exports = {
    name: "hi",
    description: "Stay online always !",
    command: "!hi",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };

 