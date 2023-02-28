"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stores_1 = __importDefault(require("./stores"));
const covers_1 = __importDefault(require("./covers"));
const goers_1 = __importDefault(require("./goers"));
const users_1 = __importDefault(require("./users"));
const comments_1 = __importDefault(require("./comments"));
const bookings_1 = __importDefault(require("./bookings"));
exports.default = {
    Query: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, users_1.default.Query), stores_1.default.Query), covers_1.default.Query), goers_1.default.Query), comments_1.default.Query), bookings_1.default.Query),
    Mutation: Object.assign(Object.assign(Object.assign(Object.assign({}, users_1.default.Mutation), goers_1.default.Mutation), comments_1.default.Mutation), bookings_1.default.Mutation)
};
