"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const uuid_1 = require("uuid");
const createComment = async (data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.COMMENTS, types_1.CommentSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const result = new model({ ...data, uuid });
    if (!result)
        throw new Error("No se puede crear el comentario");
    await result.save();
    return result;
};
exports.createComment = createComment;
//# sourceMappingURL=create.js.map