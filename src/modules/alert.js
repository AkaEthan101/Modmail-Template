module.exports = ({ bot, knex, config, commands }) => {
  commands.addInboxThreadCommand('alert', '[opt:string]', async (msg, args, thread) => {
    if (args.opt && args.opt.startsWith('c')) {
      await thread.setAlert(null);
      await thread.postSystemMessage(`:white_check_mark: Cancelled new message alerts.`);
    } else {
      await thread.setAlert(msg.author.id);
      await thread.postSystemMessage(`:white_check_mark: I will now ping ${msg.author.username}#${msg.author.discriminator} when this thread gets a new reply! Say \`-alert cancel\` to cancel alerts.`);
    }
  });
};
