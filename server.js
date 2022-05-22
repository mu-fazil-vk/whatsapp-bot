 /*
  =====================================================
  ©️ Copyright by Fazil vk : github.com/Fazilvk786
  Do not remove this from the code.
  =====================================================
  */

  
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

let sessionData;

const client = new Client({
    session: sessionData
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('authenticated', (session) => {
    sessionData = session;
    console.log(JSON.stringify(session));
});

client.on('ready', () => {
    console.log('Client is ready!');
    let info = client.info;
    let num = info['me']['user']+'@s.whatsapp.net';
    client.sendMessage(num, "*Copy below session and paste it in the heroku SESSION field or railway or session.json file*\n\n *⚠️ Do not share it to anyone.*");
    client.sendMessage(num,final_session);
    console.log('Copy this SESSION, also this SESSION send to your whatsapp, you can also copy from your whatsapp, please check your whatsapp. \nAnd past on Heroku Session or Railway Session!');
});

client.initialize();
