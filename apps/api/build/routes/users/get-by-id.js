"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersRoute = void 0;
exports.getAllUsersRoute = {
    method: "GET",
    url: "/users",
    handler: async (request, reply) => {
        try {
            //    const obj = await getAllUsers();
            //  reply.status(200).send(obj);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    },
};
//# sourceMappingURL=get-by-id.js.map