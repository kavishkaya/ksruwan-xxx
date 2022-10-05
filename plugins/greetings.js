const evt = require('../events');
const sql = require('./sql/greeting');
const Language = require('../language');
const Lang = Language.getString('greetings');
const config = require('../config')

evt.getCMD({pattern: 'welcome$' , fromMe: true , deleteCommand: false, NoListCmd: true}, (async (message, match) => {

    var hg = await sql.getMessage(message.jid);
    if (hg === false) {
        await message.client.sendMessage(message.jid, {text: Lang.NOT_SET_WELCOME});
    } else {
        await message.client.sendMessage(message.jid, {text: Lang.WELCOME_ALREADY_SETTED + hg.message});
    }
}));
evt.getCMD({pattern: 'welcome ?(.*)' , fromMe: true , deleteCommand: false, desc: Lang.WELCOME_DESC}, (async (message, match) => {

   if (match[1] === '') return ;
     if (match[1] === 'delete') {await message.client.sendMessage(message.jid, {text: Lang.WELCOME_DELETED}); return await sql.deleteMessage(message.jid, 'welcome'); }
    await sql.setMessage(message.jid, 'welcome', match[1].replace(/#/g, '\n'));
    return await message.client.sendMessage(message.jid, {text: Lang.WELCOME_SETTED})

}));
evt.getCMD({pattern: 'setwelcome$',fromMe: true,NoListCmd: true}, (async (message, match) => {

    if(!message.reply_message) return await message.client.sendMessage(message.jid, {text: Lang.SET_WELCOME })
    
    try{
    
    const welcomemessage = message.reply_message.text    
         
         await sql.setMessage(message.jid, 'welcome', welcomemessage);
       return await message.client.sendMessage(message.jid, {text: Lang.WELCOME_SETTED})
    }catch{
    return await message.reply(Lang.CANT_SET_WELCOME)
    }
}));


evt.getCMD({pattern: 'goodbye$' , fromMe: true , deleteCommand: false, NoListCmd: true }, (async (message, match) => {
    var hg = await sql.getMessage(message.jid, 'goodbye');
    if (hg === false) {
        await message.client.sendMessage(message.jid, {text: Lang.NOT_SET_GOODBYE})
    } else {
        await message.client.sendMessage(message.jid, {text: Lang.GOODBYE_ALREADY_SETTED + hg.message + '```'});
    }
}));
evt.getCMD({pattern: 'goodbye (.*)' , fromMe: true , deleteCommand: false, desc: Lang.GOODBYE_DESC}, (async (message, match) => {
    if (match[1] === '') return;
        if (match[1] === 'delete') { await message.client.sendMessage(message.jid, {text: Lang.GOODBYE_DELETED}); return await sql.deleteMessage(message.jid, 'goodbye'); }
        await sql.setMessage(message.jid, 'goodbye', match[1].replace(/#/g, '\n'));
        return await message.client.sendMessage(message.jid, {text: Lang.GOODBYE_SETTED})
    
}));
evt.getCMD({pattern: 'setgoodbye', fromMe: true, NoListCmd: true}, (async (message, match) => {

if(!message.reply_message) return await message.client.sendMessage(message.jid, {text: Lang.SET_GOODBYE })
try{    
 const gdbyemessage = message.reply_message.text    
   
     await sql.setMessage(message.jid, 'goodbye', gdbyemessage);
    return await message.client.sendMessage(message.jid, {text: Lang.GOODBYE_SETTED})
    }catch{
return await message.reply(Lang.CANT_SET_GOODBYE)
}
}));
