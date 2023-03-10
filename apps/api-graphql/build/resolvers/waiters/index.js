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
    Query: {},
    Mutation: {
        waiterSignin(_, { username, code }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield (0, business_logic_1.waiterSignin)({ username, code });
                console.log(user);
                if (user instanceof Error) {
                    return new Error("No se pudo iniciar sesión con el nombre de usuario y el codigo proporcionados");
                }
                return user;
            });
        },
    },
};
