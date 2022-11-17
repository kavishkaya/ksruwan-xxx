/*
Copyright (C) 2021 KAVIYAAH   ,  Diana whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 1.0.0 avalable)
*/


const Config = require('../config');
const config = require('../config');
const diana = require("../events");
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const Language = require('../language');
const Lang = Language.getString('updater');
			       

diana.getCMD({pattern: 'update now$', fromMe: true, react:'🔄' ,deleteCommand: false, desc: Lang.UPDATE_NOW_DESC  }, (async (message, match) => {

 
				
					 await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {

await  message.client.sendMessage(message.jid , { text: Lang.UPDATE }, { quoted: message.data } )
  
    } else {
    if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                message.client.sendMessage(message.jid , { text: Lang.INVALID_HEROKU + "\n\n" + Lang.IN_AF }, { quoted: message.data } );
            }
            message.client.sendMessage(message.jid , { text: Lang.UPDATING }, { quoted: message.data } );

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', config.BRANCH);

            message.client.sendMessage(message.jid , { text: Lang.UPDATED_LOCAL }, { quoted: message.data } );
            message.client.sendMessage(message.jid , { text: Lang.AFTER_UPDATE }, { quoted: message.data } );

        } 
    }
}));

diana.getCMD({pattern: 'update$', fromMe: true, react:'✅' ,deleteCommand: false, desc: Lang.UPDATER_DESC }, (async (message, match) => {
			
					 await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
          
await  message.client.sendMessage(message.jid , { text: Lang.UPDATE }, { quoted: message.data } )
    } else {

        var newzels = Lang.NEW_UPDATE ;
        commits['all'].map(
            (commit) => {
                newzels += '\n\n' +'🔹 [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' ◁◁' + commit.author_name + '▷▷\n ```';
            }
        );
      
await  message.client.sendMessage(message.jid , { text: newzels }, { quoted: message.data } )

    }


}));
