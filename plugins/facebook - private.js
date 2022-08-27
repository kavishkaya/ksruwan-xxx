const { fbdl , fb2 }  = require('../lib/facebook');
const { savefrom  }  = require("@bochilteam/scraper");
const evt = require('../events');
const config = require('../config')
const Language = require('../language');
const Lang = Language.getString('facebook');
const Config = require('../config');
if (Config.WORKTYPE == 'public') {
evt.getCMD({pattern: 'fabqsdvid ?(.*)' , fromMe: true, deleteCommand: false, NoListCmd: true }, (async (message, match) => {

const q = match[1];

if (!q) return await message.client.sendMessage(message.jid , { text: Lang.NEED_FB_URL }, { quoted: message.data } )

const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''

if (!isfb) return await message.client.sendMessage(message.jid , { text: Lang.NOT_FB_URL }, { quoted: message.data } )
const url = q.replace("m.facebook" , "facebook")


await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )






    try {
             const det = await fbdl(url)
             
             await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
             await message.client.sendMessage(message.jid ,{ video: { url : det.medias[0].url }, caption: config.CAPTION } , { quoted: message.data })
          
        } catch(e) {
    try {
            const det3 = await savefrom(url)
            
            await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
            await message.client.sendMessage(message.jid ,{ video: { url : det3.url[1].url }, caption: config.CAPTION } , { quoted: message.data })
    
        }
    catch(e) {
    
    try {
           const det2 = await fb2(url)
       if ( det2.SD_URL  == '') { 
            await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_FB }, { quoted: message.data } ) 

       }
     
     await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
     await message.client.sendMessage(message.jid ,{ video: { url : det2.SD_URL }, caption: config.CAPTION } , { quoted: message.data })
      
      
      
    } catch(e) {
     await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_FB }, { quoted: message.data } )
     
  }
  
  }}
  
  
  


}));  



evt.getCMD({pattern: 'fabqhdvid ?(.*)' , fromMe: true, deleteCommand: false, NoListCmd: true }, (async (message, match) => {

    const q = match[1];
      
      
    
        
    if (!q) return await message.client.sendMessage(message.jid , { text: Lang.NEED_FB_URL }, { quoted: message.data } )

    const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
    
    if (!isfb) return await message.client.sendMessage(message.jid , { text: Lang.NOT_FB_URL }, { quoted: message.data } )
    const url = q.replace("m.facebook" , "facebook")

        await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
  
       
        try {
              const det = await fbdl(url)

            
               await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
               await message.client.sendMessage(message.jid  ,{ video: { url : det.medias[1].url }, caption: config.CAPTION } , { quoted: message.data })
              
              
      
        
        } catch(e) {
             
        try {
    
        const det3 = await savefrom(url)

        
        await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
        await message.client.sendMessage(message.jid  ,{ video: { url : det3.url[0].url }, caption: config.CAPTION } , { quoted: message.data })
        
        
        }
        catch(e) {
           
        try {
        const det2 = await fb2(url)
        
        
        
           if ( det2.SD_URL  == '') { 
              const errms =  await message.client.sendMessage(message.jid  , { text: Lang.CANT_FIND_FB }, { quoted: message.data } ) 
               
           }
    
           await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
           await message.client.sendMessage(message.jid  ,{ video: { url : det2.HD_URL }, caption: config.CAPTION } , { quoted: message.data })
          
          
          
        } catch(e) {
           
         await message.client.sendMessage(message.jid  , { text: Lang.CANT_FIND_FB }, { quoted: message.data } )
        
      }}}
    
    }));



    evt.getCMD({pattern: 'fb ?(.*)',fromMe: true, deleteCommand: false, desc: Lang.FB_DESC }, (async (message, match) => {

        const q = match[1];
      
      
    
        
if (!q) return await message.client.sendMessage(message.jid , { text: Lang.NEED_FB_URL }, { quoted: message.data } )

const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''

if (!isfb) return await message.client.sendMessage(message.jid , { text: Lang.NOT_FB_URL }, { quoted: message.data } )
const url = q.replace("m.facebook" , "facebook")


        const link = match[1]

        const buttons = [{
                        buttonId: '.fabqsdvid ' + link,
                        buttonText: {
                                displayText: 'SD'
                        },
                        type: 1
                },
                {
                        buttonId: '.fabqhdvid ' + link,
                        buttonText: {
                                displayText: 'HD'
                        },
                        type: 1
                }
        ]

        const buttonMessage = {
                text: `
╔═══════【👸】═══════╗
                  𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
*〘FACEBOOK VIDEO DOWNLOADER〙*

SELECT YOU NEED VIDEO QUALITY

╚════════●●●════════╝    
`,               
               footer: config.FOOTER,
                buttons: buttons,
                headerType: 1
        }

        await message.client.sendMessage(message.jid, buttonMessage, {
                quoted: message.data
        })
}));  

}