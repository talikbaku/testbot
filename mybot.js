const TeleBot = require('telebot');
const bot = new TeleBot('766944180:AAHzp2kclClMfnyi0J5lej2ttNGTNQJ5GwM');

// On every text message
bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(id, `You said: ${ text }`);
});

bot.connect();
