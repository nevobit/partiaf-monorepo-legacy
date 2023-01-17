"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const business_logic_1 = require("@partiaf/business-logic");
exports.default = {
    Mutation: {
        userSignin(_, { username, password }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log(username, password);
                const user = yield (0, business_logic_1.userSignin)({ username, password });
                console.log({ user });
                return user;
            });
        },
        userSignup(_, data, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield (0, business_logic_1.userSignup)(data);
                return user;
            });
        }
    }
};
