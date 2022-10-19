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


evt.getCMD({pattern: 'song ?(.*)', fromMe: QUEEN , react:'🎵' ,deleteCommand: false, desc: Lang.SONG_DESC }, (async (message, match) => {
if (match[1] === '')  await message.react("❗");
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_SONG }, { quoted: message.data } )   
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
*〘YOUTUBE MUSIC DOWNLOADER〙*

🧚Song :- ${title}

👁Views :- ${views}

💠Channel :- ${channel}

📎URL :- ${yuturl}

╚════════●●●════════╝    
`
    
    
    if (!thumbnail) {
           
       return await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_SONG }, { quoted: message.data } )
        } else {
        
        const songbuttons = [
                               {buttonId: prefix +'dcsong ' + yuturl, buttonText: {displayText: '📁 DOCUMENT'}, type: 1}, 
                               {buttonId: prefix +'acsong ' + yuturl, buttonText: {displayText: '🎧 AUDIO'}, type: 1}]
           return await message.client.sendMessage(message.jid, { image: {url: thumbnail }, caption: caption , footer: config.FOOTER , buttons: songbuttons , headerType: 4 } , { quoted: message.data } )		
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
*〘YOUTUBE MUSIC DOWNLOADER〙*

🧚Song :- ${title}

👁Views :- ${views}

💠Channel :- ${channel}

📎URL :- ${yuturl}

╚════════●●●════════╝    
`
   
       
      
      
       if (!thumbnail) {
       
        return await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_SONG }, { quoted: message.data } )
       } else {
       
       const songbuttons = [
                               {buttonId: prefix +'dcsong ' + yuturl, buttonText: {displayText: '📁 DOCUMENT'}, type: 1}, 
                               {buttonId: prefix +'acsong ' + yuturl, buttonText: {displayText: '🎧 AUDIO'}, type: 1}]
          return await message.client.sendMessage(message.jid, { image: {url: thumbnail }, caption: caption , footer: config.FOOTER , buttons: songbuttons , headerType: 4 } , { quoted: message.data } )		
}
}
}));
evt.getCMD({pattern: 'dcsong ?(.*)', fromMe: QUEEN , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {
    if (match[1] === '')  await message.react("❗");   
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_SONG }, { quoted: message.data } )
    if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_SONG_URL }, { quoted: message.data } )
    
    DOWNLOADINGSONG = await message.client.sendMessage(message.jid , { text: config.SONGD }, { quoted: message.data } )

    let docsong = await yta(match[1])
        
    UPLOADINGSONG = await message.client.sendMessage(message.jid , { text: config.SONGU }, { quoted: message.data } )
    message.delete(DOWNLOADINGSONG)
    await message.client.sendMessage(message.jid , { document : { url : docsong.url  } , mimetype : 'audio/mpeg' , fileName : docsong.title + '.mp3' } , { quoted: message.data })
    message.delete(UPLOADINGSONG)

}));
evt.getCMD({pattern: 'acsong ?(.*)', fromMe: QUEEN , react:'🎧' ,deleteCommand: false, NoListCmd: true }, (async (message, match) => {
    if (match[1] === '')  await message.react("❗");
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_SONG }, { quoted: message.data } )
    if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_SONG_URL }, { quoted: message.data } )
    
    DOWNLOADINGSONG = await message.client.sendMessage(message.jid , { text: config.SONGD }, { quoted: message.data } )

    let docsong = await yta(match[1])
     
   UPLOADINGSONG = await message.client.sendMessage(message.jid , { text: config.SONGU }, { quoted: message.data } )
   message.delete(DOWNLOADINGSONG)
    await message.client.sendMessage(message.jid , { audio: { url: docsong.url }, mimetype: 'audio/mp4' } , { quoted: message.data })
    message.delete(UPLOADINGSONG)

}));


evt.getCMD({pattern: 'song ?(.*)', fromMe: DIANA, react:'🎵' ,deleteCommand: false, desc: Lang.SONG_DESC }, (async (message, match) => {
    if (match[1] === '')  await message.react("❗");
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_SONG }, { quoted: message.data } )   
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
    *〘YOUTUBE MUSIC DOWNLOADER〙*
    
    🧚Song :- ${title}
    
    👁Views :- ${views}
    
    💠Channel :- ${channel}
    
    📎URL :- ${yuturl}
    
    ╚════════●●●════════╝    
    `
        
        
        if (!thumbnail) {
               
           return await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_SONG }, { quoted: message.data } )
            } else {
            
            const songbuttons = [
                                   {buttonId: prefix +'dcsong ' + yuturl, buttonText: {displayText: '📁 DOCUMENT'}, type: 1}, 
                                   {buttonId: prefix +'acsong ' + yuturl, buttonText: {displayText: '🎧 AUDIO'}, type: 1}]
               return await message.client.sendMessage(message.jid, { image: {url: thumbnail }, caption: caption , footer: config.FOOTER , buttons: songbuttons , headerType: 4 } , { quoted: message.data } )		
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
    *〘YOUTUBE MUSIC DOWNLOADER〙*
    
    🧚Song :- ${title}
    
    👁Views :- ${views}
    
    💠Channel :- ${channel}
    
    📎URL :- ${yuturl}
    
    ╚════════●●●════════╝    
    `
       
           
          
          
           if (!thumbnail) {
           
            return await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_SONG }, { quoted: message.data } )
           } else {
           
           const songbuttons = [
                                   {buttonId: prefix +'dcsong ' + yuturl, buttonText: {displayText: '📁 DOCUMENT'}, type: 1}, 
                                   {buttonId: prefix +'acsong ' + yuturl, buttonText: {displayText: '🎧 AUDIO'}, type: 1}]
              return await message.client.sendMessage(message.jid, { image: {url: thumbnail }, caption: caption , footer: config.FOOTER , buttons: songbuttons , headerType: 4 } , { quoted: message.data } )		
    }
    }
}));
evt.getCMD({pattern: 'dcsong ?(.*)', fromMe: DIANA, react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {
    if (match[1] === '')  await message.react("❗");
        if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_SONG }, { quoted: message.data } )
        if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_SONG_URL }, { quoted: message.data } )
        
        DOWNLOADINGSONG = await message.client.sendMessage(message.jid , { text: config.SONGD }, { quoted: message.data } )
    
        let docsong = await yta(match[1])
            
        UPLOADINGSONG = await message.client.sendMessage(message.jid , { text: config.SONGU }, { quoted: message.data } )
        message.delete(DOWNLOADINGSONG)
        await message.client.sendMessage(message.jid , { document : { url : docsong.url  } , mimetype : 'audio/mpeg' , fileName : docsong.title + '.mp3' } , { quoted: message.data })
        message.delete(UPLOADINGSONG)
    
}));
evt.getCMD({pattern: 'acsong ?(.*)', fromMe: DIANA, react:'🎧' ,deleteCommand: false, NoListCmd: true }, (async (message, match) => {
    if (match[1] === '')  await message.react("❗");
    if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED_URL_SONG }, { quoted: message.data } )
        if (!match[1].includes('youtu')) return await message.client.sendMessage(message.jid , { text: Lang.ONLY_YT_SONG_URL }, { quoted: message.data } )
        
        DOWNLOADINGSONG = await message.client.sendMessage(message.jid , { text: config.SONGD }, { quoted: message.data } )
    
        let docsong = await yta(match[1])
         
       UPLOADINGSONG = await message.client.sendMessage(message.jid , { text: config.SONGU }, { quoted: message.data } )
       message.delete(DOWNLOADINGSONG)
        await message.client.sendMessage(message.jid , { audio: { url: docsong.url }, mimetype: 'audio/mp4' } , { quoted: message.data })
        message.delete(UPLOADINGSONG)
    
}));
    