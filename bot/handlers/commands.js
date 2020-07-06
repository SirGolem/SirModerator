const fs = require('fs')

const event = client => {
  const folders = fs.readirSync(".bot/commands/")
for (const folder of folders) {
  const files = fs.readirSync(".bot/commands/" + folder + "/")
  for (const commands of files) {
    const command = require(`../commands${folder}/${commands}`)
    client.commands.set(command.name, command)
  }
}
  }
module.export = event