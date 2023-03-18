"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getUserById = async (uuid, username) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    if (uuid) {
        const user = await model.findOne({ uuid: uuid });
        return user;
    }
    if (username) {
        const user = await model.findOne({ username: username });
        return user;
    }
    return new Error('Not send correct parameter');
};
exports.getUserById = getUserById;
//# sourceMappingURL=get-by-id.js.map