const evt = require('../events')
const config = require('../config');
const fs = require('fs');
const yts = require( 'yt-search' )
const { yta } = require('../lib/y2mate');
const prefix = '.'
const Language = require('../language');
const Lang = Language.getString('youtube');

const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false


evt.getCMD({pattern: 'mp4 ?(.*)', fromMe: QUEEN, react:'🎬' ,deleteCommand: false, NoListCmd: true}, (async (message, match) => {

    if (match[1] === '')  await message.react("❗");
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_VIDEO }, { quoted: message.data } )
DOWNLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
UPLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
message.delete(DOWNLOADINGVIDEO)
const xeonplaymp4 = require('./lib/ytdl2')
let ytsmp4 = require("youtube-yts")
        let xeonsearch13 = await ytsmp4(match[1])
        let anuvidoke4 = xeonsearch13.videos[0]
const pl2= await xeonplaymp4.mp4(anuvidoke4.url)
await message.client.sendMessage(message.jid , { video: { url : pl2.videoUrl }, caption: config.CAPTION } , { quoted: message.data })
message.delete(UPLOADINGVIDEO)
}));

evt.getCMD({pattern: 'mp4 ?(.*)', fromMe: DIANA, react:'🎬' ,deleteCommand: false, NoListCmd: true}, (async (message, match) => {

    if (match[1] === '')  await message.react("❗");
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_VIDEO }, { quoted: message.data } )
DOWNLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
UPLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
message.delete(DOWNLOADINGVIDEO)
const xeonplaymp4 = require('./lib/ytdl2')
let ytsmp4 = require("youtube-yts")
        let xeonsearch13 = await ytsmp4(match[1])
        let anuvidoke4 = xeonsearch13.videos[0]
const pl2= await xeonplaymp4.mp4(anuvidoke4.url)
await message.client.sendMessage(message.jid , { video: { url : pl2.videoUrl }, caption: config.CAPTION } , { quoted: message.data })
message.delete(UPLOADINGVIDEO)
}));
