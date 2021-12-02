"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_base_1 = require("@ubccpsc310/bot-base");
const discord_js_1 = require("discord.js");
(0, bot_base_1.startDiscord)({
    commandDirectory: `${__dirname}/commands`,
    listenerDirectory: `${__dirname}/listeners`,
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
    token: 'OTE1NzY3NjI4MDE3MDQ1NTg1.YagZEA.634MHRjbW05ffaPD160h3YPr5J8'
});
