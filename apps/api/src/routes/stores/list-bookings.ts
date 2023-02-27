import {getBookingsByStore, getStoresById, listBookings} from '@partiaf/business-logic'
import { RouteOptions } from 'fastify'

export const getBookingsByIdRoute: RouteOptions = {
    method: 'GET',
    url: '/bookings/:uuid',
    handler: async (request, reply) => {
        const {params} = request;
        const {uuid} = params as {uuid: string};
        try{
            const bookings = await getBookingsByStore(uuid);
            reply.status(200).send(bookings);
        }catch(err){
            if(err instanceof Error){
                console.log(err)
                reply.status(500).send(err);
            }
        }
    }
}