const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js')
const Event = require('../Structures/Event')


module.exports = class InteractionListener extends Event {
    constructor(client) {
        super(client, {
            name: "interactionCreate"
        })
    }

    async run(i) {
    }
}