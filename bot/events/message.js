const event = async(client, message, db) => {
  
  if (message.author.bot || message.channel.type == "dm") return
  
  if (!message.content.startsWith(client.prefix)) return
  
  let args = message.content.slice(client.prefix.length).trim().split(/ +g)
                                                                      
  let x = args
}