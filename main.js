const Discord = require('discord.js')
const bot = new Discord.Client();
const Levels = require('discord-xp')
const mongoose = require('mongoose');


Levels.setURL("mongodb+srv://samit:DyHhhsPHPt502HsN@cluster0.se6gj.mongodb.net/test", {useNewUrlParser: true})

bot.login('NzcxODE1MjI1NzM2OTUzODY2.X5xm8Q.NTE0tRMdIEnSYIMQWnjhmi2qlKU')

bot.on("ready", bot => {
    console.log('Bot is Online!')
})

const prefix = "$";

bot.on("message", async message => {
	


	
	if (message.content.includes('discord.gg/'||'discordapp.com/invite/') && (message.channel.id === '771052595745652776')) {
    	const randomXp = Math.floor(Math.random() * 0) + 1; //Random amont of XP until the number you want + 1
		const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
		const user = await Levels.fetch(message.author.id, message.guild.id);
		let gaytedbed = new Discord.MessageEmbed()
		.setTitle("**StraightUp Vibe | New Partnership**")
		.setAuthor(message.author.tag + " partnered with a new server!")
		.setDescription("Thanks for partnering with '' ")
		.addField("You did", user.xp + " partnership(s) in total!")
		.setThumbnail(message.guild.iconURL())
	
        return message.channel.send(gaytedbed)
	} else if (message.content.includes('discord.gg/'||'discordapp.com/invite/') && (message.channel.id === '771053543838842881')) {
		const randomXp = Math.floor(Math.random() * 0) + 1; //Random amont of XP until the number you want + 1
		const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
		const user = await Levels.fetch(message.author.id, message.guild.id);
		let gaytedbed = new Discord.MessageEmbed()
		.setTitle("**StraightUp Vibe | New Partnership**")
		.setAuthor(message.author.tag + " partnered with a new server!")
		.setDescription("Thanks for partnering with '' ")
		.addField("You did", user.xp + " partnership(s) in total!")
		.setThumbnail(message.guild.iconURL())
		return message.channel.send(gaytedbed)

	} else if (message.content.includes('discord.gg/'||'discordapp.com/invite/') && (message.channel.id === '771053599064457236')) {
		const randomXp = Math.floor(Math.random() * 0) + 1; //Random amont of XP until the number you want + 1
		const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
		const user = await Levels.fetch(message.author.id, message.guild.id);
		let gaytedbed = new Discord.MessageEmbed()
		.setTitle("**StraightUp Vibe | New Partnership**")
		.setAuthor(message.author.tag + " partnered with a new server!")
		.setDescription("Thanks for partnering with '' ")
		.addField("You did", user.xp + " partnership(s) in total!")
		.setThumbnail(message.guild.iconURL())
		return message.channel.send(gaytedbed)


	} else if (message.content.includes('discord.gg/'||'discordapp.com/invite/') && (message.channel.id === '771053643469291520')) {
		const randomXp = Math.floor(Math.random() * 0) + 1; //Random amont of XP until the number you want + 1
		const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
		const user = await Levels.fetch(message.author.id, message.guild.id);
		let gaytedbed = new Discord.MessageEmbed()
		.setTitle("**StraightUp Vibe | New Partnership**")
		.setAuthor(message.author.tag + " partnered with a new server!")
		.setDescription("Thanks for partnering with '' ")
		.addField("You did", user.xp + " partnership(s) in total!")
		.setThumbnail(message.guild.iconURL())
		return message.channel.send(gaytedbed)

	} else if (message.content.includes('discord.gg/'||'discordapp.com/invite/') && (message.channel.id === '771053704207400972')) {
		const randomXp = Math.floor(Math.random() * 0) + 1; //Random amont of XP until the number you want + 1
		const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
		const user = await Levels.fetch(message.author.id, message.guild.id);
		let gaytedbed = new Discord.MessageEmbed()
		.setTitle("**StraightUp Vibe | New Partnership**")
		.setAuthor(message.author.tag + " partnered with a new server!")
		.setDescription("Thanks for partnering with '' ")
		.addField("You did", user.xp + " partnership(s) in total!")
		.setThumbnail(message.guild.iconURL())
		return message.channel.send(gaytedbed)


	}
	
	if (message.content.startsWith(prefix + "phelp")) {
		let gaytedbed2 = new Discord.MessageEmbed()
		.setTitle("**StraightUp Vibe |Partnership Help**")
		.setAuthor(message.author.tag)
		.addField("$pcount", "Your total partnershipcount")
		return message.channel.send(gaytedbed2)

    }

    
    //Rank
	if (message.content.startsWith(prefix + "pcount")) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`You currently have **${user.xp}** partnerships!`)
    }
    
})