module.exports = {
	name: 'embed',
    description: 'Displays the bot info',
    args: false,
    usage: '',
	execute(message, args) {
        
     // inside a command, event listener, etc.
     const exampleEmbed = {
        color: 0x0099ff,
        title: 'Written by Davrgis',
        //url: 'https://discord.js.org',
        author: {
            name: 'Frogbot',
            icon_url: 'https://i.imgur.com/h4TDk6B.png',
            //url: 'https://discord.js.org',
        },
        description: 'type !frogme',
        timestamp: new Date(),
    };
    
    message.channel.send({ embed: exampleEmbed });
      
	},
};