 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const { MessageMedia, Buttons } = require('whatsapp-web.js');
const execute = async (client,msg,args) => {
    let commands =  client.commands;
    if(!args.length){
        let adminHelp = '=====✨ *Administration*=====\n\n';
        let infoHelp = '=========✨ *Info*=========\n\n';
        let pluginHelp = '=======✨ *Plugins*========\n\n';
        commands.forEach((command) => {
            if(!command.isDependent){
                if(command.commandType === 'admin')
                    adminHelp += `☘ *${command.name} (${command.command})*  - ${command.description}\n`;
                if(command.commandType === 'info')
                    infoHelp += `❄ *${command.name} (${command.command})*  - ${command.description}\n`;
                if(command.commandType === 'plugin')
                    pluginHelp += `🍁 *${command.name} (${command.command})*  - ${command.description}\n\n`;
            }
                
        });
        let pic = MessageMedia.fromFilePath("./elsa/Elsa.jpg");
        let button = new Buttons(pic,[{body:"About"},{body:"Commands"}],"©️ Elsa Wa-Bot");
        let help1 = `*Hi 👋🏻, I am Elsa, A WhatsApp Bot created by Fazil vk*\n\n${adminHelp}\n${infoHelp}`
        let help2 = `\n${pluginHelp}\n${commands.get('help').help}\n\n*© Elsa Wa-Bot*`;
        var messagesp = help1 + ' ' + '\u200B'.repeat(4000) + help2;
        await client.sendMessage(msg.from, button,{'caption':messagesp});
    }

    else if(commands.has(args[0])){
        await client.sendMessage(msg.from, commands.get(args[0]).help);
    }

    else {
        await client.sendMessage(msg.from, `No command with the name *${args[0]}*...`);
    }
    
};

module.exports = {
    name: 'help',
    description: 'Get information about available commands',
    command: '!help',
    commandType: 'info',
    isDependent: false,
    help: 'To get more info use ```!help [command]```. Ex: ```!help ping```',
    execute
};
