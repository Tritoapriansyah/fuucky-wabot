exports.wait = () => {
  return `Aguarde...`
}
exports.hours = () => {
  return `Horas`
}
exports.minute = () => {
  return `Minutos`
}
exports.second = () => {
  return `Segundos`
}
exports.hello = () => {
  return `Vai da o cu`
}
exports.welcome = () => {
  return `Corno entrou no grupo`
}
exports.goodbye = () => {
  return `Adeus Filho da Puta`
}
exports.done = () => {
  return `Done`
}
exports.onlygroup = () => {
  return `[ ! ] Esse comando só pode ser usado em grupos.`
}
exports.onlyadmin = () => {
  return `[ ! ] Esse comando só pode ser usado por adm.`
}
exports.onlybadmin = () => {
  return `[ ! ] Esse comando só pode ser usado quando o bot tiver adm`
}
exports.onlyowner = () => {
  return `[ ! ] Esse comando só pode ser usado pelo dono.`

}
exports.acc = () => {
  return `Pedido aceito.`
}
exports.addedadmin = () => {
  return `Adicionar Adm.`
}
exports.demotedadmin = () => {
  return `Tirar Adm.`
}
exports.ongroup = () => {
  return `on group`
}
exports.prefixchanged = () => {
  return ` Prefixo foi trocado para`
}
exports.needimgcpt = () => {
  return `Envie uma Foto com legenda`
}
exports.needtagimgcpt = () => {
  return `Tag de imagens enviadas`
}
exports.or = () => {
  return `Ou`
}
exports.needtagmember = () => {
  return `Tag de Membro`
}
exports.wrongf = () => {
  return 'Essa porra não deu certo'
}
exports.kicked = () => {
  return `Tomou uma bica no cu`
}
exports.succactwelcome = () => {
  return `[SUCCESSFUL] Habilitou o Bem Vindo`
}
exports.succnonactwelcome = () => {
  return `[SUCCESSFUL] Desativou o Bem Vindo`
}
exports.succactprivategc = () => {
  return `[SUCCESSFUL] Ativou a proteção`
}
exports.succnonactprivategc = () => {
  return `[SUCCESSFUL] Desativou a proteção`
}
exports.enaordisa = () => {
  return `Ative para ativar, Desative para desativar esses recursos.`
}
exports.gcclosed = (nomor) => {
  return `O grupo foi trancado por @${nomor.split("@")[0]}, all participants cannot send messages.`
}
exports.gcopened = (sender) => {
  return `O grupo foi aberto por @${number.split("@")[0]}, all participants can send messages.`
}
exports.pttmodechanged = () => {
  return `Ptt mode has changed to`
}
exports.fail = () => {
 return `Falhou`
}
exports.needtagstickcpt = () => {
  return `Tag da figurinha`
}
exports.needtagvidcpt = () => {
  return `Tag do video`
}
exports.levelingalron = () => {
  return `O level está ativo`
}
exports.levelon = () => {
  return `[SUCCES] Ativou o level`
}
exports.leveloff = () => {
  return `[SUCCESS] Desativou o level`
}
exports.levelingon = () => {
  return `O recurso de level não foi ativado nesse grupo.`
}
exports.levelnol = () => {
  return `Seu level ainda é 0`
}
exports.onlybotdel = () => {
  return `Só pode deletar mensagens de bots`
}
exports.exafakecmd = () => {
  return `Exemplo: @tag | texttarget | textbot`
}
export.namegcchanged = () => {
  return `[SUCCESS] Renomeando este grupo`
}
exports.boa noite = () => {
  return `boa noite grupo do lype🌃`
}
exports.boa tarde = () => {
  return `boa tarde grupo do lype🌆`
}
exports.boa tarde = () => {
  return `boa tarde grupo do lype🌇`
}
exports.bom dia = () => {
  return `Bom dia grupo do lype🌅`
}
expors.hasverifyed = () => {
  return `Você já deu o cu antes`
}
exporss.nsfwon = () => {
  return `[SUCCESS] Habilitar NSFW`
}
exports.nsfwoff = () => {
  return `[SUCCESS] Disativar NSFW`
}
exports.nsfwalron = () => {
  return `NSFW esteve ativo antes`
}
exports.nsfwnotact = () => {
  return `O recurso NSFW não foi ativado neste grupo.
}
 exports.levelview = (sem, userXp, userLevel, pushname) => {
   return `
 * [$ {pushname} LEVEL] *
 • * Nome *: $ {pushname}
 • * XP *: $ {userXp}
 • * Nível *: $ {userLevel}
 `
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ LEVEL UP ]*
• *Name*: ${sender}
• *XP*: ${getLevelingXp(sender)}
• *Level*: ${getLevel} ~> ${getLevelingLevel(sender)}
Upou de tanto chupar rola!! 🎉🎉`
}
exports.levelup = (sender, getLevelingXp, getLevel, getLevelingLevel) => {
  return `
*[ LEVEL UP ]*
• *Name*: ${sender}
• *XP*: ${getLevelingXp(sender)}
• *Level*: ${getLevel} ~> ${getLevelingLevel(sender)}
Miapika!! 🎉🎉`
}
exports.wame = (sender) => {
  return `[ *WA-ME* ]
• _Request by_ : *@${sender.split("@s.whatsapp.net")[0]}*
• _Your link WhatsApp_ : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*
  *Or ( / )*
  *https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`
}
exports.infobot = (uptime, setting, runbrowser, mcc, mnc, browserversion, runtimebot, oshp, osversion, devicemodel, ramdevice, ramdevicetotal, waversion, speedbot) => {
  return `
• Name : *${Bot do Mano Lypeafavor}*
• Bot Version : 0.0.1
• Browser : *${runbrowser}*
• Browser Version : *${browserversion}*
• Speed : ${speedbot}
• Runtime : *${runtimebot}*

[ *DEVICE* ]
• Device : ${oshp}
• OS Version : ${osversion}
• Device Version : ${devicemodel}
• RAM : ${ramdevice}MB / ${ramdevicetotal}MB
• MCC : ${mcc}
• MNC : ${mnc}
• WA Version : ${waversion}
`
}
exports.verify = (serialUser, namaUser, sender) => {
return `
*[VERIFY]*
Serial Code : *${serialUser}*
• *Name* : *${namaUser}*
• *Number* : *${sender.split("@")[0]}*`
}
exports.notverify = () => {
  return `
Você não verificou.

Verify now!
`
}

exports.verifynowbut = () => {
  return `Verificar agora`
}
exports.parcountry = () => {
  return `Coloque o nome da sua goma`
}
exports.brainlyview = (br_quest, br_answer) => {
  return `
*[BRAINLY]*

*Question* : ${br_quest}
*Answer* : ${br_answer}\n\n`
}
exports.needquest = () => {
  return `Vai mamar quando?`
}
