import {getStoreById} from '@partiaf/business-logic'
import { RouteOptions } from 'fastify'

export const getStoreByIdRoute: RouteOptions = {
    method: 'GET',
    url: '/store/:uuid',
    handler: async (request, reply) => {
        const {params} = request;
        const {uuid} = params as {uuid: string};
        try{
            const store = await getStoreById(uuid);
            reply.status(200).send(store);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}