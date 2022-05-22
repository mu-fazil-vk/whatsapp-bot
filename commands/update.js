 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */
 
const simpleGit = require('simple-git');
const git = simpleGit();
const Config = require('../config');

const execute = async (client, msg) => {
    if (msg.fromMe == true){
        await git.fetch();
        var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
        if (commits.total === 0) {
            await msg.reply("*Your Bot is up to date!*");
        }
        else{
            var updateavail = "*New update available for Bot!*\n\nChanges:\n```";
            commits['all'].map(
              (commit) => {
                  updateavail += '✨ [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n\n';
              }
          );
        
        await client.sendMessage(msg.to,updateavail + '```'); 
        }
    }
}

module.exports = {
    name: "update",
    description: "For update details",
    command: "!update",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
  };
