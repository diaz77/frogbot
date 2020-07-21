const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
	name: 'frogme',
    description: 'Posts random frogs from the cifar-10 database',
    args: false,
    usage: '<count> 1-20, or no parameters',
	execute(message, args) {

        var length = 1;
        // Make sure the arg is between 1 and 20, a number, and only one number
        if((args.length) > 1 || (isNaN(args[0]) && args.length) || args[0] >= 20 || args[0] <= 0){
            return message.channel.send("Error! Usage: <count> 1-20, or no parameter. ");
        }

        // If it is, set our length to our arg
        if (args.length){
            length = args[0];
        }
        
        var files = fs.readdirSync('C:../FrogBot/assets/msbxPhY.png');

        for (var i = 0; i < length; ++i){
            let chosenFile = files[Math.floor(Math.random() * files.length)]; 
            const file = new Discord.MessageAttachment('../FrogBot/assets/frog/' + chosenFile);
            message.channel.send({ files: [file] }); 
        }
        }

    };