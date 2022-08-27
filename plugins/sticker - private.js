const evt = require('../events')
const config = require('../config');
const fs = require('fs');
const videoinfo = require('kaviyaah-api/songinfo');
const prefix = '.'
const { downloadMediaMessage } = require('@adiwajshing/baileys')
const { writeFile } = require('fs/promises')
const Language = require('../language');
const Lang = Language.getString('sticker');
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const stauthor = config.STAUTHOUR
const stpack = config.STPACK
const Config = require('../config');
let WORKN = Config.WORKTYPE == 'public' ? false : ''


evt.getCMD({pattern: 'sticker$', fromMe: WORKN, deleteCommand: false, desc: Lang.STICKER_DESC }, (async (message, match) => {

    if (message.reply_message === false) return await message.client.sendMessage(message.jid , {text: Lang.NEED_REPLY} , { quoted: message.data } );


    await message.client.sendMessage(message.jid , {text: Lang.CREATING_STICKER} , { quoted: message.data } );
    
    
if(message.reply_message.video === true || message.reply_message.image === true ){      

        var location = await downloadMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });


      
await writeFile('/root/queendianamd/stic.webp', location )   
   
const locate =  Buffer.from(fs.readFileSync('/root/queendianamd/stic.webp')) 

const sticker = new Sticker(locate, {
        pack: stpack , 
        author: stauthor, 
        type: StickerTypes.FULL,
        categories: ['🥲'],
        id: '12345',
        quality: 50,
        background: {
            "r": 0,
            "g": 0,
            "b": 0,
            "alpha": 0
        }
})


await sticker.toFile('/root/queendianamd/stic.webp')
return await message.client.sendMessage( message.jid,  { sticker: fs.readFileSync('/root/queendianamd/stic.webp') },{ quoted: message.data });

        }
 var location = await downloadMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });


      
await writeFile('/root/queendianamd/stic.webp', location )   
   
const locate =  Buffer.from(fs.readFileSync('/root/queendianamd/stic.webp')) 

const sticker = new Sticker(locate, {
        pack: stpack , 
        author: stauthor, 
        type: StickerTypes.FULL,
        categories: ['🥲'],
        id: '12345',
        quality: 50,
        background: {
            "r": 0,
            "g": 0,
            "b": 0,
            "alpha": 0
        }
})


await sticker.toFile('/root/queendianamd/stic.webp')
return await message.client.sendMessage( message.jid,  { sticker: fs.readFileSync('/root/queendianamd/stic.webp') },{ quoted: message.data });



 }))
