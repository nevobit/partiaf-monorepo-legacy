import { Collection, getModel } from "@partiaf/constant-definitions";
import { Waiter, WaiterSchemaMongo } from "@partiaf/types";
import { v4 as UUID } from "uuid";

export const createWaiter = async (data: Waiter): Promise<Waiter | Error> => {
  const model = getModel(Collection.WAITERS, WaiterSchemaMongo);
  const uuid = UUID();
  const result = new model({ ...data, uuid });
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
