let fetch = require("node-fetch")
let arr = []
fetch('https://raw.githubusercontent.com/nizambot/cita/main/PsycoBOTZ.txt')
  .then(res => res.text())
  .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
  let cita = arr[Math.floor(Math.random() * arr.length)]
  if (!cita) throw false
  await conn.sendFile(m.chat, cita, cita, null, m, true, { mimetype: 'audio/mp4' })
}
handler.customPrefix = /^cita ?cita$/i
handler.command = new RegExp
handler.tags = ['fun']
handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
