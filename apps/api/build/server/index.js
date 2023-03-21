"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDataSources = void 0;
const tslib_1 = require("tslib");
require('dotenv').config();
const cors_1 = tslib_1.__importDefault(require("@fastify/cors"));
const fastify_1 = tslib_1.__importDefault(require("fastify"));
const routes_1 = require("../routes");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const socket_io_1 = require("socket.io");
const { PORT } = process.env;
const corsOptions = {
    origin: '*',
};
const initDataSources = async ({ mongoose }) => {
    if (mongoose) {
        await (0, constant_definitions_1.initMongoose)(mongoose);
    }
};
exports.initDataSources = initDataSources;
const main = async () => {
    const server = (0, fastify_1.default)({ logger: true });
    server.register(cors_1.default, corsOptions);
    const io = new socket_io_1.Server(server.server);
    io.on('connection', () => {
        server.log.info('Connecting to server');
    });
    await (0, exports.initDataSources)({
        mongoose: {
            mongoUrl: process.env.MONGODB_URL
        }
    });
    server.register((instance, options, next) => {
        (0, routes_1.registerRoutes)(instance);
        next();
    }, { prefix: 'api/v3' });
    await server.listen({ port: Number(PORT), host: '0.0.0.0' }, () => {
        server.log.info(`Backend App is running at http://localhost:${PORT}`);
        server.log.info('Press CTRL-c to stop');
    });
};
void main();
//# sourceMappingURL=index.js.map