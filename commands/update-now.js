 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */

const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const Config = require('../config');
const exec = require('child_process').exec;
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })

const execute = async (client, msg) => {
    const heroku_err = "*Please check* ```HEROKU_APP_NAME``` *and* ```app name``` *They must be same.*\n*If these two values ​​are the same, please restore* ```HEROKU_API_KEY```\n\n_To access these settings, use Heroku >> App >> Settings >> Reavel Config Vars_\n_To renew your API key, follow these steps, Heroku >> Account >> API Key then replace old api key in config vars._"
    if (msg.fromMe == true){
        await git.fetch();
        var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
        if (commits.total === 0) {
            return await client.sendMessage(msg.to,"*Your Bot is up to date!*");    
        } else {
            var on_progress = false;
            if (on_progress) {
                return await client.sendMessage(msg.to,'*Elsa wa-bot Updating!*');
            }
            var updating = await client.sendMessage(msg.to,'_updating..._');
            if (Config.HEROKU.HEROKU) {
                try {
                    var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
                } catch {
                    await client.sendMessage(msg.to, '*❌ Your Heroku information is wrong!*')
                    await new Promise(r => setTimeout(r, 1000));
                    return await client.sendMessage(msg.to,heroku_err);
                }
    
                git.fetch('upstream', Config.BRANCH);
                git.reset('hard', ['FETCH_HEAD']);
    
                var git_url = app.git_url.replace(
                    "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
                )
                on_progress = true
                try {
                    await git.addRemote('heroku', git_url);
                } catch { console.log('heroku remote attached'); }
                await git.push('heroku', Config.BRANCH);
    
                await client.sendMessage(msg.to, '*✅ Successfully Updated!*');
    
                await client.sendMessage(msg.to,"*🪄 Elsa wa bot Restarting Automatically!*");
                
            } else {
                git.pull((async (err, update) => {
                    if(update && update.summary.changes) {
                        await client.sendMessage(msg.to, '*✅ Successfully Updated!*');
                        exec('npm install').stderr.pipe(process.stderr);
                    } else if (err) {
                        await client.sendMessage(msg.to,'*❌ Update failed!*\n*Error:* ```' + err + '```');
                    }
                }));
                await updating.delete();
            }
        }
    }
}

module.exports = {
    name: "updat-now",
    description: "For update to latest version",
    command: "!update-now",
    commandType: "plugin",
    isDependent: false,
    help: undefined,
    execute,
};