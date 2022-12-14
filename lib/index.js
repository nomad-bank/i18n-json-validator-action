"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const validators_1 = require("./validators");
const config_1 = require("./config");
const fs_1 = __importDefault(require("fs"));
async function run() {
    try {
        const config = await (0, config_1.getConfig)();
        const file = await fs_1.default.promises.readFile(config.JSON, "utf8");
        try {
            const { isValid, error } = validators_1.Validators.validateJSONFormat(file);
            core.setOutput("isValid", isValid);
            console.log(JSON.stringify(github.context.payload, undefined, 2));
            if (!isValid) {
                core.setOutput("errors", error);
            }
        }
        catch (error) {
            core.setOutput("isValid", false);
            core.setOutput("errors", error);
        }
    }
    catch (error) {
        console.log("error");
        core.setFailed(error);
    }
}
run();
