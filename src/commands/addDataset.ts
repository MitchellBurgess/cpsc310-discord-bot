import {Command} from "@ubccpsc310/bot-base";
import {Client, Message} from "discord.js";
import * as fs from "fs";

const fetch = require('node-fetch');

const add: Command = {
    name: "add",
    description: "adds a dataset",
    usage: "add <message>",
    async procedure(client: Client, message: Message, args: string[]) {
        if (args.length === 3) {
            let base64 = fs.readFileSync(args[2]).toString("base64");
            let zipFile = new FormData();
            zipFile.append('file', base64);
            fetch("http://localhost:4321/dataset/".concat(args[0], "/", args[1]), {
                method: "POST",
                body: zipFile
            }).then(message.channel.send("added dataset".concat(args[0])));

        } else if (args.length < 3) {
            console.log("Please enter an id, kind, and zip file path")

        } else {
            console.log("Too many arguments")
        }

    },
};

export default add;
