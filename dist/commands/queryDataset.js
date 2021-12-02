"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
const query = {
    name: "query",
    description: "queries a dataset",
    usage: "remove <message>",
    async procedure(client, message, args) {
        if (args.length === 1) {
            const json = require(args[0]);
            const jsonString = JSON.stringify(json);
            let result = fetch("http://localhost:4321/dataset/idparam/courses", {
                method: "POST",
                body: jsonString
            });
            message.channel.send(result);
        }
        else if (args.length === 0) {
            console.log("Please enter an id");
        }
        else {
            console.log("Too many arguments");
        }
    },
};
exports.default = query;
