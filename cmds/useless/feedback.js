var disc=require('discord.js-commando');
var custio=require('node-customerio');

class feedback extends disc.Command{
  constructor(client){
    super(client, {
      name: 'feedback',
      group: 'dead',
      memberName: 'feedback',
      description: 'Leave feedback or suggestions for the bot.'
    });

    async run(message, args){
      if(args!=''){
        custio.init('f9c5e7cd1d2f112057a5','2c756998c4f76acafbde');
        var d=new Date();
        custio.identify({
          id:message.author.id,
          created_at: d.getTime(),
          user: message.author.username
        }).catch(err=>{
          message.reply('Sorry, there was a problem with your message.');
          console.log(err);
        });
        custio.track(message.author.id,'sendFeedback',{
          umsg:args
        })
        .done(message.channel.sendMessage('Feedback sent.'))
        .catch(err=>{
          message.reply('Sorry, there was a problem with your message.');
          console.log(err);
        });
      }else{
        message.reply('You forgot your feedback.');
      }
    }
  }
}
