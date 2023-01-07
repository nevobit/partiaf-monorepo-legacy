import { Admin } from "@partiaf/types";
import { RouteOptions } from "fastify";

export const updateAdminRoute: RouteOptions = {
    method: 'PUT',
    url: '/admins',
    handler: async (request, reply) => {
        const {body} = request;
        const {uuid} = body as {uuid: string};
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
}