const evt = require('../events')
const config = require('../config');
const fs = require('fs');
const videoinfo = require('kaviyaah-api/songinfo');
const prefix = '.'
const { downloadMediaMessage } = require('@adiwajshing/baileys')
const { writeFile } = require('fs/promises')
const stauthor = config.STAUTHOUR
const stpack = config.STPACK
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const Language = require('../language');
const Lang = Language.getString('ttp');
const ALang = Language.getString('scrapers');
const BLang = Language.getString('ttp');
const axios = require("axios");
const conf = require("../config");
const QUEEN = config.WORKTYPE == 'private' ? true : ''
const DIANA = config.WORKTYPE == 'public' ? true : false
 
evt.getCMD({pattern: 'attp ?(.*)', fromMe: QUEEN, react:'✨' ,deleteCommand: false, desc: Lang.ATTP_DESC}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:Lang.NEED_WORDS}, { quoted: message.data });

    var uri = encodeURI(match[1])
    var resSticker = await axios.get(
        "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" });

const locate = Buffer.from(resSticker.data)
  
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


await sticker.toFile('attp.webp')
return await message.client.sendMessage( message.jid,  { sticker: fs.readFileSync('attp.webp') },{ quoted: message.data });



 }))
evt.getCMD({pattern: 'attp ?(.*)', fromMe: DIANA, react:'✨' ,deleteCommand: false, desc: Lang.ATTP_DESC}, (async (message, match) => { 
    if (match[1] === '') return await message.client.sendMessage(message.jid , { text:Lang.NEED_WORDS}, { quoted: message.data });

    var uri = encodeURI(match[1])
    var resSticker = await axios.get(
        "https://api.xteam.xyz/attp?file&text=" + uri, { responseType: "arraybuffer" });

const locate = Buffer.from(resSticker.data)
  
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


await sticker.toFile('attp.webp')
return await message.client.sendMessage( message.jid,  { sticker: fs.readFileSync('attp.webp') },{ quoted: message.data });



 }))