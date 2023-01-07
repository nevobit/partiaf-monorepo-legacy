"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRoutes = void 0;
const create_1 = require("./create");
const get_by_id_1 = require("./get-by-id");
const get_one_1 = require("./get-one");
const signin_1 = require("./signin");
exports.storeRoutes = [
    create_1.createStoreRoute,
    get_by_id_1.getStoresByIdRoute,
    get_one_1.getStoreByIdRoute,
    signin_1.signinStoreRoute
];
//# sourceMappingURL=index.js.map