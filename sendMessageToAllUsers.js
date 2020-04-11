const Discord = require('discord.js'); //recomand discord.js version 11.5.0
const client = new Discord.Client();


client.on("ready", () => {
console.log("Made by RobinD3l");
 //change if you want 
});

//message sender

client.on("message", (message) => {

    var authors = message.author

    //do !dmall in the #general of a big server where the bot is in!
    if(message.content === "!dmall") {

        //displays the guy who did !dmall
        console.log("Command started by ID: " + authors)
    
    try {
        (function(){

            //gets random user from the channel
            var user = message.guild.members.random();
            //
            console.log(`sending to ` + `${user.user}`);


            //dont add more than 4 Lines
            //the "user" variable is where the @user mention is
            //change to your server link or something else
            user.sendMessage("Hi " + user + " Please join this Server:");
            user.sendMessage("http://discord.gg/lol");
            //user.sendMessage("Please join");
            //user.sendMessage("okay?");

            setTimeout(arguments.callee, 10000); //delay recommend change
        })();
    }
                 catch (e) {
                console.log("sending to " + user + " failed failed")
    
    }
  }});

//enter User or Bot Token
//if it says INVALID TOKEN at user tokens install discord.js version 11.5.0 or simmillar see important.txt
client.login("NjkyOTI0MDA5Mjc2Mzc1MDgx.Xn1l7g.8Hppjaxwc1dlIwbHcoj44tIeonE");