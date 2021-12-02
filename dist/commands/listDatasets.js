"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
const list = {
    name: "list",
    description: "lists all datasets",
    usage: "remove <message>",
    async procedure(client, message, args) {
        if (args.length === 0) {
            const result = fetch("http://localhost:4321/datasets", {
                method: "GET"
            });
            return message.channel.send(result);
        }
        else {
            console.log("Too many arguments");
        }
    },
};
exports.default = list;
