	const TelegramBot = require('node-telegram-bot-api');

	const token = '766944180:AAHzp2kclClMfnyi0J5lej2ttNGTNQJ5GwM';
	const bot = new TelegramBot(token, {polling: true})

	bot.on('message', msg => {
		bot.sendMessage(msg.chat.id, `hello baby, bot say: "hi, ${msg.from.first_name}`)
	})

	
