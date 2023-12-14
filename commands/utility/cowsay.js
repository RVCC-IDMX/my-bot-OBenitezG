const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('Cowsay: Input text to make a cow say it!')
    .addStringOption((option) => option.setName('text')
      .setDescription('The message to display')
      .setRequired(true)
      .setMaxLength(25))
    .addStringOption((option) => option.setName('cow')
      .setDescription('Which cow says it')
      .setRequired(true)),
  async execute(interaction) {
    const cowText = interaction.options.getString('text');
    const cowChoice = interaction.options.getString('cow');

    const cowMessage = cowsay.say({
      text: cowText,
      f: cowChoice,
    });

    await interaction.reply(`\`\`\`${cowMessage}\`\`\``);
  },
};
