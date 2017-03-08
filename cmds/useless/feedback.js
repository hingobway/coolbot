var disc=require('discord.js-commando');
var http=require('http');
var fs=require('fs');

class feedback extends disc.Command{
  constructor(client){
    super(client, {
      name: 'feedback',
      group: 'dead',
      memberName: 'feedback',
      description: 'Leave feedback or suggestions for the bot.'
    });
  }

  async run(message, args){
    if(args!=''){
      if(args.search(/\*\*\*/)==-1&&args.search(':::')==-1){
        var insertion=args+'***'+message.author.username+':::';
        fs.appendFile('cmds/useless/feedback.txt',insertion,{encoding:'utf8'},function(err){
          if(err){
            message.reply('Sorry, an error occurred. (<@214430759870660612> please check this out.)');
            console.log(err);
          }else{
            message.channel.sendMessage('Feedback successful.');
          }
        });
      }else{
        message.reply('Sorry, feedback can\'t include "***" or ":::".');
      }
    }else{
      message.reply('You forgot your feedback.');
    }
  }
}

module.exports = feedback;
