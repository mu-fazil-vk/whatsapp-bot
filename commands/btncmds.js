
var social_commands = `*🔍 !ytd <url> :* _To download youtube video. send \`\`\`!ytd [url]\`\`\`
*🔍 !ytmp3 <url> :* _To download youtube video as mp3. send \`\`\`!ytmp3 [url]\`\`\`
*🔍 !play <url> :* _To search youtube video. send \`\`\`!play [url]\`\`\`
*🔍 !instadl <url> :* _To download anything from instagram. send \`\`\`!instadl [url]\`\`\`
*🔍 !fbdl <url> :* _To download Facebook videos. send \`\`\`!fbdl [url]\`\`\``;

var sticker_cmds = `*🌟 !sticker :* _Generates sticker from image. use !help sticker for more info._` ;

var general_cmds = `*🪄 !covid <country> :* _Get covid-19 stats of a country. use \`\`\`!help covid\`\`\` for more information._
*🪄 !help :* _Goto Menu._
*🪄 !bitly <url> :* _To short a link._
*🪄 !help <command> :* _Get help about a specific command._
*🪄 !ping :* _Check the connection speed._
*🪄 !weather <city> :* _Get weather of a city._
*🪄 !tts <text> :* _Convert text to speech._
*🪄 !udic <word> :* _Get Urban Dictionary Definition._
*🪄 !alive :* _To check Bot is alive._
*🪄 !love <Girl|Boy> :* _To Calculate Love between Two person._`;

var admin_cmds = `*🐉 !everyone :* _For mention all the members of the group._
*🐉 !mute :* _To mute a chat._
*🐉 !unmute :* _To unmute a muted chat._
*🐉 !block <username> :* _To block a user._
*🐉 !update :* _To check update available._
*🐉 !update-now :* _Update to latest._`;

var random_cmds = `*😸 !catfact :* _Get a random cat fact._
*🪁 !joke :* _Get a random joke._
*🪁 !quote :* _Get a random quote._`;

var img_cmds = `*🌈 !changemymind <text> :* _To create change my mind Image with custom Text._
*🌈 !clyde <text> :* _To create Clyde's message on Discord Image with custom Messge._
*🌈 !cute <text> :* _To create cute girl Image with custom Text._
*🌈 !textprolist :* _To show list of Textpros_ 
*🌈 !textpro <textpro name|text> :* _To create veriety of Textpro Images_
*🌈 !trump <text> :* _To create Trump's tweet with custom Message._
*🌈 !tweet <name|text> :* _To create someone's tweet with custom Message._`;

module.exports = {
    s_cmds : social_commands,
    st_cmds : sticker_cmds,
    g_cmds : general_cmds,
    a_cmds : admin_cmds,
    r_cmds : random_cmds,
    i_cmds : img_cmds
    };