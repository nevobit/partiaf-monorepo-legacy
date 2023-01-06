import {signinAdmins} from '@partiaf/business-logic'
import { Admin } from '@partiaf/types';
import { RouteOptions } from 'fastify'

export const signinAdminRoute: RouteOptions = {
    method: 'POST',
    url: '/admin-signin',
    handler: async (request, reply) => {
        const {body} = request;
        const {email, password} = body as Admin;
        try{
            const admin = await signinAdmins({email, password});
            reply.status(200).send(admin);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}