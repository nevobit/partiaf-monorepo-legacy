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
const build_1 = require("@partiaf/business-logic/build");
exports.default = {
    Query: {
        allUsers(_, {}, context) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("ENTRO");
                const users = yield (0, business_logic_1.getAllUsers)();
                console.log(users);
                return users;
            });
        },
        userById(_, { uuid, username }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("ENTRO");
                if (!uuid && !username) {
                    return new Error("Debe proporcionar un uuid o un username para buscar un usuario");
                }
                const user = yield (0, business_logic_1.getUserById)(uuid, username);
                if (!user) {
                    return new Error("No se pudo encontrar el usuario con el uuid o username proporcionado");
                }
                return user;
            });
        },
    },
    Mutation: {
        userSignin(_, { username, password }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                const user = yield (0, business_logic_1.userSignin)({ username, password });
                if (user instanceof Error) {
                    return new Error("No se pudo iniciar sesión con el nombre de usuario y la contraseña proporcionados");
                }
                return user;
            });
        },
        userSignup(_, data, context) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield (0, business_logic_1.userSignup)(data);
                    return user;
                }
                catch (error) {
                    return new Error("No se pudo registrar el usuario: " + error.message);
                }
            });
        },
        resetPassword(_, data, context) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield (0, build_1.resetPassword)(data);
                    return user;
                }
                catch (error) {
                    return new Error("Telefono incorrecto: " + error.message);
                }
            });
        },
        validationCode(_, { uuid, code }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield (0, business_logic_1.validationCode)(uuid, code);
                    return user;
                }
                catch (error) {
                    return new Error("Telefono incorrecto: " + error.message);
                }
            });
        },
        changePassword(_, { uuid, paswword }, context) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const user = yield (0, business_logic_1.changePassword)(uuid, paswword);
                    return user;
                }
                catch (error) {
                    return new Error("Telefono incorrecto: " + error.message);
                }
            });
        },
        updateUser(_, data, context) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    console.log(data);
                    const user = yield (0, business_logic_1.updateUser)(data.data.uuid, data.data);
                    return user;
                }
                catch (error) {
                    return new Error("No se pudo registrar el usuario: " + error.message);
                }
            });
        },
    },
};
