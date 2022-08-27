const evt = require('../events');
const Heroku = require('heroku-client');
const Config = require('../config');
const got = require('got');
const fs = require('fs');
const Db = require('./sql/plugin');
const Language = require('../language');
const Lang = Language.getString('_plugin');
const NLang = Language.getString('updater');
let msg = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Resmi Olarak Onaylanmıştır!* ✅' : '*This Plugin is Officially Approved by Queen Diana!* ✅'
let unmsg = Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*Bu Plugin Resmi Değildir!* ❌' : '*Queen Diana not accptt this Plugin please remove this!* ❌'


const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

let baseURI = '/apps/' + Config.HEROKU.APP_NAME;



var LANG = {
            unaffinfo: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*ස්ථාපිත ප්ලගිනයේ අවදානම් මට්ටම:* _%' : '*Danger Level of Installed Plugin:* _%',
            harmful: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*මෙම ප්ලගිනය හානිකර බැවින් එය ස්ථාපනය කළ නොහැක!*' : '*This Plugin Cannot Be Installed As It Is Harmful!*',
            duplicate: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*ඔබට එකම ප්ලගිනය දෙවරක් ස්ථාපනය කළ නොහැක!*' : '*You Cannot Install the Same Plugin 2 Times!*',
            limit: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*මෙම ප්ලගිනය ආරක්ෂක සීමාව ඉක්මවා යයි!*\n*හානි කිරීමේ ප්‍රතිශතය:* _%' : '*This Plugin Exceeds Security Limit!*\n*Percentage of Harm:* _%',
            imside: Config.LANG == 'TR' || Config.LANG == 'AZ' ? '*ඔබට පවතින ප්ලගීන නැවත ස්ථාපනය කළ නොහැක!*' : '*You Cant Reinstall Existing Plugins!*'
};

evt.getCMD({pattern: 'pkg ?(.*)' , fromMe: true, deleteCommand: false, desc: Lang.PLUGINS_INSTSLL }, (async (message, match) => {

    if (match[1] == '') return await message.client.sendMessage(message.jid, {text: Lang.NEED_URL + '.install https://gist.github.com/kavishkaya/4232b1c8c4734e1f06c3d991149c6fbd'})
    try {
        var url = new URL(match[1]);
    } catch {
        return await message.client.sendMessage(message.jid, {text:Lang.INVALID_URL});
    }
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }
    var response = await got(url);
    if (response.statusCode == 200) {
       
        var plugin_name = response.body.match(/getCMD\({.*pattern: ["'](.*)["'].*}/);
        if (plugin_name.length >= 1) {
            plugin_name = "__" + plugin_name[1];
        } else {
            plugin_name = "__" + Math.random().toString(36).substring(8);
        }

        fs.writeFileSync('./plugins/' + plugin_name + '.js', response.body);
        try {
            require('./' + plugin_name);
        } catch (e) {
            fs.unlinkSync('/root/queendianamd/plugins/' + plugin_name + '.js')
            return await message.client.sendMessage(message.jid, {text:Lang.INVALID_PLUGIN + ' ```' + e + '```'});
        }
        var DEG = { level: 5 }
        if (response.body.includes('fs.')) DEG.level = DEG.level + 8
        if (response.body.includes('message.client.user.name')) DEG.level = DEG.level + 6
        if (response.body.includes('Buffer')) DEG.level = DEG.level + 14
        if (response.body.includes("require('fs')")) DEG.level = DEG.level + 9
        if (response.body.includes('quotedMessage')) DEG.level = DEG.level + 5
        if (response.body.includes('fs.unlinkSync')) DEG.level = DEG.level + 16
        if (response.body.includes('findAll')) DEG.level = DEG.level + 20
        if (response.body.includes('MessageType.location')) DEG.level = DEG.level + 9
        if (response.body.includes('message.client.user.jid')) DEG.level = DEG.level + 8
        if (response.body.includes('exec')) DEG.level = DEG.level + 14
        if (response.body.includes('setMessage')) DEG.level = DEG.level + 22
        if (response.body.includes('/sql/notes') || response.body.includes('/sql/lydia') || response.body.includes('/sql/plugin') || response.body.includes('/sql/greetings') || response.body.includes('/sql/filters')) DEG.level = DEG.level + 33
        if (response.body.includes('neofetch')) DEG.level = DEG.level + 12
        if (response.body.includes('groupMetadata')) DEG.level = DEG.level + 29
        if (response.body.includes('similarity')) DEG.level = DEG.level + 18
        if (response.body.includes('format')) DEG.level = DEG.level + 26
        var plugins = await Db.PluginDB.findAll()
        var find = '';
        await plugins.map((plugin) => { find += plugin.dataValues.name })
        if (find.includes(plugin_name)) {
            await message.client.sendMessage(message.jid, {text: LANG.duplicate})
            await new Promise(r => setTimeout(r, 400))
            fs.unlinkSync('/root/queendianamd/plugins/' + plugin_name + '.js')
        }
        else if (response.body.includes('formation') && !match[1].includes('kavishkaya')) {
            await message.client.sendMessage(message.jid,{text: LANG.harmful})
            await new Promise(r => setTimeout(r, 400))
            fs.unlinkSync('/root/queendianamd/plugins/' + plugin_name + '.js')
        } 
        else if ((response.body.includes('commands.map') || response.body.includes('PluginDB') || response.body.includes('groupRemove') || response.body.includes('groupAdd') || response.body.includes('groupMakeAdmin') || response.body.includes('groupDemoteAdmin') || response.body.includes('groupSettingChange') || response.body.includes('groupInviteCode') || response.body.includes('Math.round((new Date()).getTime() / 1000)') || response.body.includes('https://thiccyscarbonapi.herokuapp.com/?code=') || response.body.includes('filtreler.map') || response.body.includes('heroku.delete') || response.body.includes('heroku.patch') || response.body.includes('Chrome/80.0.3987.149 Mobile Safari/537.36') || response.body.includes('groupLeave') || response.body.includes('updateProfilePicture') || response.body.includes('blockUser') || response.body.includes("Language.getString('system_stats')") || response.body.includes("commits['all'].map") || response.body.includes('await git.fetch') || response.body.includes('jids.push')) && !match[1].includes('kavishkaya')) {
            await message.client.sendMessage(message.jid,{text: LANG.imside})
            await new Promise(r => setTimeout(r, 400))
            fs.unlinkSync('/root/queendianamd/plugins/' + plugin_name + '.js')
        } 
        else {
            if (!match[1].includes('kavishkaya') && DEG.level > 99) {
                await message.client.sendMessage(message.jid,{text:LANG.limit + DEG.level + '_'})
                fs.unlinkSync('/root/queendianamd/plugins/' + plugin_name + '.js')
            }
             if (!match[1].includes('kavishka') && DEG.level > 99) {
                await message.client.sendMessage(message.jid,{text:LANG.limit + DEG.level + '_'})
                fs.unlinkSync('/root/queendianamd/plugins/' + plugin_name + '.js')
            }
            else if (!match[1].includes('lkruwan') && DEG.level < 100) {
                await Db.installPlugin(url, plugin_name)
                await new Promise(r => setTimeout(r, 400))
                await message.client.sendMessage(message.jid,{text: Lang.UNOFF})
                await new Promise(r => setTimeout(r, 400))
                await message.client.sendMessage(message.jid,{text: LANG.unaffinfo + DEG.level + '_'})
            }
            else if (!match[1].includes('kavishka') && DEG.level < 100) {
                await Db.installPlugin(url, plugin_name)
                await new Promise(r => setTimeout(r, 400))
                await message.client.sendMessage(message.jid,{text: Lang.UNOFF})
                await new Promise(r => setTimeout(r, 400))
                await message.client.sendMessage(message.jid,{text: LANG.unaffinfo + DEG.level + '_'})
            }
            else {
                await new Promise(r => setTimeout(r, 400))
                await Db.installPlugin(url, plugin_name)
                await message.client.sendMessage(message.jid,{text: Lang.INSTALLED})
            }
        }
    }
}));


evt.getCMD({pattern: 'plugins$' , fromMe: true, deleteCommand: false, desc: Lang.INSTSLL_PLUGINS }, (async (message, match) => {    

var plugins = await Db.PluginDB.findAll()

var plist = [];
for (var index = 0; index < plugins.length ; index++) {


 let vf = plugins[index].dataValues.url.includes('kavishkaya') ? msg : unmsg

    plist.push({
  title: index+1 ,
   description: `
*Plugin name :* _${plugins[index].dataValues.name}_
*Plugin url :* _${plugins[index].dataValues.url}_

${vf}
`,
rowId: `${plugins[index].dataValues.name}`
});


}

const sections = [{
title: "you Installed External Plugins",
rows: plist
}]
const listMessage = {
text: `

Found ${plugins.length} Plugins

here is you installed external plugins
`,
footer: "Queen Diana MD " ,
title: '[QUEEN DIANA PLUGINS]',
buttonText: "SELECT PLUGINS",
sections
}
 
    await message.client.sendMessage(message.jid , listMessage)


}));


evt.getCMD({pattern: 'remove$' , fromMe: true, deleteCommand: false, desc: Lang.REMOVE_DESC}, (async (message, match) => {    

    var plugins = await Db.PluginDB.findAll()
    
    var plist = [];
    for (var index = 0; index < plugins.length ; index++) {
    
    
    
plist.push({
      title: index+1 ,
       description: `
    *Plugin name :* _${plugins[index].dataValues.name}_
 
    
    `,
    rowId: `.delmyinstallpluginsnow ${plugins[index].dataValues.name}`
    });
    
    
    }
    
    const sections = [{
    title: "you Installed External Plugins",
    rows: plist
    }]
    const listMessage = {
    text: `
    
    
    here is you installed external plugins
    select Plugin to remove external plugin
    `,
    footer: "Queen Diana MD" ,
    title: '[QUEEN DIANA PLUGINS]',
    buttonText: "SELECT PLUGIN",
    sections
    }
     
        await message.client.sendMessage(message.jid , listMessage) 
}));


evt.getCMD({pattern: 'delmyinstallpluginsnow(?: |$)(.*)' , fromMe: true, deleteCommand: false, NoListCmd: true }, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,{text: Lang.NEED_PLUGIN});
    if (!match[1].startsWith('__')) match[1] = '__' + match[1];
    try {
        var plugin = await Db.PluginDB.findAll({ where: {name: match[1]} });
        if (plugin.length < 1) {
            return await message.client.sendMessage(message.jid,{text: Lang.NOT_FOUND_PLUGIN});
        } else {
            await plugin[0].destroy();
            delete require.cache[require.resolve('./' + match[1] + '.js')]
            fs.unlinkSync('./plugins/' + match[1] + '.js');
            await message.client.sendMessage(message.jid,{text: Lang.DELETED});        
            await new Promise(r => setTimeout(r, 1000));  
            await message.client.sendMessage(message.jid, {text: NLang.AFTER_UPDATE});
            console.log(baseURI);
            await heroku.delete(baseURI + '/dynos').catch(async (error) => {
                await message.client.sendMessage(message.jid, {text:error.message});
            });
        }
    } catch (errormsg) { return await message.client.sendMessage(message.jid,{text: Lang.NOT_FOUND_PLUGIN}) }
}));
