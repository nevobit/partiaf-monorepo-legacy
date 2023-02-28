import {
  createBooking,
  getBookingsByUser,
} from "@partiaf/business-logic/build";

interface Uuid {
  uuid: string;
}

export default {
  Query: {
    async getMyBookings(_: any, { uuid }: Uuid, context: any) {
      const tickets = await getBookingsByUser(uuid);
      return tickets;
    },
  },
  Mutation: {
    async createBooking(_: any, { data }: any, context: any) {
      const booking = await createBooking(data);
      return booking;
    },
  },
};
