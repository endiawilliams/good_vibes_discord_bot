const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vc_create')
        .setDescription('Replies with "Command received successfully."'),
    async execute(interaction) {
        await interaction.reply('Command received successfully.')
    },
}