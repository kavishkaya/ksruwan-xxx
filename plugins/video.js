const evt = require('../events')
const { ytv720 ,  ytv480 ,  ytv360 } = require('../lib/y2mate');
var yts = require("yt-search")
const config = require('../config');
const fs = require('fs');
const videoinfo = require('kaviyaah-api/songinfo');
const prefix = '.'
const Language = require('../language');
const Lang = Language.getString('youtube');
const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false

evt.getCMD({pattern: 'video ?(.*)', fromMe: QUEEN, react:'📽️' ,deleteCommand: false, desc: Lang.VIDEO_DESC }, (async (message, match) => {
    if (match[1] === '')  await message.react("❗");
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_VIDEO }, { quoted: message.data } )   
try{
    
    const link = match[1]

    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

    const filurl =  ytIdRegex.exec(link)

    const vidid = filurl[1]


const video = await yts( { videoId: vidid } )
    const title = video.title
    const views = video.views
    const channel = video.author.name
    const yuturl = video.url
    const thumbnail = video.thumbnail
    
    
    const caption = `
╔═══════【👸】═══════╗
                  𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
*〘YOUTUBE VIDEO DOWNLOADER〙*

🧚Video :- ${title}

👁Views :- ${views}

💠Channel :- ${channel}

📎URL :- ${yuturl}

╚════════●●●════════╝    
`
    
    
    if (!thumbnail) {
           
       return await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_VIDEO }, { quoted: message.data } )
        } else {
        
            const videobuttons = [
        {buttonId: prefix + 'btdown360pvideo ' + yuturl,buttonText: {displayText: '🎬 360'},type: 1},
        {buttonId: prefix + 'btdown480pvideo ' + yuturl,buttonText: {displayText: '🎬 480'},type: 1},
        {buttonId: prefix + 'btdown720pvideo ' + yuturl,buttonText: { displayText: '🎬 720'},type: 1}]
           return await message.client.sendMessage(message.jid, { image: {url: thumbnail }, caption: caption , footer: config.FOOTER , buttons: videobuttons , headerType: 4 } , { quoted: message.data } )		
    } 
    


}catch{


       const link = match[1]
       
       
 
    const syt = await yts(link)
    const title = syt.videos[0].title
    const views = syt.videos[0].views
    const channel = syt.videos[0].author.name
    const yuturl = syt.videos[0].url
    const thumbnail = syt.videos[0].thumbnail
    
    
    const caption = `
╔═══════【👸】═══════╗
                  𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
*〘YOUTUBE VIDEO DOWNLOADER〙*

🧚Video :- ${title}

👁Views :- ${views}

💠Channel :- ${channel}

📎URL :- ${yuturl}

╚════════●●●════════╝    
`
   
       
      
      
       if (!thumbnail) {
       
        return await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_VIDEO }, { quoted: message.data } )
       } else {
       
        const videobuttons = [
            {buttonId: prefix + 'btdown360pvideo ' + yuturl,buttonText: {displayText: '🎬 360'},type: 1},
            {buttonId: prefix + 'btdown480pvideo ' + yuturl,buttonText: {displayText: '🎬 480'},type: 1},
            {buttonId: prefix + 'btdown720pvideo ' + yuturl,buttonText: { displayText: '🎬 720'},type: 1}]

          return await message.client.sendMessage(message.jid, { image: {url: thumbnail }, caption: caption , footer: config.FOOTER , buttons: videobuttons , headerType: 4 } , { quoted: message.data } )		
}
}
}));
evt.getCMD({pattern: 'btdown360pvideo ?(.*)', fromMe: QUEEN, react:'🎬' ,deleteCommand: false, NoListCmd: true}, (async (message, match) => {

    if (match[1] === '')  await message.react("❗");
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_VIDEO }, { quoted: message.data } )
if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_VIDEO_URL }, { quoted: message.data } )
let ytdlvid = await ytv360(match[1])

DOWNLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
UPLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
message.delete(DOWNLOADINGVIDEO)
await message.client.sendMessage(message.jid , { video: { url : ytdlvid.url }, caption: config.CAPTION } , { quoted: message.data })
message.delete(UPLOADINGVIDEO)
}));
evt.getCMD({pattern: 'btdown480pvideo ?(.*)', fromMe: QUEEN, react:'🎬' ,deleteCommand: false, NoListCmd: true}, (async (message, match) => {
    if (match[1] === '')  await message.react("❗");

if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_VIDEO }, { quoted: message.data } )
if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_VIDEO_URL }, { quoted: message.data } )
let ytdlvid = await ytv480(match[1])

DOWNLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
UPLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
message.delete(DOWNLOADINGVIDEO)
await message.client.sendMessage(message.jid , { video: { url : ytdlvid.url }, caption: config.CAPTION } , { quoted: message.data })
message.delete(UPLOADINGVIDEO)
}));
evt.getCMD({pattern: 'btdown720pvideo ?(.*)', fromMe: QUEEN, react:'🎬' ,deleteCommand: false, NoListCmd: true}, (async (message, match) => {

    if (match[1] === '')  await message.react("❗");
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_VIDEO }, { quoted: message.data } )
if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_VIDEO_URL }, { quoted: message.data } )
let ytdlvid = await ytv720(match[1])

DOWNLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
UPLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
message.delete(DOWNLOADINGVIDEO)
await message.client.sendMessage(message.jid , { video: { url : ytdlvid.url }, caption: config.CAPTION } , { quoted: message.data })
message.delete(UPLOADINGVIDEO)
}));

evt.getCMD({pattern: 'video ?(.*)', fromMe: DIANA, react:'📽️' ,deleteCommand: false, desc: Lang.VIDEO_DESC }, (async (message, match) => {
    if (match[1] === '')  await message.react("❗");
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_VIDEO }, { quoted: message.data } )   
    try{
        
        const link = match[1]
    
        const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
    
        const filurl =  ytIdRegex.exec(link)
    
        const vidid = filurl[1]
    
    
    const video = await yts( { videoId: vidid } )
        const title = video.title
        const views = video.views
        const channel = video.author.name
        const yuturl = video.url
        const thumbnail = video.thumbnail
        
        
        const caption = `
    ╔═══════【👸】═══════╗
                      𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
    *〘YOUTUBE VIDEO DOWNLOADER〙*
    
    🧚Video :- ${title}
    
    👁Views :- ${views}
    
    💠Channel :- ${channel}
    
    📎URL :- ${yuturl}
    
    ╚════════●●●════════╝    
    `
        
        
        if (!thumbnail) {
               
           return await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_VIDEO }, { quoted: message.data } )
            } else {
            
                const videobuttons = [
            {buttonId: prefix + 'btdown360pvideo ' + yuturl,buttonText: {displayText: '🎬 360'},type: 1},
            {buttonId: prefix + 'btdown480pvideo ' + yuturl,buttonText: {displayText: '🎬 480'},type: 1},
            {buttonId: prefix + 'btdown720pvideo ' + yuturl,buttonText: { displayText: '🎬 720'},type: 1}]
               return await message.client.sendMessage(message.jid, { image: {url: thumbnail }, caption: caption , footer: config.FOOTER , buttons: videobuttons , headerType: 4 } , { quoted: message.data } )		
        } 
        
    
    
    }catch{
    
    
           const link = match[1]
           
           
     
        const syt = await yts(link)
        const title = syt.videos[0].title
        const views = syt.videos[0].views
        const channel = syt.videos[0].author.name
        const yuturl = syt.videos[0].url
        const thumbnail = syt.videos[0].thumbnail
        
        
        const caption = `
    ╔═══════【👸】═══════╗
                      𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
    *〘YOUTUBE VIDEO DOWNLOADER〙*
    
    🧚Video :- ${title}
    
    👁Views :- ${views}
    
    💠Channel :- ${channel}
    
    📎URL :- ${yuturl}
    
    ╚════════●●●════════╝    
    `
       
           
          
          
           if (!thumbnail) {
           
            return await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_VIDEO }, { quoted: message.data } )
           } else {
           
            const videobuttons = [
                {buttonId: prefix + 'btdown360pvideo ' + yuturl,buttonText: {displayText: '🎬 360'},type: 1},
                {buttonId: prefix + 'btdown480pvideo ' + yuturl,buttonText: {displayText: '🎬 480'},type: 1},
                {buttonId: prefix + 'btdown720pvideo ' + yuturl,buttonText: { displayText: '🎬 720'},type: 1}]
    
              return await message.client.sendMessage(message.jid, { image: {url: thumbnail }, caption: caption , footer: config.FOOTER , buttons: videobuttons , headerType: 4 } , { quoted: message.data } )		
    }
    }
}));
evt.getCMD({pattern: 'btdown360pvideo ?(.*)', fromMe: DIANA, react:'🎬' ,deleteCommand: false, NoListCmd: true}, (async (message, match) => {
    
        if (match[1] === '')  await message.react("❗");
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_VIDEO }, { quoted: message.data } )
    if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_VIDEO_URL }, { quoted: message.data } )
    let ytdlvid = await ytv360(match[1])
    
    DOWNLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
    UPLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
    message.delete(DOWNLOADINGVIDEO)
    await message.client.sendMessage(message.jid , { video: { url : ytdlvid.url }, caption: config.CAPTION } , { quoted: message.data })
message.delete(UPLOADINGVIDEO)
}));
    evt.getCMD({pattern: 'btdown480pvideo ?(.*)', fromMe: DIANA, react:'🎬' ,deleteCommand: false, NoListCmd: true}, (async (message, match) => {
        if (match[1] === '')  await message.react("❗");
    
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_VIDEO }, { quoted: message.data } )
    if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_VIDEO_URL }, { quoted: message.data } )
    let ytdlvid = await ytv480(match[1])
    
    DOWNLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
    UPLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
    message.delete(DOWNLOADINGVIDEO)
    await message.client.sendMessage(message.jid , { video: { url : ytdlvid.url }, caption: config.CAPTION } , { quoted: message.data })
message.delete(UPLOADINGVIDEO)
}));
    evt.getCMD({pattern: 'btdown720pvideo ?(.*)', fromMe: DIANA, react:'🎬' ,deleteCommand: false, NoListCmd: true}, (async (message, match) => {
        if (match[1] === '')  await message.react("❗");
    
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_VIDEO }, { quoted: message.data } )
    if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_VIDEO_URL }, { quoted: message.data } )
    let ytdlvid = await ytv720(match[1])
    
    DOWNLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
    UPLOADINGVIDEO = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
    message.delete(DOWNLOADINGVIDEO)
    await message.client.sendMessage(message.jid , { video: { url : ytdlvid.url }, caption: config.CAPTION } , { quoted: message.data })
message.delete(UPLOADINGVIDEO)
}));

