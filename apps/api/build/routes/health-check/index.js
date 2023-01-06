"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckRoute = void 0;
// @ts-ignore
const package_json_1 = require("../../../package.json");
exports.healthCheckRoute = {
    method: 'GET',
    url: '/health-check',
    handler: async () => {
        console.log(JSON.stringify({
            appName: package_json_1.name,
            appVersion: package_json_1.version,
            status: 'ok',
            uptime: process.uptime(),
        }, null, 2));
        return {
            appName: package_json_1.name,
            appVersion: package_json_1.version,
            status: 'ok',
            uptime: process.uptime(),
        };
    },
};
//# sourceMappingURL=index.js.map