const { fbdl , fb2 }  = require('../lib/facebook');
const { savefrom  }  = require("@bochilteam/scraper");
const evt = require('../events');
const config = require('../config')
const Language = require('../language');
const Lang = Language.getString('facebook');
const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false
const thumb = 'https://telegra.ph/file/df7ebe6cec25ffdf41b56.jpg'

evt.getCMD({pattern: 'fabqsdvid ?(.*)' , fromMe: QUEEN, react:'🎬' ,deleteCommand: false, NoListCmd: true }, (async (message, match) => {

const q = match[1];
if (match[1] === '')  await message.react("❗");
if (!q) return await message.client.sendMessage(message.jid , { text: Lang.NEED_FB_URL }, { quoted: message.data } )

const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''

if (!isfb) return await message.client.sendMessage(message.jid , { text: Lang.NOT_FB_URL }, { quoted: message.data } )
const url = q.replace("m.facebook" , "facebook")


DOWNLOADINGFB = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )






    try {
             const det = await fbdl(url)
             
            UPLOADINGFB = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
             await message.client.sendMessage(message.jid ,{ video: { url : det.medias[0].url }, caption: config.CAPTION } , { quoted: message.data })
             message.delete(DOWNLOADINGFB)
             message.delete(UPLOADINGFB)
          
        } catch(e) {
    try {
            const det3 = await savefrom(url)
            
            UPLOADINGFB = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
            await message.client.sendMessage(message.jid ,{ video: { url : det3.url[1].url }, caption: config.CAPTION } , { quoted: message.data })
            message.delete(DOWNLOADINGFB)
            message.delete(UPLOADINGFB)
        }
    catch(e) {
    
    try {
           const det2 = await fb2(url)
       if ( det2.SD_URL  == '') { 
            await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_FB }, { quoted: message.data } ) 

       }
     
       UPLOADINGFB = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
     await message.client.sendMessage(message.jid ,{ video: { url : det2.SD_URL }, caption: config.CAPTION } , { quoted: message.data })
     message.delete(DOWNLOADINGFB)
     message.delete(UPLOADINGFB)
      
      
    } catch(e) {
     await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_FB }, { quoted: message.data } )
     message.delete(DOWNLOADINGFB)

  }
  
  }}
  
  
  


}));
evt.getCMD({pattern: 'fabqhdvid ?(.*)' , fromMe: QUEEN, react:'🎬' ,deleteCommand: false, NoListCmd: true }, (async (message, match) => {

    const q = match[1];
      
      
    
    if (match[1] === '')  await message.react("❗");  
    if (!q) return await message.client.sendMessage(message.jid , { text: Lang.NEED_FB_URL }, { quoted: message.data } )

    const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
    
    if (!isfb) return await message.client.sendMessage(message.jid , { text: Lang.NOT_FB_URL }, { quoted: message.data } )
    const url = q.replace("m.facebook" , "facebook")

       DOWNLOADFB =  await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
  
       
        try {
              const det = await fbdl(url)

            
             UPLOADINGFB = await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
             
               await message.client.sendMessage(message.jid  ,{ video: { url : det.medias[1].url }, caption: config.CAPTION } , { quoted: message.data })
               message.delete(DOWNLOADFB)
               message.delete(UPLOADINGFB )
              
      
        
        } catch(e) {
             
        try {
    
        const det3 = await savefrom(url)

        
        UPLOADINGFB = await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
        
        await message.client.sendMessage(message.jid  ,{ video: { url : det3.url[0].url }, caption: config.CAPTION } , { quoted: message.data })
        message.delete(DOWNLOADFB)
        message.delete(UPLOADINGFB )
        
        }
        catch(e) {
           
        try {
        const det2 = await fb2(url)
        
        
        
           if ( det2.SD_URL  == '') { 
              const errms =  await message.client.sendMessage(message.jid  , { text: Lang.CANT_FIND_FB }, { quoted: message.data } ) 
               
           }
    
           UPLOADINGFB = await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
           
           await message.client.sendMessage(message.jid  ,{ video: { url : det2.HD_URL }, caption: config.CAPTION } , { quoted: message.data })
           message.delete(DOWNLOADFB)
           message.delete(UPLOADINGFB )
          
          
          
        } catch(e) {
           
         await message.client.sendMessage(message.jid  , { text: Lang.CANT_FIND_FB }, { quoted: message.data } )
        
      }}}
    
}));
evt.getCMD({pattern: 'fb ?(.*)',fromMe: QUEEN, react:'📽️' ,deleteCommand: false, desc: Lang.FB_DESC }, (async (message, match) => {

        const q = match[1];
      
      
    
        if (match[1] === '')  await message.react("❗");       
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
                
                image:{url:thumb} ,
                caption: `
╔═══════【👸】═══════╗
                  𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
*〘FACEBOOK VIDEO DOWNLOADER〙*

SELECT YOU NEED VIDEO QUALITY

╚════════●●●════════╝    
`,               
               footer: config.FOOTER,
                buttons: buttons,
                headerType: 4
        }

        await message.client.sendMessage(message.jid, buttonMessage, {
                quoted: message.data
        })
}));  


evt.getCMD({pattern: 'fabqsdvid ?(.*)' , fromMe: DIANA, react:'🎬' ,deleteCommand: false, NoListCmd: true }, (async (message, match) => {

        const q = match[1];
        if (match[1] === '')  await message.react("❗");
        if (!q) return await message.client.sendMessage(message.jid , { text: Lang.NEED_FB_URL }, { quoted: message.data } )
        
        const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
        
        if (!isfb) return await message.client.sendMessage(message.jid , { text: Lang.NOT_FB_URL }, { quoted: message.data } )
        const url = q.replace("m.facebook" , "facebook")
        
        
        DOWNLOADINGFB = await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
        
        
        
        
        
        
            try {
                     const det = await fbdl(url)
                     
                    UPLOADINGFB = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
                     await message.client.sendMessage(message.jid ,{ video: { url : det.medias[0].url }, caption: config.CAPTION } , { quoted: message.data })
                     message.delete(DOWNLOADINGFB)
                     message.delete(UPLOADINGFB)
                  
                } catch(e) {
            try {
                    const det3 = await savefrom(url)
                    
                    UPLOADINGFB = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
                    await message.client.sendMessage(message.jid ,{ video: { url : det3.url[1].url }, caption: config.CAPTION } , { quoted: message.data })
                    message.delete(DOWNLOADINGFB)
                    message.delete(UPLOADINGFB)
                }
            catch(e) {
            
            try {
                   const det2 = await fb2(url)
               if ( det2.SD_URL  == '') { 
                    await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_FB }, { quoted: message.data } ) 
        
               }
             
               UPLOADINGFB = await message.client.sendMessage(message.jid , { text: config.VIDEOU }, { quoted: message.data } )
             await message.client.sendMessage(message.jid ,{ video: { url : det2.SD_URL }, caption: config.CAPTION } , { quoted: message.data })
             message.delete(DOWNLOADINGFB)
             message.delete(UPLOADINGFB)
              
              
            } catch(e) {
             await message.client.sendMessage(message.jid , { text: Lang.CANT_FIND_FB }, { quoted: message.data } )
             message.delete(DOWNLOADINGFB)
        
          }
          
          }}
          
          
          
        
        
        }));
        evt.getCMD({pattern: 'fabqhdvid ?(.*)' , fromMe: DIANA, react:'🎬' ,deleteCommand: false, NoListCmd: true }, (async (message, match) => {
        
            const q = match[1];
              
              
            
            if (match[1] === '')  await message.react("❗");  
            if (!q) return await message.client.sendMessage(message.jid , { text: Lang.NEED_FB_URL }, { quoted: message.data } )
        
            const isfb = q.includes('facebook.com')? q.includes('facebook.com') : q.includes('fb.watch')? q.includes('fb.watch') : ''
            
            if (!isfb) return await message.client.sendMessage(message.jid , { text: Lang.NOT_FB_URL }, { quoted: message.data } )
            const url = q.replace("m.facebook" , "facebook")
        
               DOWNLOADFB =  await message.client.sendMessage(message.jid , { text: config.VIDEOD }, { quoted: message.data } )
          
               
                try {
                      const det = await fbdl(url)
        
                    
                     UPLOADINGFB = await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
                     
                       await message.client.sendMessage(message.jid  ,{ video: { url : det.medias[1].url }, caption: config.CAPTION } , { quoted: message.data })
                       message.delete(DOWNLOADFB)
                       message.delete(UPLOADINGFB )
                      
              
                
                } catch(e) {
                     
                try {
            
                const det3 = await savefrom(url)
        
                
                UPLOADINGFB = await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
                
                await message.client.sendMessage(message.jid  ,{ video: { url : det3.url[0].url }, caption: config.CAPTION } , { quoted: message.data })
                message.delete(DOWNLOADFB)
                message.delete(UPLOADINGFB )
                
                }
                catch(e) {
                   
                try {
                const det2 = await fb2(url)
                
                
                
                   if ( det2.SD_URL  == '') { 
                      const errms =  await message.client.sendMessage(message.jid  , { text: Lang.CANT_FIND_FB }, { quoted: message.data } ) 
                       
                   }
            
                   UPLOADINGFB = await message.client.sendMessage(message.jid  , { text: config.VIDEOU }, { quoted: message.data } )
                   
                   await message.client.sendMessage(message.jid  ,{ video: { url : det2.HD_URL }, caption: config.CAPTION } , { quoted: message.data })
                   message.delete(DOWNLOADFB)
                   message.delete(UPLOADINGFB )
                  
                  
                  
                } catch(e) {
                   
                 await message.client.sendMessage(message.jid  , { text: Lang.CANT_FIND_FB }, { quoted: message.data } )
                
              }}}
            
        }));
        evt.getCMD({pattern: 'fb ?(.*)',fromMe: DIANA, react:'📽️' ,deleteCommand: false, desc: Lang.FB_DESC }, (async (message, match) => {
        
                const q = match[1];
              
              
            
                if (match[1] === '')  await message.react("❗");       
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
                        
                        image:{url:thumb} ,
                        caption: `
        ╔═══════【👸】═══════╗
                          𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
        *〘FACEBOOK VIDEO DOWNLOADER〙*
        
        SELECT YOU NEED VIDEO QUALITY
        
        ╚════════●●●════════╝    
        `,               
                       footer: config.FOOTER,
                        buttons: buttons,
                        headerType: 4
                }
        
                await message.client.sendMessage(message.jid, buttonMessage, {
                        quoted: message.data
                })
        }));  
        
