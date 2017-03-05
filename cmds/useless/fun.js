var disc=require('discord.js-commando');
var discord=require('discord.js');
var hook = new discord.WebhookClient('287051082067083264','lIoCtVwd-kJLQ8YA_LGvZvEmwh7ciLmGz3aiJhgQSdjVFOaYPzsksULckt_UagAOyWOi');

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
    if(message.author.id=='214430759870660612'){
      hook.sendTTSMessage('I\'ll love who i want');
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
