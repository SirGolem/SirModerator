const event = async(client, message, db) => {
  
  if (message.author.bot || message.channel.type == "dm") return
  
  if (!message.content.startsWith(client.prefix)) return
  
  let args = message.content.slice(client.prefix.length).trim().split(/ +g)
                                                                      
  let x = args.shift().toLowerCase()
  
  let command = client.commands.get(x) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(x))
  
  if (!command) return
  
  if (command.category === "owner") {
    if (!client.owners.includes(message.author.id)) return
  }
  if (command.permissions) {
    if (!message.member.hasPermissions(command.permissions)) {
      
    }
  }
}