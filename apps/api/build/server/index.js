"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataSources = void 0;
const tslib_1 = require("tslib");
const cors_1 = tslib_1.__importDefault(require("@fastify/cors"));
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const routes_1 = require("../routes");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const dotenv = tslib_1.__importStar(require("dotenv"));
dotenv.config();
const PORT = Number(process.env.PORT) || 5000;
const initDataSources = async ({ mongoose }) => {
    if (mongoose) {
        await (0, constant_definitions_1.initMongoose)(mongoose);
    }
};
exports.initDataSources = initDataSources;
(async () => {
    const server = (0, fastify_1.default)({ logger: true });
    (0, exports.initDataSources)({
        mongoose: {
            mongoUrl: process.env.MONGODB_URL
        }
    });
    server.register(cors_1.default, {
        origin: true
    });
    server.register((instance, options, next) => {
        (0, routes_1.registerRoutes)(instance);
        next();
    }, { prefix: 'api/v3' });
    const serverAddress = await server.listen({ port: PORT, host: '0.0.0.0' }, () => {
        server.log.info(`Backend App is running at http://localhost:${5000}`);
        server.log.info('Press CTRL-c to stop');
    });
    server.log.info(`server succesfully started on: ${serverAddress}`);
})();
//# sourceMappingURL=index.js.map