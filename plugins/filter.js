const fs = require('fs')
const Diana = require('../events');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('filters');


Diana.getCMD({pattern: 'filter ?(.*)', fromMe: true,NoListCmd: true , desc: Lang.FILTER_DESC}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid, {text: Lang.NO_FILTER})
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid, { text: mesaj} );
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid, { text: Lang.NEED_REPLY + ' ```.filter "sa" "as"' });
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid, { text: Lang.FILTERED.format(match[0].replace(/['"]+/g, '')) });
    }
}));
Diana.getCMD({pattern: 'stop ?(.*)', fromMe: true,NoListCmd: true , desc: Lang.STOP_DESC}, (async (message, match) => {

    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid, { text:Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```'})
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,{ text: Lang.ALREADY_NO_FILTER })
    } else {
        await message.client.sendMessage(message.jid, { text: Lang.DELETED})
    }
}));


Diana.getCMD({on: 'text', fromMe: false  ,NoListCmd: true}, (async (message, match) => {
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,{ text: filter.dataValues.text }, {quoted: message.data});
            }
        }
    );
}));
Diana.getCMD({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){

const array = ['adde','Adde','ade','Ade','Ane','ane','Ado','ado','fuck','Fuck','Bonnone','bonnone','Gm','gm','Gn','gn','Good morning','Good night','mk','Mk','Hi','hi','Na','na','oo','Ooo','Ow','ow']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, { sticker: fs.readFileSync('./upload/stickers/' + a + '.webp')} , {  quoted: message.data})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));