var commando=require('discord.js-commando');
var bot=new commando.Client({
  commandPrefix: '..',
  owner: '214430759870660612'

});

bot.registry.registerGroup('random','Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+"/cmds");

bot.login('Mjg2NjcyNjYyNTI3MjEzNTY4.C5kiOg.6UFV4QN4r05inc4dXWBzV0qcrg0');
