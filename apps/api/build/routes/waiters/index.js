"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitersRoutes = void 0;
const create_1 = require("./create");
const delete_1 = require("./delete");
const get_by_id_1 = require("./get-by-id");
const get_one_1 = require("./get-one");
const list_1 = require("./list");
const update_1 = require("./update");
exports.waitersRoutes = [
    create_1.createWaiterRoute,
    list_1.getAllWaitersRoute,
    get_by_id_1.getWaitersByIdRoute,
    get_one_1.getOneWaiterRoute,
    update_1.updateWaiterRoute,
    delete_1.deleteWaiterRoute,
];
//# sourceMappingURL=index.js.map