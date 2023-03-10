import { Collection, getModel } from "@partiaf/constant-definitions";
import { Waiter, WaiterSchemaMongo } from "@partiaf/types";

export const getWaitersById = async (uuid: string): Promise<Waiter[]> => {
  const model = getModel(Collection.WAITERS, WaiterSchemaMongo);
  const waiters = (await model.find({ store: uuid })) as Waiter[];
  return waiters;
};
