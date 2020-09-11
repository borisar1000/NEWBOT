const Discord = require('discord.js')
const bot = new Discord.Client()



console.log("/////////////////////////////////")
console.log("(!) Connexion Effectuée Avec Succès !")
console.log("/////////////////////////////////")
bot.on('message', function (message) {
	if (message.content === '.test') {

		message.channel.send("``Wsh``")
		console.log(".server")
	}

	if (message.content === '.server') {
		let server_name = message.guild.name
		let server_size = message.guild.members.size
		message.channel.send(`Server :` + server_name + `\nPersonnes :` + server_size)
	}
})
bot.login(procces.env.TOKEN)