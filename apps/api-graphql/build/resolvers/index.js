"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stores_1 = __importDefault(require("./stores"));
const goers_1 = __importDefault(require("./goers"));
const users_1 = __importDefault(require("./users"));
exports.default = {
    Query: Object.assign(Object.assign({}, stores_1.default.Query), goers_1.default.Query),
    Mutation: Object.assign(Object.assign({}, users_1.default.Mutation), goers_1.default.Mutation)
};
