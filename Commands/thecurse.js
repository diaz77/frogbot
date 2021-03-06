// at the top of your file
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'thecurse',
    description: 'Awakens an ancient evil',
    args: false,
    usage: '<@UserID>, or nothing',
	execute(message, args) {

        cursedUser = message.author.username;

        message.react('💀');

        const file = new Discord.MessageAttachment('../FrogBot/assets/msbxPhY.png');

        const cursedEmbed = {
            title: 'You, ' + message.author.username + ', have been cursed!',
            image: {
                url: 'attachment://msbxPhY.png',
            },
        };

        //bot reacts to next 5 cursed user's posts with a skull. Goes away after 5 hours or 5 posts.
        let curseCount = 5;
        message.channel.send({ files: [file], embed: cursedEmbed })
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 1000 * 60 * 60 * 5 });
        console.log(collector)
        collector.on('collect', message => {
            if ( message.author.username == cursedUser ) {
                message.react("💀");
                curseCount--;

                if (curseCount <= 0){
                    collector.stop();
                    return message.channel.send("The curse has been sated. It lifts itself into the night to find a new victim.");
                } 
            } 
        })
        collector.on('end', (collected, reason) => {
            if (reason == 'time'){
                return message.channel.send("The curse lifts itself into the night in search of a new victim.");
            }
          });
    }
};