const evt = require('../events');
const config = require('../config')
const Language = require('../language');
const Lang = Language.getString('tiktok');
const prefix = '.'
const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false


async function tkvd(url , message ){
        const  tiktok   = require('../lib/tiktok');

  tiktok(url)
    .then(async (data) => { 
        
    try { 
    author = data.owner.author 
    title = data.result.title 
    tumb = 'https://telegra.ph/file/8e631689c00b812164dd7.jpg' 
    likes = data.result.likes
    comments = data.result.cmts 
    shares = data.result.shares 
   vide_link = data.result.UrlVideo 
   audio_link = data.result.UrlAudio 
    caption = `
╔═══════【👸】═══════╗
                  𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
*〘TIKTOK VIDEO DOWNLOADER〙*

Title: ${title}
Author: ${author}
Likes: ${likes}
Comments: ${comments}
Shares: ${shares}

SELECT YOU NEED TYPE

╚════════●●●════════╝    
`
  
songbuttons = [{buttonId: prefix +'diattvideo ' + vide_link , buttonText: {displayText: '🎥 VIDEO'}, type: 1},  {buttonId: prefix +'diattaudio ' + audio_link , buttonText: {displayText: '🎵 AUDIO'}, type: 1}] 
message.client.sendMessage(message.jid, { image:{url:tumb} , caption: caption , footer: config.FOOTER , buttons: songbuttons , headerType: 4 } , { quoted: message.data } )	

}
   catch(err) { 
message.client.sendMessage(message.jid, { text: "_*Can't find anything:(*_" } , { quoted: message.data } )	

  
   }  })
   
   }
   

evt.getCMD({pattern: 'tiktok ?(.*)', fromMe: QUEEN, deleteCommand: false, desc: Lang.TİKTOK , react: '📱' }, (async (message, match) => {
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED }, { quoted: message.data } )   
if (!match[1].includes('tiktok')) return await message.client.sendMessage(message.jid , { text: Lang.NEED }, { quoted: message.data } ) 
message.client.sendMessage(message.jid, { text: "_*Searching Video*_" } , { quoted: message.data } )
const link = match[1] 
await tkvd(link , message )
}));

evt.getCMD({pattern: 'diattvideo ?(.*)', fromMe: QUEEN, deleteCommand: false, NoListCmd: true , react: '🎥' }, (async (message, match) => {
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED }, { quoted: message.data } )   
const link = match[1]
try{
message.client.sendMessage(message.jid, { video: {url: link } , caption: config.CAPTION }, { quoted: message.data } )	
}catch{
message.client.sendMessage(message.jid, { text: "_*Can't find anything:(*_" } , { quoted: message.data } )	
}
}));
    
evt.getCMD({pattern: 'diattaudio ?(.*)', fromMe: QUEEN, deleteCommand: false, NoListCmd: true , react: '🎵' }, (async (message, match) => {
if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED }, { quoted: message.data } )   
const link = match[1]
try{
message.client.sendMessage(message.jid, { audio: {url: link } , caption: config.CAPTION }, { quoted: message.data } )	
}catch{
message.client.sendMessage(message.jid, { text: "_*Can't find anything:(*_" } , { quoted: message.data } )	

}
}));


evt.getCMD({pattern: 'tiktok ?(.*)', fromMe: DIANA, deleteCommand: false, desc: Lang.TİKTOK , react: '📱' }, (async (message, match) => {
   if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED }, { quoted: message.data } )   
   if (!match[1].includes('tiktok')) return await message.client.sendMessage(message.jid , { text: Lang.NEED }, { quoted: message.data } ) 
   message.client.sendMessage(message.jid, { text: "_*Searching Video*_" } , { quoted: message.data } )
   const link = match[1] 
   await tkvd(link , message )
   }));
   
   evt.getCMD({pattern: 'diattvideo ?(.*)', fromMe: DIANA, deleteCommand: false, NoListCmd: true , react: '🎥' }, (async (message, match) => {
   if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED }, { quoted: message.data } )   
   const link = match[1]
   try{
   message.client.sendMessage(message.jid, { video: {url: link } , caption: config.CAPTION }, { quoted: message.data } )	
   }catch{
   message.client.sendMessage(message.jid, { text: "_*Can't find anything:(*_" } , { quoted: message.data } )	
   }
   }));
       
   evt.getCMD({pattern: 'diattaudio ?(.*)', fromMe: DIANA, deleteCommand: false, NoListCmd: true , react: '🎵' }, (async (message, match) => {
   if (!match[1]) return await message.client.sendMessage(message.jid , { text: Lang.NEED }, { quoted: message.data } )   
   const link = match[1]
   try{
   message.client.sendMessage(message.jid, { audio: {url: link } , caption: config.CAPTION }, { quoted: message.data } )	
   }catch{
   message.client.sendMessage(message.jid, { text: "_*Can't find anything:(*_" } , { quoted: message.data } )	
   
   }
   }));
