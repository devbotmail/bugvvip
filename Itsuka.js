//==============================================================================================================
const { modul } = require('./module');
require('./config')
const { baileys, boom, chalk, fs, figlet, FileType, pino, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: Connect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./lib/color')
const { uncache, nocache } = require('./lib/loader')
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//==============================================================================================================
require('./Allan.js')
nocache('../Allan.js', module => console.log(color('[ UPDATE ]', 'cyan'), color(`'${module}'`, 'green'), 'File Is Update!!!'))
require('./Itsuka.js')
nocache('../Itsuka.js', module => console.log(color('[ UPDATE ]', 'cyan'), color(`'${module}'`, 'green'), 'File Is Update!!!'))
//==============================================================================================================
async function allanBot() {
const { version, isLatest } = await fetchLatestBaileysVersion()
const allan = Connect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['HimaruVipMods','Safari','1.0.0'],
auth: state,
version
})
//==============================================================================================================
store.bind(allan.ev)
//==============================================================================================================
console.log(color(figlet.textSync(`BOT BUG VIP`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'cyan'))
//=================================================================================================================
allan.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!allan.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
itsuka = smsg(allan, kay, store)
require('./Allan')(allan, itsuka, chatUpdate, store)
} catch (err) {
console.log(err)}})
//=================================================================================================================
allan.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await allan.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await allan.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
ppgroup = await allan.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let nama = await allan.getName(num)
memb = metadata.participants.length
const ppusernya = await getBuffer(ppuser)
if (anu.action == 'add') {
const naimibuffer = await getBuffer(ppuser)
let naimiName = num
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: ppusernya, surface: 200, message: `${metadata.subject}`, orderTitle: 'Otsuka', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
naimibody = `*Welcome @${naimiName.split("@")[0]}*\n\nIntro dulu ya \nNama : \nUmur :\nGender : \nAsal :\n\nSemoga Betah dan jangan lupa isi\ndan ikuti Rules Group`
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'WELCOME'}, type: 1}
]
let buttonMessage = { document: fs.readFileSync('./karuta/karuta.xlsx'),mimetype: docs,jpegThumbnail:ppusernya,mentions: [num],fileName: `${metadata.subject}`,fileLength: 99999999999999,caption: naimibody,footer: `© ${setting.botName} bot`,buttons: buttons,headerType: 4,contextInfo:{externalAdReply:{title: `WELCOME`,body: `Member ke : ${xmembers}`,mediaType:2,thumbnail: ppusernya,sourceUrl: `https://www.instagram.com/Kemii`,mediaUrl: `https://www.instagram.com/Kemii`}}}
allan.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
} else if (anu.action == 'remove') {
const naimibuffer = await getBuffer(ppuser)
let naimiName = num
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const xmembers = metadata.participants.length
let unicorndoc = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: ppusernya, surface: 200, message: `${metadata.subject}`, orderTitle: 'Otsuka', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
naimibody = `*Good Bye @${naimiName.split("@")[0]}*\n\n*Semoga kamu bahagia di sana*`
let buttons = [
{buttonId: `wkwwk`, buttonText: {displayText: 'GOOD BYE'}, type: 1}
]
let buttonMessage = {document: fs.readFileSync('./karuta/karuta.xlsx'),mimetype: docs,jpegThumbnail:ppusernya,mentions: [num],fileName: `${metadata.subject}`,fileLength: 99999999999999,caption: naimibody,footer: `© ${setting.botName} bot`,buttons: buttons,headerType: 4,contextInfo:{externalAdReply:{title: `GOOD BYE`,body: `Member ke : ${xmembers}`,mediaType:2,thumbnail: ppusernya,sourceUrl: `https://www.instagram.com/Kemii`,mediaUrl: `https://www.instagram.com/Kemii`}}}
allan.sendMessage(anu.id, buttonMessage, {quoted:unicorndoc})
}
}
} catch (err) {
console.log(err)
}
})
//=================================================================================================================
allan.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//================================================================================================================
allan.ev.on('contacts.update', update => {
for (let contact of update) {
let id = allan.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})
//================================================================================================================
allan.getName = (jid, withoutContact  = false) => {
id = allan.decodeJid(jid)
withoutContact = allan.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = allan.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === allan.decodeJid(allan.user.id) ?
allan.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}
//==============================================================================================================
allan.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//==============================================================================================================
allan.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await allan.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await allan.getName(i + '@s.whatsapp.net')}\n
FN:${await allan.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:otsuka932@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
allan.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
//==============================================================================================================
allan.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await allan.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}
//==============================================================================================================
allan.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await allan.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
//==============================================================================================================
allan.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await allan.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
//==============================================================================================================
allan.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
 ...content[ctype],
 ...options,
    ...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
 } : {})
 } : {})
await allan.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
 }
//==============================================================================================================
allan.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
//==============================================================================================================
allan.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
//==============================================================================================================
allan.sendText = (jid, text, quoted = '', options) => allan.sendMessage(jid, { text: text, ...options }, { quoted })
//==============================================================================================================
allan.public = true
//==============================================================================================================
allan.serializeM = (itsuka) => smsg(allan, itsuka, store)
//==============================================================================================================
allan.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); allan.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); allanBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); allanBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); allan.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); allan.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); allanBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); allanBot(); }
else allan.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
console.log('Connected...', update)
})
//==============================================================================================================
allan.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {text,footer,buttons,headerType: 2,...options}
allan.sendMessage(jid, buttonMessage, { quoted, ...options })
}
//==============================================================================================================
allan.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {hydratedTemplate: {"hydratedContentText": text,"locationMessage": {"jpegThumbnail": img },"hydratedFooterText": footer,"hydratedButtons": but}}}), options)
allan.relayMessage(jid, template.message, { messageId: template.key.id })
}
//==============================================================================================================
allan.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
listMessage :{ title: title,description: text,buttonText: buttext,footerText: footer,listType: "  SELECT  ",sections: but,listType: 1}}), options)
allan.relayMessage(jid, template.message, { messageId: template.key.id })}
allan.ev.on('creds.update', saveState)
return allan
}
//==============================================================================================================
allanBot()
//==============================================================================================================