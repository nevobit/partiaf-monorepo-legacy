"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersByUuid = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getUsersByUuid = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const users = (await model.find({ uuid: uuid }));
    return users;
};
exports.getUsersByUuid = getUsersByUuid;
//# sourceMappingURL=get-by-uuid.js.map