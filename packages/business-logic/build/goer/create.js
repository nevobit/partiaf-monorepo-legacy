"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGoer = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const types_1 = require("@partiaf/types");
const uuid_1 = require("uuid");
const createGoer = async (data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.GOERS, types_1.GoerSchemaMongo);
    const modelStore = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, types_1.StoreSchemaMongo);
    const modelCover = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.COVERS, types_1.CoverSchemaMongo);
    const modelUser = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.USERS, types_1.UserSchemaMongo);
    const uuid = (0, uuid_1.v4)();
    const result = new model({ ...data, uuid });
    const user = await modelUser.findOne({ uuid: data.user });
    const cover = await modelCover.findOne({ uuid: data.cover });
    const store = await modelStore.findOne({ uuid: cover === null || cover === void 0 ? void 0 : cover.store });
    if (!cover)
        return new Error(`No cover found`);
    cover.limit = cover.limit - data.amount;
    if (!user)
        return new Error(`No user found`);
    user.balance = user.balance - data.cost;
    user.events = user.events ? user.events + 1 : 1;
    if (!store)
        return new Error(`No store found`);
    store.balance = store.balance + data.cost;
    if (!result)
        throw new Error('601');
    await user.save();
    await cover.save();
    await store.save();
    await result.save();
    return { ...result._doc };
};
exports.createGoer = createGoer;
//# sourceMappingURL=create.js.map