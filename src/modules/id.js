module.exports = ({ bot, knex, config, commands }) => {
  commands.addInboxThreadCommand('id', [], async (msg, args, thread) => {
    thread.postSystemMessage(`The user that you are messaging is <@${thread.user_id}> (${thread.user_id}).`);
  });
};
