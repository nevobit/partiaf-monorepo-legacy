import {activeEmail, signupAdmins} from '@partiaf/business-logic'
import { Admin } from '@partiaf/types';
import { RouteOptions } from 'fastify'

export const activateAdminRoute: RouteOptions = {
    method: 'POST',
    url: '/admin-activate',
    handler: async (request, reply) => {
        const {body} = request;
        const {code} = body as {code: string};
        try{
            const admin = await activeEmail(code);
            reply.status(200).send(admin);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}