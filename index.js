/*
 =====================================================
 ©️ Copyright by Fazil vk : github.com/Fazilvk786
 Do not remove this from the code.
 =====================================================
 */

const fs = require('fs');
const { Client, List } = require('whatsapp-web.js');
var ffmpeg = require('fluent-ffmpeg');
const express = require("express");
const app = express();
const qrcode = require('qrcode-terminal');
var tele = 'Zq6svi5bZj5mNTE9';
var link = "https://chat.whatsapp.com/";
const config = require("./config");
var btncmd = require("./commands/btncmds.js");

const SESSION_FILE_PATH = './session.json';

let sessionData;


const client = new Client({
  session: sessionData || config.session,
  puppeteer: { headless: true, args: ['--no-sandbox'], },
  ffmpegPath: require('@ffmpeg-installer/ffmpeg').path,
  //if you are using YOUR OWN SYSTEM, please change the PATH below and uncommand
  //executablePath: "YOUR\CHROME\PATH",
  //ffmpegPath: 'YOUR\FFMPEG\PATH',
});

client.commands = new Map();

fs.readdir("./commands", (err, files) => {
  if (err) return console.error(e);
  files.forEach((commandFile) => {
    if (commandFile.endsWith(".js")) {
      let commandName = commandFile.replace(".js", "");
      const command = require(`./commands/${commandName}`);
      client.commands.set(commandName, command);
    }
  });
});

//default xyz
var _0x225073 = _0x5735; (function (_0x3dd16e, _0x31f15) { var _0x2a90dc = _0x5735, _0x2f6133 = _0x3dd16e(); while (!![]) { try { var _0x2b451d = parseInt(_0x2a90dc(0x13d)) / 0x1 * (-parseInt(_0x2a90dc(0x13b)) / 0x2) + parseInt(_0x2a90dc(0x133)) / 0x3 + -parseInt(_0x2a90dc(0x139)) / 0x4 + parseInt(_0x2a90dc(0x138)) / 0x5 * (parseInt(_0x2a90dc(0x135)) / 0x6) + -parseInt(_0x2a90dc(0x13e)) / 0x7 + parseInt(_0x2a90dc(0x13a)) / 0x8 + parseInt(_0x2a90dc(0x13f)) / 0x9; if (_0x2b451d === _0x31f15) break; else _0x2f6133['push'](_0x2f6133['shift']()); } catch (_0x30b92a) { _0x2f6133['push'](_0x2f6133['shift']()); } } }(_0x169f, 0xadae1)); function _0x169f() { var _0x252c1e = ['208GLmMxa', '4063878LLbOkI', '2427228ADctCx', 'exports', '4095855IvBtYa', '5a239d6287mshb59458c2637bf91p1f5e26jsnf671c43b693f', '306hkSYYN', 'covid-19-data.p.rapidapi.com', 'love-calculator.p.rapidapi.com', '67765sbRInq', '1205472UzMQtF', '1124216HUKLMQ', '8398LyIOtn', 'https://t.me/+']; _0x169f = function () { return _0x252c1e; }; return _0x169f(); } function _0x5735(_0x17baf5, _0x4491ad) { var _0x169f91 = _0x169f(); return _0x5735 = function (_0x5735cb, _0x267d55) { _0x5735cb = _0x5735cb - 0x133; var _0x34a6ff = _0x169f91[_0x5735cb]; return _0x34a6ff; }, _0x5735(_0x17baf5, _0x4491ad); } var defaultXyz = { 'xyz': _0x225073(0x134), 'a': _0x225073(0x136), 'c': _0x225073(0x137), 'j': 'KUCEbC9jwGiJyCuxpSesKu', 't': _0x225073(0x13c) }; module[_0x225073(0x140)] = { 'defaultXyz': defaultXyz };

if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
}
else {
  app.get('/qr', (req, res) => {
    client.on('qr', qrCode => {
      console.log("Click Open App and scan the QR code")
      var code = qr.image(qrCode, { type: 'svg' });
      res.type('svg');
      code.pipe(res);

      qrcode.generate(qrCode, { small: true });
    });

    client.on('authenticated', (session) => {
      sessionData = session;
      console.log(JSON.stringify(session));
      final_session = JSON.stringify(session);
      fs.writeFile('session.json', final_session, 'utf8', function () { console.log("Json Created") });
    });

    client.on("auth_failure", () => {
      console.error(
        "There is a problem in authentication, please delete session.json file and try again."
      );
    });

    client.on('ready', () => {
      console.log('Client is ready!');
      let info = client.info;
      let num = info['me']['user'] + '@s.whatsapp.net';
      client.sendMessage(num, "*Copy below session and paste it in the heroku SESSION field or railway or session.json file*\n\n *⚠️ Do not share it to anyone.*");
      client.sendMessage(num, final_session);
      console.log('Copy this SESSION, also this SESSION send to your whatsapp, you can also copy from your whatsapp, please check your whatsapp. \nAnd past on Heroku Session or Railway Session!');
    });
    app.listen(PORT, () => { console.log(`Server Running open https://${config.HEROKU.APP_NAME}.herokuapp.com/qr and scan qr code, In railway open the link after getting deploy and add last part of the link '/qr'`) })
  })
}



client.on('ready', () => {
  console.log('Client is ready!');
  let info = client.info;
  let num = info['me']['user'] + '@s.whatsapp.net';
  client.sendMessage(num, `*======Elsa Wa Bot======*\n\n*🎉 Bot started working*\n\n\`\`\`\Join Our WhatsApp Support Group :\`\`\`\n *${link}${defaultXyz.j}* \n\n\`\`\`\Telegram Suppport Group: \n ${defaultXyz.t}${tele} \`\`\`\n\n*===========💖==========*`)
});

client.initialize();

client.on('message', message => {
  console.log(message.body);
});

//---------------AI CHAT BOT------------------------
var _0x45ec54 = _0x5622; (function (_0x3a937c, _0x34eddc) { var _0x2a473c = _0x5622, _0xba07ed = _0x3a937c(); while (!![]) { try { var _0xb0accc = -parseInt(_0x2a473c(0x111)) / 0x1 + -parseInt(_0x2a473c(0x115)) / 0x2 * (parseInt(_0x2a473c(0x10a)) / 0x3) + parseInt(_0x2a473c(0x116)) / 0x4 * (parseInt(_0x2a473c(0x10f)) / 0x5) + parseInt(_0x2a473c(0x114)) / 0x6 + -parseInt(_0x2a473c(0x10b)) / 0x7 + parseInt(_0x2a473c(0x112)) / 0x8 + parseInt(_0x2a473c(0x10c)) / 0x9; if (_0xb0accc === _0x34eddc) break; else _0xba07ed['push'](_0xba07ed['shift']()); } catch (_0xc7dc0) { _0xba07ed['push'](_0xba07ed['shift']()); } } }(_0x59f5, 0xf0c8f)); function _0x5622(_0x268804, _0x54ce12) { var _0x59f5c6 = _0x59f5(); return _0x5622 = function (_0x562214, _0xf56b5e) { _0x562214 = _0x562214 - 0x109; var _0x1f4770 = _0x59f5c6[_0x562214]; return _0x1f4770; }, _0x5622(_0x268804, _0x54ce12); } var defaultXyz = { 'xyz': '5a239d6287mshb59458c2637bf91p1f5e26jsnf671c43b693f', 'a': _0x45ec54(0x10e), 'c': _0x45ec54(0x113), 'j': _0x45ec54(0x109), 't': 'https://t.me/+', 'xteam': _0x45ec54(0x10d) }; module[_0x45ec54(0x110)] = { 'defaultXyz': defaultXyz }; function _0x59f5() { var _0x4ce744 = ['2ZLarjw', '4076wZGuMx', 'KUCEbC9jwGiJyCuxpSesKu', '5878617LDGkHF', '7460467Crwnzn', '30576870hUUphj', '929f45250da82b63', 'covid-19-data.p.rapidapi.com', '1145DsNrkQ', 'exports', '1691948GvJXuw', '5363448JZkfHa', 'love-calculator.p.rapidapi.com', '8413866VcEcXb']; _0x59f5 = function () { return _0x4ce744; }; return _0x59f5(); }
//--------------------------------------------------

client.on('message', message => {
  if (message.body === 'hi') {
    message.reply('Hi 👋🏻, send ```!help``` for More');
  }
});

client.on('message', message => {
  let info = client.info;
  let name = info['pushname'];
  let num = '@' + info['me']['user'];
  let about = `_Author:_ *mu-fazil-vk*\n_Bot Admin:_ *${name}*\n   ${num}\n_Github:_ *https://github.com/mu-fazil-vk/whatsapp-bot*\n_Version:_ *3.0.0*\n_Language:_ *Node.js*\n_Library:_ *Whatsapp-web.js*`;
  if (message.body === 'About') {
    client.sendMessage(message.from, about);
  }
});

client.on('message', message => {
  let sections = [{ title: 'Categories', rows: [{ title: 'General' }, { title: 'Social Media' }, { title: 'Sticker' }, { title: 'Admin' }, { title: 'Random' }, { title: 'Images' }] }];
  let list = new List('\n```Commands by Category.\nYou can choose category from below selection buttons```', 'Elsa Wa-Bot', sections, '*Elsa Wa-Bot*', 'footer');
  if (message.body === 'Commands') {
    client.sendMessage(message.from, list);
  }
});

client.on('message', message => {
  if (message.body === 'Social Media') {
    message.reply(btncmd.s_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'Sticker') {
    message.reply(btncmd.st_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'Admin') {
    message.reply(btncmd.a_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'General') {
    message.reply(btncmd.g_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'Random') {
    message.reply(btncmd.r_cmds);
  }
});

client.on('message', message => {
  if (message.body === 'Images') {
    message.reply(btncmd.i_cmds);
  }
});

client.on("message_create", async (msg) => {

  if (msg.from && msg.body.startsWith("!")) {
    let args = msg.body.slice(1).trim().split(/ +/g);
    let command = args.shift().toLowerCase();

    console.log({ command, args });

    if (client.commands.has(command)) {
      try {
        await client.commands.get(command).execute(client, msg, args);
      } catch (error) {
        console.log(error);
      }
    } else {
      await client.sendMessage(
        msg.from,
        "No such command found. Type !help to get the list of available commands"
      );
    }
  }
});

client.on("message_revoke_everyone", async (after, before) => {
  if (before) {
    if (
      before.fromMe !== true &&
      before.hasMedia !== true &&
      before.author == undefined &&
      config.enable_delete_alert == "true"
    ) {
      client.sendMessage(
        before.from,
        "_You deleted this message_ 👇👇\n\n" + before.body
      );
    }
  }
});

client.on("disconnected", (reason) => {
  console.log("Client was logged out", reason);
});

// set up rate limiter: maximum of five requests per minute
var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100
});

app.use(limiter);

app.get("/", (req, res) => {
  res.sendFile(
    'server/index.html', { root: '.' }
  );
});

app.use(
  "/public",
  express.static("public"),
  require("serve-index")("public", { icons: true })
);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening at Port: ${process.env.PORT || 8080}`);
});
