module.exports = {
  name: 'commands',
  description: 'commands!',
  execute(msg, args) {
    msg.reply('The commands I respond to are: deaths, lifetimes, respawntimes, serverinfo, rules, playercount, and players');
   // msg.channel.send('pong');
  },
};
