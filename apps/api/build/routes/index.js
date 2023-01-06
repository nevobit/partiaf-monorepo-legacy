"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const health_check_1 = require("./health-check");
const admins_1 = require("./admins");
const routes = [
    health_check_1.healthCheckRoute,
    ...admins_1.adminsRoutes
];
const registerRoutes = (fastify) => {
    fastify.log.warn("Registering routes", routes);
    routes.map((route) => {
        fastify.route(route);
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map