import {Command} from "@ubccpsc310/bot-base";
import {Client, Message} from "discord.js";
import * as fs from "fs";

const fetch = require('node-fetch');

const remove: Command = {
    name: "remove",
    description: "removes a dataset",
    usage: "remove <message>",
    async procedure(client: Client, message: Message, args: string[]) {
        if (args.length === 1) {
            fetch("http://localhost:4321/dataset/idparam/courses", {
                method: "DELETE",
                body: args[0]
            });

        } else if (args.length === 0) {
            console.log("Please an id")

        } else {
            console.log("Too many arguments")
        }

    },
};

export default remove;
