import {ConfigKey, getConfig} from "./util/Config"; // Unfortunately must be the first import
import {startDiscord} from "@ubccpsc310/bot-base";
import {Intents} from "discord.js";

startDiscord({
    commandDirectory: `${__dirname}/commands`,
    listenerDirectory: `${__dirname}/listeners`,
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    token: 'OTE1NzY3NjI4MDE3MDQ1NTg1.YagZEA.634MHRjbW05ffaPD160h3YPr5J8'
});
