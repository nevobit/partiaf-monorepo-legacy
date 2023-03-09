import { Collection, getModel } from "@partiaf/constant-definitions";
import { WaiterSchemaMongo } from "@partiaf/types";

export const deleteWaiter = async (uuid: String): Promise<Boolean | Error> => {
  const model = getModel(Collection.WAITERS, WaiterSchemaMongo);
  const waiter = await model.findOne({ uuid: uuid });
  if (!waiter) {
    throw new Error("602");
  }
  await waiter.remove();
  return true;
};
