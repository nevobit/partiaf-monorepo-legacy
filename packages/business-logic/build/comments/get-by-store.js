"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommentsByStore = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const getCommentsByStore = async (uuid) => {
    const model = await (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.COMMENTS, types_1.CommentSchemaMongo);
    const comments = await model.find({ store: uuid });
    const newComments = comments.reverse();
    return newComments;
};
exports.getCommentsByStore = getCommentsByStore;
//# sourceMappingURL=get-by-store.js.map