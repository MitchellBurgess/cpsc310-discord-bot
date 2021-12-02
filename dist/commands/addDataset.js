"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const fetch = require('node-fetch');
const add = {
    name: "add",
    description: "adds a dataset",
    usage: "add <message>",
    async procedure(client, message, args) {
        if (args.length === 3) {
            let base64 = fs.readFileSync(args[2]).toString("base64");
            let zipFile = new FormData();
            zipFile.append('file', base64);
            fetch("http://localhost:4321/dataset/".concat(args[0], "/", args[1]), {
                method: "POST",
                body: zipFile
            }).then(message.channel.send("added dataset".concat(args[0])));
        }
        else if (args.length < 3) {
            console.log("Please enter an id, kind, and zip file path");
        }
        else {
            console.log("Too many arguments");
        }
    },
};
exports.default = add;
