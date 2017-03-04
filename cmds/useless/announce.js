var disc=require('discord.js-commando');
var cClient=new disc();

class announce extends disc.Command {
  constructor(client){
    super(client, {
      name: 'announce',
      group: 'dead',
      memberName: 'announce',
      description: 'Allows @admins to announce things.',
    });

  }
  async run(message, args){
    var members=message.guild.roles.get('213097846084206593').members;
    var uind=members.get(message.author.id);
    if(uind!=undefined){
      var general=message.guild.channels.find('name','general');
      general.sendMessage('Hey, @everyone! <@'+message.author.id+'> has an announcement to make. They say the following:\n\n**'+args+'**\n\nThank you for your attention.');
      var guild =cClient.guilds.get('213096561981259776');
      var msgid=guild.members.get('259465135066841089').lastMessageID;
      general.fetchMessage(msgid).pin();

    }else{
      message.channel.sendMessage('Only @admins can use `announce`');
    }
  }
}

module.exports=announce;
