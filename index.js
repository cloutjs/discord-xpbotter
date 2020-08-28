const Discord = require("discord.js");
const setTitle = require('node-bash-title');
const client = new Discord.Client();
var colors = require('colors');
const moment = require("moment");
const tbg = require('terminal-bigtext-generator');
const db = require("quick.db");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


colors.setTheme({
    info: 'green',
    clime: 'blue',
    error: `red`,
    yellow: "yellow"
});

console.clear();

setTitle("XP Bot [by clout] | V1.5 | Login")
rl.question('What is your discord token? ', (answer) => {
    db.set("token", answer);
{

client.on("ready", () => {
    setTitle("XP Bot [by clout] | V1.5 | Loading")
    console.log("Logging you in...");
    setTimeout(() => {
    console.clear();
    console.log("[WARN] Connecting to Discord API...".error);
    setTimeout(() => {
    console.log(`[SUCCESS] Connection succesfull.`.clime);
    setTimeout(() => {
    console.clear();
    console.log(`[WARN] Logging into token...`.error);
    setTimeout(() => {
    setTitle("XP Bot [by clout] | V1.5 | Main Menu")
    console.log(`[SUCCESS] Logged succesfully into ${client.user.tag}`.clime);
    setTimeout(() => {
    console.clear();
    tbg.print('XP BOT');
    console.log("");
    console.log(`[SUCCESS] Launched Succesfully!`.clime);
    console.log("https://discord.gg/G2My44z")
    console.log("");
    console.log("");
    console.log("Type >>xp to start. Messages will be logged here:".yellow)
}, 2000);
}, 2000);
}, 2000);
}, 2000);
}, 2000);

});
client.on("message", async message => {

    if(message.content == ">>xp" && message.author.id == client.user.id){
        message.delete();
        console.log("Command detected, starting farming...");
        console.log("Farming started. First message will be send in ~60 seconds!");

        function logEvery60Seconds(i) {
            setTimeout(() => {
                let channel = client.channels.get(message.channel.id);
            channel.send(".")
            .then(msg => {
                msg.delete(100)
              })
              .catch(console.error);
            console.log(`[${moment().format("DD MMMM YYYY, hh:mm:ss")}] First message sent`.info);

                
            }, 60000)
        }
        
        logEvery60Seconds(0);
        
        let i = 0;
        setInterval(() => {
            let channel = client.channels.get(message.channel.id);
            channel.send(".")
            .then(msg => {
                msg.delete(100)
              })
  .catch(console.error);
            console.log(`[${moment().format("hh:mm")}] Sent`.info);

                
        }, 60000)
}
});
const token = db.fetch("token")
try {
client.login(token);
} catch (e) {
    console.log("Wrong token or ID. Restart and try again!")}
  }});



