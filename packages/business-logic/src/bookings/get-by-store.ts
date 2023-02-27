import { Collection, getModel } from "@partiaf/constant-definitions";
import { BookingSchemaMongo } from "@partiaf/types";

export const getBookingsByStore = async (uuid:string): Promise<any> => {
    const model = await getModel(Collection.BOOKINGS, BookingSchemaMongo)

    const bookings = await model.find({store: uuid});
    const newBookings = bookings.reverse();

    return newBookings;
}