const TelegramBot = require('node-telegram-bot-api');
const token ="6905717690:AAE2RWyf0ENrF_lV5U2GaZ-rUWzWBck-_4U";

const bot = new TelegramBot(token, {polling:true});

const bootstrap = () => {
    bot.on("message", async msg => {
        const chatId = msg.chat.id;
        const text = msg.text;
        if(text === "/start") {
            await bot.sendMessage(
                chatId,
                "Sammi.ac platformasida bor kurslaarni sotib olishingiz mumkin",
                {
                    reply_markup: {
                        keyboard: [
                            [
                                {
                                    text: "Kurslarni ko'rish",
                                    web_app: {
                                        url:"https://sammi.ac"
                                    }
                                }
                            ]
                        ]
                    }
                }
            );
        }
    });
};

bootstrap();