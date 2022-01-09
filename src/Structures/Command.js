module.exports = class Command {
    constructor(client, options = {}) {
        this.client = client;
        this.commandSettings = {
            name: options.name || null,
            description: options.description || 'Sem descrição',
            aliases: options.aliases || [],
            cooldown: options.cooldown || 3,
            devOnly: options.devOnly || false,
            adminOnly: options.adminOnly || false,
            roles: options.roles || [],
            usage: options.usage || 'Sem descrição de uso.',
        }
    }
}