module.exports = {
  name: "ping",
  category: "info",
  description: "shows the bot's ping",
  execute: async(client, message, args, db) => {
    
    let msg = await message.channel.send(`pinging...`)
    
    msg.edit(`pong! ${msg.createdTimeStamp - message.createdTimeStamp}ms`)
  }
  
}