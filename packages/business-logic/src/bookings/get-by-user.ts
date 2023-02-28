import { Collection, getModel } from "@partiaf/constant-definitions";
import { Booking, BookingSchemaMongo, Goer, GoerSchemaMongo } from "@partiaf/types";

export const getBookingsByUser = async (uuid:string): Promise<Booking[]> => {
    const model = await getModel(Collection.BOOKINGS, BookingSchemaMongo)
    const bookings = await model.find({user: uuid}) as Booking[];
    return bookings;
}