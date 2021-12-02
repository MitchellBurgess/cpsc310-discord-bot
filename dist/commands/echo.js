"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const echo = {
    name: "echo",
    description: "Repeats a message",
    usage: "echo <message>?",
    async procedure(client, message, args) {
        let reply;
        if (args.length > 0) {
            reply = args.join(" ");
        }
        else {
            reply = "... echo";
        }
        return message.channel.send(reply);
    },
};
exports.default = echo;
