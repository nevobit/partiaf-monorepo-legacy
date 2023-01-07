import {getStoresById} from '@partiaf/business-logic'
import { RouteOptions } from 'fastify'

export const getStoresByIdRoute: RouteOptions = {
    method: 'GET',
    url: '/stores/:uuid',
    handler: async (request, reply) => {
        const {params} = request;
        const {uuid} = params as {uuid: string};
        try{
            const stores = await getStoresById(uuid);
            reply.status(200).send(stores);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}