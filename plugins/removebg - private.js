const evt = require('../events')
const fs = require('fs');
const got = require('got');
const FormData = require('form-data');
const stream = require('stream');
const {promisify} = require('util');
const pipeline = promisify(stream.pipeline);
const { writeFile } = require('fs/promises')
const {downloadMediaMessage} = require('@adiwajshing/baileys')
const imglocate =  '/root/queendianamd/removebag.jpg'
const Language = require('../language');
const Lang = Language.getString('removebg');
const config = require('../config');
const RBG_API_KEY = config.RBG_API_KEY
const Config = require('../config');
let WORKN = Config.WORKTYPE == 'public' ? false : ''


if (Config.WORKTYPE == 'public') {
evt.getCMD({pattern: 'removebg$', fromMe: true, deleteCommand: false, desc: Lang.REMOVEBG_DESC }, (async (message, match) => {

    if (message.reply_message === false || message.reply_message.image === false) return await message.client.sendMessage(message.jid, {text:Lang.NEED_PHOTO}, {quoted: message.data} );  

    await message.client.sendMessage(message.jid, {text:Lang.RBGING }, {quoted: message.data} );

var location = await downloadMediaMessage({key: { remoteJid: message.reply_message.jid, id: message.reply_message.id},message: message.reply_message.data.quotedMessage});
await writeFile( imglocate , location )  


var form = new FormData();
form.append('image_file', fs.createReadStream(imglocate));
form.append('size', 'auto');

var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
    body: form,
    headers: {
        'X-Api-Key': RBG_API_KEY
    }
}); 

await pipeline(
    rbg,
    fs.createWriteStream('removeback.png')
);

var bufimg = Buffer.from(fs.readFileSync(imglocate))

await message.client.sendMessage(message.jid, { image : {url: "removeback.png"}, jpegThumbnail: bufimg , caption: config.CAPTION} ,{quoted: message.data} );
await fs.unlinkSync("removeback.png")
await fs.unlinkSync(imglocate)


})) 
}