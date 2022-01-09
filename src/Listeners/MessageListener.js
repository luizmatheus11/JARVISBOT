const Event = require('../Structures/Event')
const { MessageEmbed } = require('discord.js')
const { PREFIX, COLOR } = process.env;
const ms = require('ms')

module.exports = class MessageListener extends Event {
  constructor(client) {
    super(client, {
      name: "messageCreate"
    })
  }

  async run(message) {
    let prefix = PREFIX;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g)

    const command = args.shift().toLowerCase()
    const cmd = this.client.commands.get(command) || this.client.commands.get(this.client.aliases.get(command))
    if(cmd.commandSettings.adminOnly == true || cmd.commandSettings.roles[0]) {
      if(!message.member.permissions.has('ADMINISTRATOR') && !cmd.commandSettings.roles.some(x => message.member._roles.includes(x))) return
    }
    if (this.client.cooldowns.has(message.author.id)) return message.channel.send(`Você está em tempo de espera de ${ms(cmd.commandSettings.cooldown)} `)

    cmd.run(this.client, args, message)
    this.client.cooldowns.set(message.author.id, cmd.commandSettings.cooldown)

    setTimeout(() => {
      this.client.cooldowns.delete(message.author.id)
    }, cmd.commandSettings.cooldown)

    message.delete()
  }
}