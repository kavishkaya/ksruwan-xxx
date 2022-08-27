const evt = require('../events')
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('alive');
const Config = require('../config');
let WORKN = Config.WORKTYPE == 'public' ? false : ''

evt.getCMD({pattern: 'alive$', fromMe: WORKN, deleteCommand: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
   var alivemsg = config.ALIVEMSG
		


 await message.client.sendMessage(message.jid, { image: {url: config.ALIVEIMG }, caption: alivemsg  } , { quoted: message.data } )

}));

