const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN: Pino
item.ORG: PINO MD
item1.TEL;waid=628895377665:628895377665@s.whatsapp.net
item1.X-ABLabel:No Wa Gw YGY
item2.EMAIL;type=INTERNET:CIE MAU STALKING GW😅
item2.X-ABLabel:Email
item3.ADR:;;🇮🇩INDONESIA;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.EMAIL;type=INTERNET:Seseorang Akan Selalu Terlihat Buruk di Mata Pembenci!
item4.X-ABLabel:somebody 👤
item5.URL:${instagram}
item5.X-ABLabel:Website
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER GW', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "Contact Owner On Instagram, Soalnya Gak Sering On Whatsapp.", sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
