
const Discord = require('discord.js');
const bot = new Discord.Client()
const figlet = require('figlet');
const colors = require('colors');
var prefix = "$"

// Here
bot.login('token of bot');


bot.on('ready', () => {
    console.log("");
});

bot.on("message", message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);
    let args2 = message.content.split(" ").slice(1);

    if (command === "ping") {
        message.channel.send(`Pong! Ton ping: ${Date.now() - message.createdTimestamp} ms`);
    } else


    if (command === "dmall") {
        message.delete()
        let args = message.content.split(" ").slice(1).join(" ");
        // Here
        if (message.author.id !== 'your id')
        return message.channel.send("**:middle_finger: You do not have the permissons  !**");
      if(!args)   message.channel.send("❌ Erreur : **Please set a message to make me repeat!**");
      message.guild.members.forEach(member => {
        member.send(args).catch(e => {});
        console.log(`Responding to ${message.author.username}, Sending to ${member.user.tag}`);
      })
    }  
})


bot.on("ready", () => {
  clear();
  console.log('_________________________________________________________________')
});


function clear() {
  console.log('__________________________________________________________________')
  console.log(figlet.textSync(" \n         DMALL").green);
  console.log("\n\n Dmall-Bot. \n  The prefix of the bot is $.".bold.red);
  console.log("     Sends message provided to all members of the guild.".bold.red);
  console.log("\n".bold.gray);
}
