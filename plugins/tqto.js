/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
* jangan dihilangin, boleh di tambahin 🐦
**/

let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = 'BIG THANKS TO\n\nNurutomo\nhttps://github.com/Nurutomo\nElyas\nhttps://github.com/Paquito1923\nHyzer Official\nhttps://github.com/Hyzerr\nPino MD\nhttps://github.com/PinoRecode'
conn.sendButtonImg(m.chat, fla + 'Thanks To', esce, 'Menu', '.menu', m) 
}
handler.help = ['tqto', 'team']
handler.tags = ['main']
handler.command = /^(tqto|team)$/i

module.exports = handler
