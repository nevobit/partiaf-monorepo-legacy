import { Collection, getModel } from "@partiaf/constant-definitions";
import { Waiter, WaiterSchemaMongo } from "@partiaf/types";

export const getAllWaiters = async (): Promise<Waiter[]> => {
  const model = getModel(Collection.WAITERS, WaiterSchemaMongo);
  const waiters = (await model.find({})) as Waiter[];
  return waiters;
};
