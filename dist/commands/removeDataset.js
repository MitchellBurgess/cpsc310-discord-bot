"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetch = require('node-fetch');
const remove = {
    name: "remove",
    description: "removes a dataset",
    usage: "remove <message>",
    async procedure(client, message, args) {
        if (args.length === 1) {
            fetch("http://localhost:4321/dataset/idparam/courses", {
                method: "DELETE",
                body: args[0]
            });
        }
        else if (args.length === 0) {
            console.log("Please an id");
        }
        else {
            console.log("Too many arguments");
        }
    },
};
exports.default = remove;
