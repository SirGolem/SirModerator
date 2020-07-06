const Discord = require('discord.js')

const client = new Discord.Client()

const db = require('quick.db')

const MessageEvent = require('../events/message.js'),
      ReadyEvent = require('../events/ready.js'),
      LoadCommands = require('..handlers/commands.js')

client.commands = new Discord.Collection()
client.owners = ["562303831040327680",""]
client.prefix = "!"

LoadCommands(client)

client.on("ready", () => ReadyEvent(client,db))

client.on("message", (message) => MessageEvent(client, message, db))

clien.login("NzE5NjE4MDQzNTM3NTIyODEw.XwNDaA.6ErnXQvFOFHaGZ6w88t-ALq0ycw")