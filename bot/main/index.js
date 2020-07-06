const Discord = require('discord.js')

const client = new Discord.Client()

const db = require('quick.db')

const MessageEvent = require('../events/message.js'),
      ReadyEvent = require('../events/ready.js'),
      LoadCommands = require('..handlers/commands.js')

client.commands = new Discord.Collection()
client.owners = ["562303831040327680",""]
client.