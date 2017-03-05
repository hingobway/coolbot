var disc=require('dicsord.js-commando');

class fun extends disc.Command{
  constructor(client){
    super(client, {
      name: 'fun',
      memberName: 'fun',
      description: 'fun',
      group: 'dead'
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
