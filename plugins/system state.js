const evt = require('../events')
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('alive');
const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false

evt.getCMD({pattern: 'alive$', fromMe: QUEEN , react:'👸' ,deleteCommand: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
   var alivemsg = config.ALIVEMSG == 'default' ?  "```👋 Hey there, I'm alive now```  \n\n_Version:_ ```v5.0.0``` \n\n _POWERED BY KAVIYAAH_" : config.ALIVEMSG
   var aliveimg = config.ALIVEIMG == 'default' ?  "https://telegra.ph/file/3217c19d381ae34b38012.jpg" : config.ALIVEIMG

 await message.client.sendMessage(message.jid, { image: {url: config.ALIVEIMG }, caption: alivemsg  } , { quoted: message.data } )

}));
evt.getCMD({pattern: 'alive$', fromMe: DIANA , react:'👸' ,deleteCommand: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
  var alivemsg = config.ALIVEMSG == 'default' ?  "```👋 Hey there, I'm alive now```  \n\n_Version:_ ```v5.0.0``` \n\n _POWERED BY KAVIYAAH_" : config.ALIVEMSG
  var aliveimg = config.ALIVEIMG == 'default' ?  "https://telegra.ph/file/3217c19d381ae34b38012.jpg" : config.ALIVEIMG

await message.client.sendMessage(message.jid, { image: {url: aliveimg }, caption: alivemsg  } , { quoted: message.data } )

}));

