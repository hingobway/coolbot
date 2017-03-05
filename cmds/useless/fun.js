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
    var allowances=[
      '214430759870660612', // hingobway
      '213105780449214464', // CRUDE QUIP
    ]
    if(allowances.indexOf(message.author.id)!=-1){
      if(args!=''){
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
        message.channel.sendMessage('You forgot your message.');
      }
    }else{
      message.channel.sendMessage('You are missing proper authorization to have `fun`.');
    }
  }
}

module.exports=fun;
