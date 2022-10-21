const evt = require('../events')
const config = require('../config');
const fs = require('fs');
const yts = require( 'yt-search' )
const { yta } = require('../lib/y2mate');
const prefix = '.'
const Language = require('../language');
const Lang = Language.getString('youtube');
const {Mimetype}= require('@adiwajshing/baileys')
const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false

evt.getCMD({pattern: 'ol papers', fromMe: QUEEN , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2015 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2015"},
    {title: ' 🗃️2016 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2016"},
    {title: ' 🗃️2017 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2017"},
    {title: ' 🗃️2018 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2018"},
    {title: ' 🗃️2019 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2019"} ]



  const sections = [{ title: "2015 - 2019 main subjects and brackert subjects", rows: rows15}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: "2015 සිට  2019 දක්වා වූ පසුගිය වසරවල past papers",
footer: config.FOOTER,
sections

}

await message.client.sendMessage(message.jid, button, {quoted: message.data})    



}));

evt.getCMD({pattern: 'ol_menu_2015', fromMe: QUEEN , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2015 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2015"},
    {title: ' 🗃️2015 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2015"},
    {title: ' 🗃️2015 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2015"},
    {title: ' 🗃️2015 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2015"},
    {title: ' 🗃️2015 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2015"},
    {title: ' 🗃️2015 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2015"},
    {title: ' 🗃️2015 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2015"} ]

const rows16 =[

    {title: ' 🗃️2015 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2015"},
    {title: ' 🗃️2015 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2015"},
    {title: ' 🗃️2015 ART🗃️ ', description:   " ", rowId: ".oart 2015"},
    {title: ' 🗃️2015 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2015"},
    {title: ' 🗃️2015 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2015"},
    {title: ' 🗃️2015 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2015"},
    {title: ' 🗃️2015 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2015"},
    {title: ' 🗃️2015 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2015"} ]

const rows17 =[
    {title: ' 🗃️2015 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2015"},
    {title: ' 🗃️2015 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2015"},
    {title: ' 🗃️2015 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2015"},
    {title: ' 🗃️2015 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2015"},
    {title: ' 🗃️2015 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2015"},
    {title: ' 🗃️2015 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2015"},
    {title: ' 🗃️2015 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2015"},
    {title: ' 🗃️2015 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2015"}, ]

const rows18 =[
    {title: ' 🗃️2015 ICT🗃️ ', description:    " ", rowId: ".oict 2015"},
    {title: ' 🗃️2015 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2015"},
    {title: ' 🗃️2015 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2015"},
    {title: ' 🗃️2015 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2015"},
    {title: ' 🗃️2015 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2015"},
    {title: ' 🗃️2015 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2015"},
    {title: ' 🗃️2015 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2015"} ]



  const sections = [{ title: "2015 main subjects", rows: rows15},
                    { title: "2015 1st bracket subjects", rows: rows17},
                    { title: "2015 2nd bracket subjects", rows: rows16},
                    { title: "2015 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));

evt.getCMD({pattern: 'ol_menu_2016', fromMe: QUEEN , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2016 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2016"},
    {title: ' 🗃️2016 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2016"},
    {title: ' 🗃️2016 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2016"},
    {title: ' 🗃️2016 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2016"},
    {title: ' 🗃️2016 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2016"},
    {title: ' 🗃️2016 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2016"},
    {title: ' 🗃️2016 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2016"} ]

const rows16 =[

    {title: ' 🗃️2016 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2016"},
    {title: ' 🗃️2016 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2016"},
    {title: ' 🗃️2016 ART🗃️ ', description:   " ", rowId: ".oart 2016"},
    {title: ' 🗃️2016 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2016"},
    {title: ' 🗃️2016 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2016"},
    {title: ' 🗃️2016 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2016"},
    {title: ' 🗃️2016 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2016"},
    {title: ' 🗃️2016 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2016"} ]

const rows17 =[
    {title: ' 🗃️2016 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2016"},
    {title: ' 🗃️2016 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2016"},
    {title: ' 🗃️2016 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2016"},
    {title: ' 🗃️2016 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2016"},
    {title: ' 🗃️2016 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2016"},
    {title: ' 🗃️2016 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2016"},
    {title: ' 🗃️2016 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2016"},
    {title: ' 🗃️2016 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2016"}, ]

const rows18 =[
    {title: ' 🗃️2016 ICT🗃️ ', description:    " ", rowId: ".oict 2016"},
    {title: ' 🗃️2016 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2016"},
    {title: ' 🗃️2016 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2016"},
    {title: ' 🗃️2016 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2016"},
    {title: ' 🗃️2016 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2016"},
    {title: ' 🗃️2016 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2016"},
    {title: ' 🗃️2016 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2016"} ]



  const sections = [{ title: "2016 main subjects", rows: rows15},
                    { title: "2016 1st bracket subjects", rows: rows17},
                    { title: "2016 2nd bracket subjects", rows: rows16},
                    { title: "2016 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));

evt.getCMD({pattern: 'ol_menu_2017', fromMe: QUEEN , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2017 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2017"},
    {title: ' 🗃️2017 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2017"},
    {title: ' 🗃️2017 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2017"},
    {title: ' 🗃️2017 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2017"},
    {title: ' 🗃️2017 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2017"},
    {title: ' 🗃️2017 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2017"},
    {title: ' 🗃️2017 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2017"} ]

const rows16 =[

    {title: ' 🗃️2017 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2017"},
    {title: ' 🗃️2017 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2017"},
    {title: ' 🗃️2017 ART🗃️ ', description:   " ", rowId: ".oart 2017"},
    {title: ' 🗃️2017 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2017"},
    {title: ' 🗃️2017 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2017"},
    {title: ' 🗃️2017 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2017"},
    {title: ' 🗃️2017 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2017"},
    {title: ' 🗃️2017 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2017"} ]

const rows17 =[
    {title: ' 🗃️2017 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2017"},
    {title: ' 🗃️2017 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2017"},
    {title: ' 🗃️2017 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2017"},
    {title: ' 🗃️2017 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2017"},
    {title: ' 🗃️2017 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2017"},
    {title: ' 🗃️2017 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2017"},
    {title: ' 🗃️2017 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2017"},
    {title: ' 🗃️2017 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2017"}, ]

const rows18 =[
    {title: ' 🗃️2017 ICT🗃️ ', description:    " ", rowId: ".oict 2017"},
    {title: ' 🗃️2017 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2017"},
    {title: ' 🗃️2017 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2017"},
    {title: ' 🗃️2017 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2017"},
    {title: ' 🗃️2017 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2017"},
    {title: ' 🗃️2017 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2017"},
    {title: ' 🗃️2017 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2017"} ]



  const sections = [{ title: "2017 main subjects", rows: rows15},
                    { title: "2017 1st bracket subjects", rows: rows17},
                    { title: "2017 2nd bracket subjects", rows: rows16},
                    { title: "2017 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));

evt.getCMD({pattern: 'ol_menu_2018', fromMe: QUEEN , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2018 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2018"},
    {title: ' 🗃️2018 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2018"},
    {title: ' 🗃️2018 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2018"},
    {title: ' 🗃️2018 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2018"},
    {title: ' 🗃️2018 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2018"},
    {title: ' 🗃️2018 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2018"},
    {title: ' 🗃️2018 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2018"} ]

const rows16 =[

    {title: ' 🗃️2018 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2018"},
    {title: ' 🗃️2018 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2018"},
    {title: ' 🗃️2018 ART🗃️ ', description:   " ", rowId: ".oart 2018"},
    {title: ' 🗃️2018 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2018"},
    {title: ' 🗃️2018 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2018"},
    {title: ' 🗃️2018 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2018"},
    {title: ' 🗃️2018 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2018"},
    {title: ' 🗃️2018 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2018"} ]

const rows17 =[
    {title: ' 🗃️2018 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2018"},
    {title: ' 🗃️2018 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2018"},
    {title: ' 🗃️2018 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2018"},
    {title: ' 🗃️2018 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2018"},
    {title: ' 🗃️2018 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2018"},
    {title: ' 🗃️2018 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2018"},
    {title: ' 🗃️2018 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2018"},
    {title: ' 🗃️2018 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2018"}, ]

const rows18 =[
    {title: ' 🗃️2018 ICT🗃️ ', description:    " ", rowId: ".oict 2018"},
    {title: ' 🗃️2018 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2018"},
    {title: ' 🗃️2018 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2018"},
    {title: ' 🗃️2018 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2018"},
    {title: ' 🗃️2018 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2018"},
    {title: ' 🗃️2018 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2018"},
    {title: ' 🗃️2018 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2018"} ]



  const sections = [{ title: "2018 main subjects", rows: rows15},
                    { title: "2018 1st bracket subjects", rows: rows17},
                    { title: "2018 2nd bracket subjects", rows: rows16},
                    { title: "2018 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));

evt.getCMD({pattern: 'ol_menu_2019', fromMe: QUEEN , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2019 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2019"},
    {title: ' 🗃️2019 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2019"},
    {title: ' 🗃️2019 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2019"},
    {title: ' 🗃️2019 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2019"},
    {title: ' 🗃️2019 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2019"},
    {title: ' 🗃️2019 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2019"},
    {title: ' 🗃️2019 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2019"} ]

const rows16 =[

    {title: ' 🗃️2019 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2019"},
    {title: ' 🗃️2019 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2019"},
    {title: ' 🗃️2019 ART🗃️ ', description:   " ", rowId: ".oart 2019"},
    {title: ' 🗃️2019 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2019"},
    {title: ' 🗃️2019 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2019"},
    {title: ' 🗃️2019 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2019"},
    {title: ' 🗃️2019 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2019"},
    {title: ' 🗃️2019 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2019"} ]

const rows17 =[
    {title: ' 🗃️2019 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2019"},
    {title: ' 🗃️2019 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2019"},
    {title: ' 🗃️2019 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2019"},
    {title: ' 🗃️2019 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2019"},
    {title: ' 🗃️2019 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2019"},
    {title: ' 🗃️2019 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2019"},
    {title: ' 🗃️2019 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2019"},
    {title: ' 🗃️2019 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2019"}, ]

const rows18 =[
    {title: ' 🗃️2019 ICT🗃️ ', description:    " ", rowId: ".oict 2019"},
    {title: ' 🗃️2019 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2019"},
    {title: ' 🗃️2019 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2019"},
    {title: ' 🗃️2019 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2019"},
    {title: ' 🗃️2019 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2019"},
    {title: ' 🗃️2019 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2019"},
    {title: ' 🗃️2019 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2019"} ]



  const sections = [{ title: "2019 main subjects", rows: rows15},
                    { title: "2019 1st bracket subjects", rows: rows17},
                    { title: "2019 2nd bracket subjects", rows: rows16},
                    { title: "2019 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));



evt.getCMD({pattern: 'ol papers', fromMe: DIANA , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2015 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2015"},
    {title: ' 🗃️2016 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2016"},
    {title: ' 🗃️2017 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2017"},
    {title: ' 🗃️2018 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2018"},
    {title: ' 🗃️2019 O/L Main & bracket Subjects Papers🗃️ ', description:   " ", rowId: ".ol_menu_2019"} ]



  const sections = [{ title: "2015 - 2019 main subjects and brackert subjects", rows: rows15}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: "2015 සිට  2019 දක්වා වූ පසුගිය වසරවල past papers",
footer: config.FOOTER,
sections

}

await message.client.sendMessage(message.jid, button, {quoted: message.data})    



}));

evt.getCMD({pattern: 'ol_menu_2015', fromMe: DIANA , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2015 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2015"},
    {title: ' 🗃️2015 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2015"},
    {title: ' 🗃️2015 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2015"},
    {title: ' 🗃️2015 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2015"},
    {title: ' 🗃️2015 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2015"},
    {title: ' 🗃️2015 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2015"},
    {title: ' 🗃️2015 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2015"} ]

const rows16 =[

    {title: ' 🗃️2015 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2015"},
    {title: ' 🗃️2015 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2015"},
    {title: ' 🗃️2015 ART🗃️ ', description:   " ", rowId: ".oart 2015"},
    {title: ' 🗃️2015 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2015"},
    {title: ' 🗃️2015 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2015"},
    {title: ' 🗃️2015 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2015"},
    {title: ' 🗃️2015 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2015"},
    {title: ' 🗃️2015 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2015"} ]

const rows17 =[
    {title: ' 🗃️2015 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2015"},
    {title: ' 🗃️2015 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2015"},
    {title: ' 🗃️2015 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2015"},
    {title: ' 🗃️2015 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2015"},
    {title: ' 🗃️2015 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2015"},
    {title: ' 🗃️2015 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2015"},
    {title: ' 🗃️2015 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2015"},
    {title: ' 🗃️2015 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2015"}, ]

const rows18 =[
    {title: ' 🗃️2015 ICT🗃️ ', description:    " ", rowId: ".oict 2015"},
    {title: ' 🗃️2015 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2015"},
    {title: ' 🗃️2015 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2015"},
    {title: ' 🗃️2015 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2015"},
    {title: ' 🗃️2015 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2015"},
    {title: ' 🗃️2015 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2015"},
    {title: ' 🗃️2015 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2015"} ]



  const sections = [{ title: "2015 main subjects", rows: rows15},
                    { title: "2015 1st bracket subjects", rows: rows17},
                    { title: "2015 2nd bracket subjects", rows: rows16},
                    { title: "2015 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));

evt.getCMD({pattern: 'ol_menu_2016', fromMe: DIANA , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2016 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2016"},
    {title: ' 🗃️2016 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2016"},
    {title: ' 🗃️2016 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2016"},
    {title: ' 🗃️2016 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2016"},
    {title: ' 🗃️2016 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2016"},
    {title: ' 🗃️2016 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2016"},
    {title: ' 🗃️2016 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2016"} ]

const rows16 =[

    {title: ' 🗃️2016 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2016"},
    {title: ' 🗃️2016 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2016"},
    {title: ' 🗃️2016 ART🗃️ ', description:   " ", rowId: ".oart 2016"},
    {title: ' 🗃️2016 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2016"},
    {title: ' 🗃️2016 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2016"},
    {title: ' 🗃️2016 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2016"},
    {title: ' 🗃️2016 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2016"},
    {title: ' 🗃️2016 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2016"} ]

const rows17 =[
    {title: ' 🗃️2016 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2016"},
    {title: ' 🗃️2016 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2016"},
    {title: ' 🗃️2016 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2016"},
    {title: ' 🗃️2016 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2016"},
    {title: ' 🗃️2016 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2016"},
    {title: ' 🗃️2016 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2016"},
    {title: ' 🗃️2016 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2016"},
    {title: ' 🗃️2016 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2016"}, ]

const rows18 =[
    {title: ' 🗃️2016 ICT🗃️ ', description:    " ", rowId: ".oict 2016"},
    {title: ' 🗃️2016 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2016"},
    {title: ' 🗃️2016 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2016"},
    {title: ' 🗃️2016 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2016"},
    {title: ' 🗃️2016 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2016"},
    {title: ' 🗃️2016 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2016"},
    {title: ' 🗃️2016 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2016"} ]



  const sections = [{ title: "2016 main subjects", rows: rows15},
                    { title: "2016 1st bracket subjects", rows: rows17},
                    { title: "2016 2nd bracket subjects", rows: rows16},
                    { title: "2016 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));

evt.getCMD({pattern: 'ol_menu_2017', fromMe: DIANA , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2017 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2017"},
    {title: ' 🗃️2017 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2017"},
    {title: ' 🗃️2017 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2017"},
    {title: ' 🗃️2017 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2017"},
    {title: ' 🗃️2017 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2017"},
    {title: ' 🗃️2017 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2017"},
    {title: ' 🗃️2017 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2017"} ]

const rows16 =[

    {title: ' 🗃️2017 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2017"},
    {title: ' 🗃️2017 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2017"},
    {title: ' 🗃️2017 ART🗃️ ', description:   " ", rowId: ".oart 2017"},
    {title: ' 🗃️2017 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2017"},
    {title: ' 🗃️2017 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2017"},
    {title: ' 🗃️2017 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2017"},
    {title: ' 🗃️2017 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2017"},
    {title: ' 🗃️2017 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2017"} ]

const rows17 =[
    {title: ' 🗃️2017 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2017"},
    {title: ' 🗃️2017 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2017"},
    {title: ' 🗃️2017 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2017"},
    {title: ' 🗃️2017 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2017"},
    {title: ' 🗃️2017 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2017"},
    {title: ' 🗃️2017 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2017"},
    {title: ' 🗃️2017 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2017"},
    {title: ' 🗃️2017 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2017"}, ]

const rows18 =[
    {title: ' 🗃️2017 ICT🗃️ ', description:    " ", rowId: ".oict 2017"},
    {title: ' 🗃️2017 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2017"},
    {title: ' 🗃️2017 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2017"},
    {title: ' 🗃️2017 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2017"},
    {title: ' 🗃️2017 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2017"},
    {title: ' 🗃️2017 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2017"},
    {title: ' 🗃️2017 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2017"} ]



  const sections = [{ title: "2017 main subjects", rows: rows15},
                    { title: "2017 1st bracket subjects", rows: rows17},
                    { title: "2017 2nd bracket subjects", rows: rows16},
                    { title: "2017 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));

evt.getCMD({pattern: 'ol_menu_2018', fromMe: DIANA , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2018 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2018"},
    {title: ' 🗃️2018 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2018"},
    {title: ' 🗃️2018 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2018"},
    {title: ' 🗃️2018 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2018"},
    {title: ' 🗃️2018 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2018"},
    {title: ' 🗃️2018 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2018"},
    {title: ' 🗃️2018 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2018"} ]

const rows16 =[

    {title: ' 🗃️2018 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2018"},
    {title: ' 🗃️2018 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2018"},
    {title: ' 🗃️2018 ART🗃️ ', description:   " ", rowId: ".oart 2018"},
    {title: ' 🗃️2018 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2018"},
    {title: ' 🗃️2018 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2018"},
    {title: ' 🗃️2018 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2018"},
    {title: ' 🗃️2018 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2018"},
    {title: ' 🗃️2018 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2018"} ]

const rows17 =[
    {title: ' 🗃️2018 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2018"},
    {title: ' 🗃️2018 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2018"},
    {title: ' 🗃️2018 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2018"},
    {title: ' 🗃️2018 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2018"},
    {title: ' 🗃️2018 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2018"},
    {title: ' 🗃️2018 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2018"},
    {title: ' 🗃️2018 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2018"},
    {title: ' 🗃️2018 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2018"}, ]

const rows18 =[
    {title: ' 🗃️2018 ICT🗃️ ', description:    " ", rowId: ".oict 2018"},
    {title: ' 🗃️2018 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2018"},
    {title: ' 🗃️2018 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2018"},
    {title: ' 🗃️2018 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2018"},
    {title: ' 🗃️2018 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2018"},
    {title: ' 🗃️2018 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2018"},
    {title: ' 🗃️2018 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2018"} ]



  const sections = [{ title: "2018 main subjects", rows: rows15},
                    { title: "2018 1st bracket subjects", rows: rows17},
                    { title: "2018 2nd bracket subjects", rows: rows16},
                    { title: "2018 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));

evt.getCMD({pattern: 'ol_menu_2019', fromMe: DIANA , react:'📁' ,deleteCommand: false,  NoListCmd: true }, (async (message, match) => {

    const rows15 =[ 
    {title: ' 🗃️2019 SINHALA🗃️ ',    description:   " ", rowId: ".osin 2019"},
    {title: ' 🗃️2019 BUDDHISM🗃️ ', description:   " ", rowId: ".obu 2019"},
    {title: ' 🗃️2019 SCIENCE*🗃️ ', description:   " ", rowId: ".osci 2019"},
    {title: ' 🗃️2019 MATHEMATICS🗃️ ', description:   " ", rowId: ".omaths 2019"},
    {title: ' 🗃️2019 HISTORY🗃️ ', description:   " ", rowId: ".ohis 2019"},
    {title: ' 🗃️2019 ENGLISH🗃️ ', description:   " ", rowId: ".oen 2019"},
    {title: ' 🗃️2019 TAMIL🗃️ ',   description:    " ", rowId: ".otamil 2019"} ]

const rows16 =[

    {title: ' 🗃️2019 MUSIC🗃️ ', description:   " ", rowId: ".omusic 2019"},
    {title: ' 🗃️2019 DRAMA🗃️ ', description:   " ", rowId: ".odrama 2019"},
    {title: ' 🗃️2019 ART🗃️ ', description:   " ", rowId: ".oart 2019"},
    {title: ' 🗃️2019 DANCING (ORIANTAL)🗃️ ',   description:    " ", rowId: ".odanceori 2019"},
    {title: ' 🗃️2019 DANCING (BHARATH)🗃️ ', description:   " ", rowId: ".odanceb 2019"},
    {title: ' 🗃️2019 TAMIL LITERATURE🗃️ ', description:   " ", rowId: ".otlit 2019"},
    {title: ' 🗃️2019 SINHALA LITERATURE🗃️ ', description:   " ", rowId: ".osilit 2019"},
    {title: ' 🗃️2019 ENGLISH LITERATURE🗃️ ', description:   " ", rowId: ".oliten 2019"} ]

const rows17 =[
    {title: ' 🗃️2019 SECOND LANGUAGE TAMIL🗃️ ', description:    " ", rowId: ".oslant 2019"},
    {title: ' 🗃️2019 JAPAN🗃️ ', description:   " ", rowId: ".ojapan 2019"},
    {title: ' 🗃️2019 HINDI🗃️ ', description:   " ", rowId: ".ohindi 2019"},
    {title: ' 🗃️2019 GEOGRAPHY🗃️ ', description:   " ", rowId: ".ogeog 2019"},
    {title: ' 🗃️2019 FRENCH🗃️ ', description:    " ", rowId: ".ofrench 2019"},
    {title: ' 🗃️2019 ENTRENEURSHIP STUDIES🗃️ ', description:   " ", rowId: ".oentrenstu 2019"},
    {title: ' 🗃️2019 CIVIC🗃️ ', description:   " ", rowId: ".ocivic 2019"},
    {title: ' 🗃️2019 BUSINAS ACCOUNTING STUDIES🗃️ ', description:   " ", rowId: ".obusiac 2019"}, ]

const rows18 =[
    {title: ' 🗃️2019 ICT🗃️ ', description:    " ", rowId: ".oict 2019"},
    {title: ' 🗃️2019 HOME ECONOMIC🗃️ ', description:   " ", rowId: ".ohomec 2019"},
    {title: ' 🗃️2019 HELTH🗃️ ', description:   " ", rowId: ".ohelth 2019"},
    {title: ' 🗃️2019 DISIGN TECHNOLOGY🗃️ ', description:    " ", rowId: ".oisigntech 2019"},
    {title: ' 🗃️2019 COMUNICATION AND MEDIA🗃️ ', description:   " ", rowId: ".omedia 2019"},
    {title: ' 🗃️2019 ART AND CRAFT🗃️ ', description:   " ", rowId: ".oarcraft 2019"},
    {title: ' 🗃️2019 AGREE CULTURE🗃️ ', description:   " ", rowId: ".oagree 2019"} ]



  const sections = [{ title: "2019 main subjects", rows: rows15},
                    { title: "2019 1st bracket subjects", rows: rows17},
                    { title: "2019 2nd bracket subjects", rows: rows16},
                    { title: "2019 3rd bracket subjects", rows: rows18}]

const button = {

buttonText: 'Click Me',
title: ' ',
text: " ",
footer: config.FOOTER,
sections

}
await message.client.sendMessage(message.jid, button, {quoted: message.data})    
}));