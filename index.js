require('dotenv').config({path:'var.env'})
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
// First, this must be at the top level of your code, **NOT** in any event!
const talkedRecently = new Set();
Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)) return;

  try {
	if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("There is a 1 minute cooldown before you can use another command. - " + msg.author);
    } else {
    bot.commands.get(command).execute(msg, args);
	 // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});