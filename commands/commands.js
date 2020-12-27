module.exports = {
  name: 'commands',
  description: 'commands!',
  execute(msg, args) {
    msg.reply('The commands I respond to are: deaths, damage, lifetimes, respawntimes, serverinfo, rules, and players');
   // msg.channel.send('pong');
  },
};
