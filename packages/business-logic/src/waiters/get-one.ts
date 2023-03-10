import { Collection, getModel } from "@partiaf/constant-definitions";
import { Waiter, WaiterSchemaMongo } from "@partiaf/types";

export const getOneWaiter = async (uuid:string): Promise<Waiter> => {
    const model = getModel(Collection.WAITERS, WaiterSchemaMongo);
    const waiter = await model.findOne({uuid: uuid}) as Waiter;
    return waiter;
}