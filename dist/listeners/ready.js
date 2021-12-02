"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bot_base_1 = require("@ubccpsc310/bot-base");
const ready = {
    event: "ready",
    procedure() {
        bot_base_1.Log.info("Bot started 👀");
    }
};
exports.default = ready;
