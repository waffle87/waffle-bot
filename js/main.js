const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'tkn';
const PREFIX = '$'; 
var version = '1.0.1';
bot.on('ready', () =>{ console.log('Bot online'); })
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0]) {
        case '123':
            message.channel.send('hello hello hello')
            break;
        case 'info': //sends "Version 1.0.1" when "!info version" is typed. sends "Invalid Command" if just "!info" is typed. 
            if (args[1] === 'version') { message.channel.send('Version ' + version); } else { message.channel.send('Invalid Command') }
            break;
        case 'clear': //sends "Error, check command" if just "!clear" is typed. clears X number of messages when "!clear X" is typed. 
            if (!args[1]) return message.reply('Error, check command')
            message.channel.bulkDelete(args[1]);
            break;
    }
})
bot.login(token);
