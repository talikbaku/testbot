	var TelegramBot = require('node-telegram-bot-api');

	var token = '766944180:AAHzp2kclClMfnyi0J5lej2ttNGTNQJ5GwM';
	var bot = new TelegramBot(token, {polling: true});

	var notes = [];

	bot.onText(/\/напомни (.+) в (.+)/, function (msg, match) {
	  var userId = msg.from.id;
	  var text = match[1];
	  var time = match[2];

	  notes.push( { 'uid':userId, 'time':time, 'text':text } );

	  bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если не сдохну :)');
	});

	setInterval(function(){
		for (var i = 0; i < notes.length; i++){
			var curDate = new Date().getHours() + ':' + new Date().getMinutes();
				if ( notes[i]['time'] == curDate ) {
					bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
					notes.splice(i,1);
				}
			}
	},1000);