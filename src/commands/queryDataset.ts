import {Command} from "@ubccpsc310/bot-base";
import {Client, Message} from "discord.js";
import * as fs from "fs";

const fetch = require('node-fetch');

const query: Command = {
    name: "query",
    description: "queries a dataset",
    usage: "remove <message>",
    async procedure(client: Client, message: Message, args: string[]) {
        if (args.length === 1) {
            const json = require(args[0]);
            const jsonString = JSON.stringify(json);
            let result = fetch("http://localhost:4321/dataset/idparam/courses", {
                method: "POST",
                body: jsonString
            });
            message.channel.send(result);

        } else if (args.length === 0) {
            console.log("Please enter an id")

        } else {
            console.log("Too many arguments")
        }

    },
};

export default query;
