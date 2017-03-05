var disc=require('discord.js-commando');
var discord=require('discord.js');


class fun extends disc.Command{
  constructor(client){
    super(client, {
      name: 'fun',
      group: 'dead',
      memberName: 'fun',
      description: 'this is fun'
    });
  }

  async run(message, args){
    if(message.author.id=='214430759870660612'||message.author.id=='213105780449214464'){
      message.delete();
      hook.sendTTSMessage(args);
      setTimeout(function(){
        var general=message.guild.channels.find('name','general');
        var msgid=general.lastMessageID;
        general.fetchMessage(msgid)
        .then(message=>{
          message.delete();
        })
        .catch(console.error);
      }, 200);
    }else{
      message.channel.sendMessage('You are missing proper authorization to have `fun`.');
    }
  }
}

module.exports=fun;


