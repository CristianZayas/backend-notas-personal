"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongodb = () => {
    mongoose_1.default.connect(`${process.env.CONNECTION}`)
        .then(result => console.log(`This run dba in mongodb`))
        .catch(error => console.log(`Sorry but not function server connection whit the dba`));
};
exports.default = mongodb;
