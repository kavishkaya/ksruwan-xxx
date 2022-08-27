const evt = require('../events')
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('alive');
const Config = require('../config');
let WORKN = Config.WORKTYPE == 'public' ? false : ''

if (Config.WORKTYPE == 'public') {
evt.getCMD({pattern: 'alive$', fromMe: true, deleteCommand: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
   var alivemsg = config.ALIVEMSG
		


 await message.client.sendMessage(message.jid, { image: {url: config.ALIVEIMG }, caption: alivemsg  } , { quoted: message.data } )

}));
}
