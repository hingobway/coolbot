// Add Discord.js Packages.
var Discord=require('discord.js');
var commando=require('discord.js-commando');

// Initialize Discord.js packages, and include bot options.
var cClient=new commando.Client({
  commandPrefix: ';',
  owner: '214430759870660612',
  unknownCommandResponse: false
});



cClient.registry.registerDefaults(); // Register default commands,
// command groups,
cClient.registry.registerGroup('random','Random');
cClient.registry.registerGroup('dead','Useless');
cClient.registry.registerCommandsIn(__dirname+"/cmds"); // and the command directory

cClient.on('guildCreate',(iguild)=>{
  iguild.channels.get('213096561981259776').sendMessage('AAAAA');
});
// Wait for bot to fully load.
cClient.on('ready',()=>{
  console.log('Ready to go. Use the link below to invite CoolBot to your server.\nhttps://discordapp.com/oauth2/authorize?client_id=259465135066841089&scope=bot&permissions=8\n\n');

  // Add bot user settings.
  cClient.user.setGame('Club Penguin');

  // \/ Lots of experimental code not currently running \/
  //guild.channels.get('213096561981259776').sendMessage('AAAAA');
  /*guild.members.get('259465135066841089');
  var mess=me.lastMessageID();
  var channel=guild.channels.get('213096561981259776');
  channel.sendMessage('testing.');*/
  /*var general=cClient.guilds.get('213096561981259776').channels.get('213096561981259776');
  general.sendMessage('Test');
  var tmessage=cClient.users.get('259465135066841089').lastMessageID;
  general.fetchMessage(tmessage)
  .then(message=>message.delete())
  .catch(console.error);*/

  // Check for incoming messages.
  cClient.on('message', (message)=>{
    // Run the "Benis" gag.
    var lowtxt=message.content.toLowerCase();
    var resp2=lowtxt.search(' be ');
    if(resp2!=-1&&message.author.bot==false&&message.channel.id!='213096561981259776'){
      var explanation=message.content.replace(/be/i,'**$&**');
      message.channel.sendMessage('-nis ("'+explanation+'")');
    }

    // Respond to @mentions.
    var resp=message.content.search('<@259465135066841089>');
    var resp3=message.content.search('@everyone');
    if(resp>0&&message.author.bot==false&&resp3==-1){
      if(message.guild.members.get(message.author.id).displayName!="everyone"){
        var comeback=message.content.replace(/<@259465135066841089>/,'<@'+message.author.id+'>');
        message.channel.sendMessage(comeback);
      }
    }
  });
});

// Register as the correct bot.
cClient.login('TOKEN');
