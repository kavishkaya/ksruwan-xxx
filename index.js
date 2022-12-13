const P = require('pino')
const { delay, DisconnectReason, useSingleFileAuthState } = require('@adiwajshing/baileys');
const { fstat } = require('fs');
const makeWASocket = require('@adiwajshing/baileys').default;
const fs = require('fs');

const startSock = () => {

const { state, saveState } = useSingleFileAuthState('/root/queendianamd/DIANA/diaAuth.json')

const sock = makeWASocket({
    logger: P({ level: 'fatal' }),
    printQRInTerminal: true,
    auth: state,
    browser: ['Queen-Diana-Md-2' , 'FIREFOX' , 'v5'],
});




sock.ev.on('creds.update', saveState)



sock.ev.on('connection.update', function (update, connection2) {
    let _a, _b;
    let connection = update.connection, lastDisconnect = update.lastDisconnect;
    if (connection === 'close') {
      
        if (((_b = (_a = lastDisconnect.error) === null || _a === void 0 ? void 0 : _a.output) === null || _b === void 0 ? void 0 : _b.statusCode) !== DisconnectReason.loggedOut) {
            
            startSock()
            

        }
        else {
        
           fs.unlink('/root/queendianamd/DIANA/diaAuth.json', (err => { }));

            
        }
    }

    if (update.qr == undefined){
    
}else{
    var qr = require('qr-image');
    console.log( update.qr);

var qr_svg = qr.image(`${update.qr}`, { type: 'png' });
qr_svg.pipe(require('fs').createWriteStream('./lib/qr code.png'));
}
delay(10*5000)
require('./html')
});


return sock
}

startSock()