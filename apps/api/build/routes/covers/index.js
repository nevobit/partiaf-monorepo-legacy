"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coverRoutes = void 0;
const create_1 = require("./create");
const delete_1 = require("./delete");
const get_by_id_1 = require("./get-by-id");
const list_1 = require("./list");
const update_1 = require("./update");
exports.coverRoutes = [
    create_1.createCoverRoute,
    list_1.getAllCoversRoute,
    get_by_id_1.getCoversByIdRoute,
    update_1.updateCoverRoute,
    delete_1.deleteCoverByIdRoute,
];
//# sourceMappingURL=index.js.map