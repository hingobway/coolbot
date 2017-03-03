var commando=require('discord.js-commando');

class DiceRoll extends commando.Command {
  constructor(client){
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'Roll the dice, take a chance.'
    });
  }

  async run(message, args){
    var dice=Math.floor(Math.random()*6)+1;
    message.reply('You rolled '+dice);
  }
}

module.exports = DiceRoll;
