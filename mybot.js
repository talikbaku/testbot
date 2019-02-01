	// const TelegramBot = require('node-telegram-bot-api');

	// const token = '763881402:AAEdrcyIU_PgcM18_X9rP1v3MN0A5VViY1o';
	// const bot = new TelegramBot(token, {polling: true})

	// bot.on('message', msg => {
	// 	bot.sendMessage(msg.chat.id, `hello baby, bot say: "hi, ${msg.from.first_name}`)
	// })

	const TeleBot = require('telebot');
const bot = new TeleBot('763881402:AAEdrcyIU_PgcM18_X9rP1v3MN0A5VViY1o');

// On every text message
bot.on('text', msg => {
    let id = msg.from.id;
    let text = msg.text;
    return bot.sendMessage(id, `You said: ${ text }`);
});

bot.connect();