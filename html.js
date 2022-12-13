const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use('/static' , express.static('public'))
app.use('/qr' , express.static('lib'))

if ( fs.existsSync('/root/queendianamd/DIANA/diaAuth.json') == true ){

app.get('/' ,function(req, res) {
    res.sendFile(path.join(__dirname , './loged.html'));
})

}else{
    app.get('/' ,function(req, res) {
        res.sendFile(path.join(__dirname , './index.html'));
    })
}

app.listen(8000);
console.log(  fs.existsSync('/root/queendianamd/DIANA/diaAuth.json') )

console.log("open in https://localhost:8000")