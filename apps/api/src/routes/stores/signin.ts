import {storeSignin} from '@partiaf/business-logic'
import { Store } from '@partiaf/types';
import { RouteOptions } from 'fastify'

export const signinStoreRoute: RouteOptions = {
    method: 'POST',
    url: '/store-signin',
    handler: async (request, reply) => {
        const {body} = request;
        const {uuid, password} = body as Store;
        try{
            const store = await storeSignin(uuid, password);
            reply.status(200).send(store);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}