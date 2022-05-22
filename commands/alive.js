const execute = async (client, msg) => {
    msg.reply("```" + "Hi Bro, I am alive." + "```");
  };
  
  module.exports = {
    name: "alive",
    description: "To check bot is alive !",
    command: "!alive",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };