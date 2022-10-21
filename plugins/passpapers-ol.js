const evt = require('../events');
const Config = require('../config');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Language = require('../language');
const QUEEN = config.WORKTYPE == 'public' ? true : ''
const DIANA = config.WORKTYPE == 'private' ? true : false

const EX = require('../lib/exam-papers')
// SINHALA
const SIN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y15
const SIN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y16
const SIN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y17
const SIN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y18
const SIN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SIN + "\n*📂YEAR:* " + EX.Y19

// SCIENCE
const SC15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y15
const SC16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y16
const SC17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y17
const SC18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y18
const SC19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SCI + "\n*📂YEAR:* " + EX.Y19

// MATHS
const MA15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y15
const MA16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y16
const MA17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y17
const MA18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y18
const MA19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MTS + "\n*📂YEAR:* " + EX.Y19

// HISTORY
const HIS15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y15
const HIS16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y16
const HIS17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y17
const HIS18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y18
const HIS19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIS + "\n*📂YEAR:* " + EX.Y19

// ENGLISH
const EN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y15
const EN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y16
const EN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y17
const EN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y18
const EN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENG + "\n*📂YEAR:* " + EX.Y19

// BUDDHISM
const BU15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y15
const BU16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y16
const BU17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y17
const BU18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y18
const BU19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BUD + "\n*📂YEAR:* " + EX.Y19

// TAMIL
const TAM115_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y15
const TAM116_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y16
const TAM117_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y17
const TAM118_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y18
const TAM119_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAM + "\n*📂YEAR:* " + EX.Y19

// MUSIC
const MUS115_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y15
const MUS116_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y16
const MUS117_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y17
const MUS118_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y18
const MUS119_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MUS + "\n*📂YEAR:* " + EX.Y19

// DRAMA
const DR15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y15
const DR16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y16
const DR17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y17
const DR18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y18
const DR19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DRA + "\n*📂YEAR:* " + EX.Y19

//DANCE ORIANTAL
const DO15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y15
const DO16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y16
const DO17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y17
const DO18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y18
const DO19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANO + "\n*📂YEAR:* " + EX.Y19

//DANCE BHARATH
const DB15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y15
const DB16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y16
const DB17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y17
const DB18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y18
const DB19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DANB + "\n*📂YEAR:* " + EX.Y19

//TAMIL LIT
const TAML15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y15
const TAML16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y16
const TAML17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y17
const TAML18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y18
const TAML19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.TAML + "\n*📂YEAR:* " + EX.Y19

//SINHALA LIT
const SLIT15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y15
const SLIT16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y16
const SLIT17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y17
const SLIT18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y18
const SLIT19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SINL + "\n*📂YEAR:* " + EX.Y19

//ENGLISH LIT
const LITEN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y15
const LITEN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y16
const LITEN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y17
const LITEN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y18
const LITEN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENGL + "\n*📂YEAR:* " + EX.Y19

//ART
const AR15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y15
const AR16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y16
const AR17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y17
const AR18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y18
const AR19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ART + "\n*📂YEAR:* " + EX.Y19

//SECOND LANG TAMIL
const SLT15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y15
const SLT16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y16
const SLT17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y17
const SLT18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y18
const SLT19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.SLT + "\n*📂YEAR:* " + EX.Y19

//JAPAN
const JAP15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y15
const JAP16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y16
const JAP17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y17
const JAP18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y18
const JAP19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.JAP + "\n*📂YEAR:* " + EX.Y19

//HINDI
const HIN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y15
const HIN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y16
const HIN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y17
const HIN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y18
const HIN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HIN + "\n*📂YEAR:* " + EX.Y19

//GEOGRAPHY
const GRO15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y15
const GRO16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y16
const GRO17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y17
const GRO18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y18
const GRO19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.GRO + "\n*📂YEAR:* " + EX.Y19

//FRENCH
const FREN15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y15
const FREN16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y16
const FREN17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y17
const FREN18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y18
const FREN19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.FREN + "\n*📂YEAR:* " + EX.Y19

//ENTRENEURSHIP STUDIES
const ENTR15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y15
const ENTR16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y16
const ENTR17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y17
const ENTR18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y18
const ENTR19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ENTR + "\n*📂YEAR:* " + EX.Y19

//CIVIC
const CIV15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y15
const CIV16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y16
const CIV17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y17
const CIV18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y18
const CIV19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CIV + "\n*📂YEAR:* " + EX.Y19

//BUSINAS ACCOUNTING STUDIES
const BAST15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y15
const BAST16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y16
const BAST17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y17
const BAST18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y18
const BAST19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.BAST + "\n*📂YEAR:* " + EX.Y19

//IT
const ICT15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y15
const ICT16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y16
const ICT17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y17
const ICT18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y18
const ICT19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.ICT + "\n*📂YEAR:* " + EX.Y19

//HOME economiv
const HOMEC15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y15
const HOMEC16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y16
const HOMEC17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y17
const HOMEC18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y18
const HOMEC19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HOMEC + "\n*📂YEAR:* " + EX.Y19

//helth
const HEL15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y15
const HEL16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y16
const HEL17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y17
const HEL18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y18
const HEL19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.HEL + "\n*📂YEAR:* " + EX.Y19

//media
const MEDIA15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y15
const MEDIA16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y16
const MEDIA17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y17
const MEDIA18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y18
const MEDIA19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.MEDIA + "\n*📂YEAR:* " + EX.Y19

//art and craft
const CRAFT15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y15
const CRAFT16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y16
const CRAFT17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y17
const CRAFT18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y18
const CRAFT19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.CRAFT + "\n*📂YEAR:* " + EX.Y19

//agree
const AGREE15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y15
const AGREE16_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y16
const AGREE17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y17
const AGREE18_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y18
const AGREE19_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.AGREE + "\n*📂YEAR:* " + EX.Y19

//DISIGN TECHNOLOGY
const DIST15_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DIST + "\n*📂YEAR:* " + EX.Y15
const DIST17_UP = "*✍️EXAM:* " + EX.OL + "\n*⭕SUBJECT:* " + EX.DIST + "\n*📂YEAR:* " + EX.Y17




// LIST
const EFFECT_DESC = "to download past papers."
const NEED_WORD = "*input command*"
const DFG = "Searching your paper"
const UPD = "*📤UPLOADING...*"


//SINHALA (A)
evt.getCMD({pattern: 'osin 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osin 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osin 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osin 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osin 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//science (B)
evt.getCMD({pattern: 'osci 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USCI + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osci 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USCI + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osci 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USCI + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osci 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.EX.USCI + ' ' + EX},  {quoted: message.data .UY18 })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osci 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USCI + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));  

//maths (C)     
evt.getCMD({pattern: 'omaths 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omaths 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omaths 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omaths 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omaths 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//HISTORY  (D)    
evt.getCMD({pattern: 'ohis 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohis 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohis 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohis 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohis 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));      

//ENGLISH  (E)    
evt.getCMD({pattern: 'oen 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oen 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oen 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oen 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oen 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//BUDDISM  (F)    
evt.getCMD({pattern: 'obu 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obu 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obu 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obu 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obu 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//TAMIL  (G)    
evt.getCMD({pattern: 'otamil 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM115_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otamil 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM116_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otamil 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM117_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otamil 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM118_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otamil 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM119_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//MUSIC   (H)   
evt.getCMD({pattern: 'omusic 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS115_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omusic 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS116_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omusic 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS117_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omusic 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS118_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omusic 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS119_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//DRAMA(I)
evt.getCMD({pattern: 'odrama 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odrama 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odrama  2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odrama  2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odrama  2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//DANCE ORIANTAL   (J)   
evt.getCMD({pattern: 'odanceori 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceori 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceori 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceori 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceori 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//DANCE BHARATH  (K)    
evt.getCMD({pattern: 'odanceb 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DB15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANB + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceb 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DB17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANB + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceb 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DB18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANB + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceb 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DB19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANB + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//ART  (L)     
evt.getCMD({pattern: 'oart 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oart 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oart 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oart 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oart 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//TAMIL LIT  (M)     
evt.getCMD({pattern: 'otlit 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAML15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAML + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otlit 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAML16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAML + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otlit 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAML17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAML + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otlit 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAML18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAML + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//SINHALA LIT (N)     
evt.getCMD({pattern: 'osilit 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osilit 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osilit 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osilit 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osilit 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//ENGLISH LIT (O)     
evt.getCMD({pattern: 'oliten 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oliten 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oliten 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oliten 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oliten 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//SECOND LANGUAGE TAMIL (P)
evt.getCMD({pattern: 'oslant 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oslant 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oslant 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oslant 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oslant 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//JAPAN (Q)
evt.getCMD({pattern: 'ojapan 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ojapan 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ojapan 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ojapan 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ojapan 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//HINDI (R)
evt.getCMD({pattern: 'ohindi 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohindi 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohindi 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohindi 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohindi 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//GEOGROPHY (S)
evt.getCMD({pattern: 'ogeog 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ogeog 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ogeog 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ogeog 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ogeog 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//FRENCH (T)
evt.getCMD({pattern: 'ofrench 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ofrench 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ofrench 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ofrench 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ofrench 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//ENTRENEURSHIP STUDIES (U)
evt.getCMD({pattern: 'oentrenstu 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oentrenstu 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oentrenstu 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oentrenstu 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oentrenstu 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//CIVIC (V)
evt.getCMD({pattern: 'ocivic 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ocivic 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ocivic 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ocivic 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ocivic 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//BUSINAS ACCOUNTING STUDIES (W)
evt.getCMD({pattern: 'obusiac 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.W2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obusiac 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obusiac 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obusiac 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obusiac 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//IT (x)
evt.getCMD({pattern: 'oict 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oict 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oict 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oict 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oict 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//HOME economic (y)
evt.getCMD({pattern: 'ohomec 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohomec 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohomec 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohomec 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohomec 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

      //Helth (z)
evt.getCMD({pattern: 'ohelth 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohelth 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohelth 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohelth 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohelth 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//media (A2)
evt.getCMD({pattern: 'omedia 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omedia 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omedia 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omedia 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omedia 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//art and craft (A3)
evt.getCMD({pattern: 'oarcraft 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oarcraft 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oarcraft 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oarcraft 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oarcraft 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//agree (A4)
evt.getCMD({pattern: 'oagree 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oagree 2016', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oagree 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oagree 2018', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oagree 2019', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//DISIGN TECHNOLOGY (A4)
evt.getCMD({pattern: 'oisigntech 2015', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A12015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DIST15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDIST + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oisigntech 2017', fromMe: DIANA, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A12017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DIST17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDIST + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));








//PUBLIC

//SINHALA (A)
evt.getCMD({pattern: 'osin 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osin 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osin 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osin 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osin 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SIN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USIN + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//science (B)
evt.getCMD({pattern: 'osci 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USCI + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osci 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USCI + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osci 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USCI + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osci 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.EX.USCI + ' ' + EX},  {quoted: message.data .UY18 })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osci 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.B2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SC19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USCI + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));  

//maths (C)     
evt.getCMD({pattern: 'omaths 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omaths 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omaths 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omaths 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omaths 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.C2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MA19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMTS + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//HISTORY  (D)    
evt.getCMD({pattern: 'ohis 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohis 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohis 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohis 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohis 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.D2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIS19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIS + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));      

//ENGLISH  (E)    
evt.getCMD({pattern: 'oen 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oen 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oen 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oen 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oen 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.E2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: EN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENG + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//BUDDISM  (F)    
evt.getCMD({pattern: 'obu 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obu 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obu 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obu 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obu 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.F2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BU19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBUD + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//TAMIL  (G)    
evt.getCMD({pattern: 'otamil 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM115_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otamil 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM116_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otamil 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM117_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otamil 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM118_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otamil 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.G2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAM119_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAM + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//MUSIC   (H)   
evt.getCMD({pattern: 'omusic 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS115_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omusic 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS116_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omusic 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS117_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omusic 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS118_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omusic 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MUS119_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMUS + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//DRAMA(I)
evt.getCMD({pattern: 'odrama 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odrama 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odrama  2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odrama  2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odrama  2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.H2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DR19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDRA + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//DANCE ORIANTAL   (J)   
evt.getCMD({pattern: 'odanceori 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceori 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceori 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceori 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceori 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.J2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DO19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANO + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//DANCE BHARATH  (K)    
evt.getCMD({pattern: 'odanceb 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DB15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANB + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceb 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DB17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANB + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceb 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DB18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANB + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'odanceb 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.K2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DB19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDANB + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//ART  (L)     
evt.getCMD({pattern: 'oart 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oart 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oart 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oart 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oart 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.L2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AR19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UART + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//TAMIL LIT  (M)     
evt.getCMD({pattern: 'otlit 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAML15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAML + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otlit 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAML16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAML + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otlit 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAML17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAML + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'otlit 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.M2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: TAML18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UTAML + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//SINHALA LIT (N)     
evt.getCMD({pattern: 'osilit 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osilit 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osilit 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osilit 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'osilit 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.N2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLIT19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USINL + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//ENGLISH LIT (O)     
evt.getCMD({pattern: 'oliten 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oliten 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oliten 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oliten 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2018}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oliten 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.O2019}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: LITEN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENGL + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//SECOND LANGUAGE TAMIL (P)
evt.getCMD({pattern: 'oslant 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oslant 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oslant 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oslant 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oslant 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.P2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: SLT19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.USLT + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//JAPAN (Q)
evt.getCMD({pattern: 'ojapan 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ojapan 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ojapan 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ojapan 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ojapan 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Q2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: JAP19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UJAP + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//HINDI (R)
evt.getCMD({pattern: 'ohindi 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohindi 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohindi 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohindi 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohindi 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.R2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HIN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHIN + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//GEOGROPHY (S)
evt.getCMD({pattern: 'ogeog 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ogeog 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ogeog 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ogeog 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ogeog 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.S2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: GRO19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UGRO + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//FRENCH (T)
evt.getCMD({pattern: 'ofrench 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ofrench 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ofrench 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ofrench 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ofrench 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.T2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: FREN19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UFREN + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//ENTRENEURSHIP STUDIES (U)
evt.getCMD({pattern: 'oentrenstu 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oentrenstu 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oentrenstu 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oentrenstu 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oentrenstu 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.U2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ENTR19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UENTR + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//CIVIC (V)
evt.getCMD({pattern: 'ocivic 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ocivic 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ocivic 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ocivic 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ocivic 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.V2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CIV19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCIV + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//BUSINAS ACCOUNTING STUDIES (W)
evt.getCMD({pattern: 'obusiac 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.W2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obusiac 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obusiac 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obusiac 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'obusiac 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: BAST19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UBAST + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//IT (x)
evt.getCMD({pattern: 'oict 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oict 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oict 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oict 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oict 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.X2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: ICT19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UICT + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//HOME economic (y)
evt.getCMD({pattern: 'ohomec 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohomec 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohomec 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohomec 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohomec 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Y2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HOMEC19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHOMEC + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

      //Helth (z)
evt.getCMD({pattern: 'ohelth 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohelth 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohelth 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohelth 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'ohelth 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.Z2015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: HEL19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UHEL + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//media (A2)
evt.getCMD({pattern: 'omedia 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omedia 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omedia 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omedia 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'omedia 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A22015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: MEDIA19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UMEDIA + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));


//art and craft (A3)
evt.getCMD({pattern: 'oarcraft 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oarcraft 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oarcraft 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oarcraft 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oarcraft 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A32015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: CRAFT19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UCRAFT + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//agree (A4)
evt.getCMD({pattern: 'oagree 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oagree 2016', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42016}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE16_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY16},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oagree 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oagree 2018', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE18_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY18},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oagree 2019', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A42015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: AGREE19_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UAGREE + ' ' + EX.UY19},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

//DISIGN TECHNOLOGY (A4)
evt.getCMD({pattern: 'oisigntech 2015', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A12015}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DIST15_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDIST + ' ' + EX.UY15},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));

evt.getCMD({pattern: 'oisigntech 2017', fromMe: QUEEN, react:"📁", NoListCmd: true}, (async (message, match) => {
  
      var webimage = await axios.get(`${EX.A12017}`, { responseType: 'arraybuffer' })

      SEARCHING = await message.client.sendMessage(message.jid,{text: DFG}, {quoted: message.data});
      await message.client.sendMessage(message.jid,{text: DIST17_UP} , {quoted: message.data});
      message.delete(SEARCHING)
      UPLOADING = await message.client.sendMessage(message.jid,{text: UPD}, {quoted: message.data}); 

      await message.client.sendMessage(message.jid,{document : Buffer.from(webimage.data) , mimetype : 'application/pdf' , fileName: EX.UDIST + ' ' + EX.UY17},  {quoted: message.data  })
      message.delete(UPLOADING)
      }));
