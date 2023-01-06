import {signupAdmins} from '@partiaf/business-logic'
import { Admin } from '@partiaf/types';
import { RouteOptions } from 'fastify'

export const signupAdminRoute: RouteOptions = {
    method: 'POST',
    url: '/admin-signup',
    handler: async (request, reply) => {
        const {body} = request;
        const data = body as Admin;
        try{
            const admin = await signupAdmins(data);
            reply.status(200).send(admin);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}