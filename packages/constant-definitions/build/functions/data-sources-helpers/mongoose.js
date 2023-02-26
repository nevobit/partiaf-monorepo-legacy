"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModel = exports.initMongoose = void 0;
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const { MONGO_URL } = process.env;
const initMongoose = async ({ mongoUrl }) => {
    const connection = mongoose_1.default.connection;
    const connectionUrl = MONGO_URL || mongoUrl || '';
    connection.on('error', (error) => {
        console.error(`Error in MMongoose connection: ${JSON.stringify(error)}`);
        throw new Error(error);
    });
    connection.on('connected', () => {
        console.info(`Mongoose: Connected to ${connectionUrl}`);
    });
    connection.on('reconnectFailed', () => {
        console.error('Mongoose: DB Connection Lost, retries failed');
    });
    await mongoose_1.default.connect(connectionUrl, {
        autoIndex: true,
    });
};
exports.initMongoose = initMongoose;
const getModel = (collectionName, schema) => {
    return mongoose_1.default.model(collectionName, schema);
};
exports.getModel = getModel;
//# sourceMappingURL=mongoose.js.map