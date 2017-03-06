var disc=require('discord.js-commando');
var discord=require('discord.js');


class fun extends disc.Command{
  constructor(client){
    super(client, {
      name: 'fun',
      group: 'dead',
      memberName: 'fun',
      description: 'this is fun. try the new \';fun /u\'.'
    });
  }

  async run(message, args){
    var allowances=[
      '214430759870660612', // hingobway
      '213105780449214464', // CRUDE QUIP
    ]
    if(allowances.indexOf(message.author.id)!=-1){
      if(args!=''){
        var resp=args.search('/u');
        message.delete();
        if(resp==0){
          var msg1=args.replace(/\/u/,'');
          var msg=msg.replace(/(.)/gi,'$& ');
          var msg=msg.replace(/\//g,'slash');
          var msg=msg.replace(/\./g,'dot');
          var msg=msg.replace(/:/g,'colon');
          var msg=msg.replace(/\?/g,'question mark');
          var msg=msg.replace(/&/g,'ampersand');
          var msg=msg.replace(/=/g,'equals sign');
          var msg=msg.replace(/#/g,'octothorpe');
          hook.sendTTSMessage(msg);
        }else{
          hook.sendTTSMessage(args);
        }
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
