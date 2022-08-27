const diana = require('../events');
const fs = require('fs');
const NEED_REPLY = '⚠️tag stataus'
const { writeFile } = require('fs/promises')
const {downloadMediaMessage} = require('@adiwajshing/baileys')
const config = require('../config')
const Language = require('../language');
const Lang = Language.getString('status');
const ST_DOWNLOAD = "Status downloading"




diana.getCMD({pattern: 'stdown$', fromMe: true, deleteCommand: true, desc: ST_DOWNLOAD }, (async (message, match) => {

        if (message.reply_message === false) return await message.reply(message.jid, Lang.NEED_REPLY );
        

        var location = await downloadMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {

            await writeFile('/root/queendianamd/st.png', location)
            await message.client.sendMessage(message.jid,  { image: fs.readFileSync('/root/queendianamd/st.png') , caption: config.CAPTION});
            
        return 
        }

                await writeFile('/root/queendianamd/sta.mp4', location)
                await message.client.sendMessage(message.jid, { video: fs.readFileSync('/root/queendianamd/sta.mp4') , caption: config.CAPTION });
            
        return 
    }));
