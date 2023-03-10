import { Collection, getModel } from "@partiaf/constant-definitions";
import { Waiter, WaiterSchemaMongo } from "@partiaf/types";

type PartialWaiter = Partial<Waiter>;

export const updateWaiter = async ( uuid: string, data: PartialWaiter ): Promise<Waiter | Error> => {
  const model = getModel(Collection.WAITERS, WaiterSchemaMongo);
  const waiter = await model.findOne({ uuid });
  if (!waiter) {
    throw new Error("NO SE ENCUENTRA EL COVER");
  }
  const dataToUpdate = { ...data };
  await waiter.updateOne(dataToUpdate);
  return { ...waiter.doc };
};
