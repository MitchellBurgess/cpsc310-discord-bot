import {Command} from "@ubccpsc310/bot-base";
import {Client, Message} from "discord.js";
import * as fs from "fs";

const fetch = require('node-fetch');

const list: Command = {
    name: "list",
    description: "lists all datasets",
    usage: "remove <message>",
    async procedure(client: Client, message: Message, args: string[]) {
        if (args.length === 0) {
            const result = fetch("http://localhost:4321/datasets", {
                method: "GET"
            });
            return message.channel.send(result);
        } else {
            console.log("Too many arguments")
        }

    },
};

export default list;
