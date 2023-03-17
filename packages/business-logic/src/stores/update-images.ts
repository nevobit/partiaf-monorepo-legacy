import { Collection, getModel } from "@partiaf/constant-definitions";
import { StoreSchemaMongo } from "@partiaf/types";

export const updateStorePhotos = async (
  uuid: string,
  newPhotos: string[]
): Promise<Boolean | Error> => {
  const model = await getModel(Collection.STORES, StoreSchemaMongo);
  const store = await model.findOne({ uuid });
  if (!store) {
    throw new Error("602");
  }
  store.photos = newPhotos;
  await store.save();
  return true;
};
