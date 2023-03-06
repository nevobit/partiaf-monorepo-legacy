import {createStore, createReported} from '@partiaf/business-logic'
import { Store } from '@partiaf/types';
import { RouteOptions } from 'fastify'

export const createStoreRoute: RouteOptions = {
    method: 'POST',
    url: '/stores',
    handler: async (request, reply) => {
        const {body} = request;
        const data = body as Store;
        try{
            const store = await createStore(data);
            reply.status(201).send(store);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}