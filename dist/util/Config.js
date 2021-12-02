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
exports.getConfig = exports.ConfigKey = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const bot_base_1 = require("@ubccpsc310/bot-base");
var ConfigKey;
(function (ConfigKey) {
    ConfigKey["botToken"] = "botToken";
})(ConfigKey = exports.ConfigKey || (exports.ConfigKey = {}));
const config = {
    [ConfigKey.botToken]: process.env.BOT_TOKEN,
};
const getConfig = (key) => {
    if (config[key] !== null && config[key] !== undefined) {
        return config[key];
    }
    else {
        bot_base_1.Log.warn(`Config Key "${key}" was not set, yet accessed.`);
        return null;
    }
};
exports.getConfig = getConfig;
