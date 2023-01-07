"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdminRoute = void 0;
exports.updateAdminRoute = {
    method: 'PUT',
    url: '/admins',
    handler: async (request, reply) => {
        const { body } = request;
        const { uuid } = body;
        // try{
        //     const admin = await updateStore(data);
        //     reply.status(200).send(admin);
        // }catch(err){
        //     if(err instanceof Error){
        //         console.log(err)
        //         reply.status(500).send(err);
        //     }
        // }
    }
};
//# sourceMappingURL=update.js.map