import {signupAdmins} from '@partiaf/business-logic'
import { Admin } from '@partiaf/types';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify'

export const signupAdminRoute: RouteOptions = {
    method: 'POST',
    url: '/admin-signup',
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            const {body} = request;
            const data = body as Admin;
            const admin = await signupAdmins(data);
            reply.status(200).send(admin);
        }catch(err){
            if(err instanceof Error){
                reply.status(500).send({message: err.message});
            }
        }
    }
}