const diana = require('../events')
const yts = require('yt-search')
const config = require('../config')
const prefix = '.'
const Language = require('../language');
const Lang = Language.getString('youtube');
const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false

diana.getCMD({pattern: 'yt (.*)', fromMe: QUEEN, react:'🔍' ,deleteCommand: false, desc: Lang.YT_DESC }, (async (message, match) => {
        if (match[1] === '')  await message.react("❗");
        if (!match[1]) return await message.client.sendMessage(message.jid, {text: Lang.NEED_YT_SEARCH }, {quoted: message.data})
        SEARCHING = await message.client.sendMessage(message.jid, { text: Lang.SEARCHING_YT }, {quoted: message.data})
        try {
                var arama = await yts(match[1]);
        } catch {
                if (match[1] === '')  await message.react("❗");
                return await message.client.sendMessage(message.jid, {text: Lang.FAIL_YT }, {quoted: message.data})
        }
        arama = arama.videos
        var videos = [];
        for (var index = 0; index < arama.length; index++) {
                videos.push({
                        title: index + 1 ,
                        description: `
*🧚Title :* _${arama[index].title}_
*📎Link :* _${arama[index].url}_
*⏰Duration :* _${arama[index].timestamp}_
*👁Views :* _${arama[index].views}_
*📅Time ago :* _${arama[index].ago}_
*🌐Channel :* _${arama[index].author.name}_
*🖇Channel Url :* _${arama[index].author.url}_
 
`,
                        rowId: `.upvideosongselect ${arama[index].url}`
                });
        }
        const sections = [{
                title: "YouTube search results",
                rows: videos
        }]
        const listMessage = {
                text: `
                  𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
*〘YOUTUBE SEARCH RESULTS〙*

*RESULTS FOR*  _${match[1]}_

Found ${arama.length} Results

Select one to download video or song

╚════════●●●════════╝   
`,
                footer: config.FOOTER,
                title: '╔═══════【👸】═══════╗',
                buttonText: "Select a video",
                sections
        }
        await message.client.sendMessage(message.jid, listMessage , {quoted: message.data})
        message.delete(SEARCHING)
}));


diana.getCMD({pattern: 'yt (.*)', fromMe: DIANA, react:'🔍' , deleteCommand: false, desc: Lang.YT_DESC }, (async (message, match) => {
        if (match[1] === '')  await message.react("❗");
        if (!match[1]) return await message.client.sendMessage(message.jid, {text: Lang.NEED_YT_SEARCH }, {quoted: message.data})
        SEARCHING = await message.client.sendMessage(message.jid, { text: Lang.SEARCHING_YT }, {quoted: message.data})
        try {
                var arama = await yts(match[1]);
        } catch {
                return await message.client.sendMessage(message.jid, {text: Lang.FAIL_YT }, {quoted: message.data})
        }
        arama = arama.videos
        var videos = [];
        for (var index = 0; index < arama.length; index++) {
                videos.push({
                        title: index + 1 ,
                        description: `

*🧚Title :* _${arama[index].title}_
*📎Link :* _${arama[index].url}_
*⏰Duration :* _${arama[index].timestamp}_
*👁Views :* _${arama[index].views}_
*📅Time ago :* _${arama[index].ago}_
*🌐Channel :* _${arama[index].author.name}_
*🖇Channel Url :* _${arama[index].author.url}_

`,
                        rowId: `.upvideosongselect ${arama[index].url}`
                });
        }
        const sections = [{
                title: "YouTube search results",
                rows: videos
        }]
        const listMessage = {
                text: `
                  𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
*〘YOUTUBE SEARCH RESULTS〙*

*RESULTS FOR*  _${match[1]}_

Found ${arama.length} Results

Select one to download video or song

╚════════●●●════════╝   
`,
                footer: config.FOOTER,
                title: '╔═══════【👸】═══════╗',
                buttonText: "Select a video",
                sections
        }
        await message.client.sendMessage(message.jid, listMessage , {quoted: message.data})
        message.delete(SEARCHING)
}));
