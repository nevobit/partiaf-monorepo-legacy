import { createBooking } from "@partiaf/business-logic/build";

export default {
    
Mutation: {
     async createBooking(_: any, { data }: any, context: any) {
       const booking = await createBooking(data);
       return booking;
     },
   },
};

