import { Collection, getModel } from "@partiaf/constant-definitions";
import { StoreSchemaMongo } from "@partiaf/types";

interface dataProps {
  uuid: string;
  url: string;
}

export const deleteImageStore = async (
  data: dataProps
): Promise<Boolean | Error> => {
  console.log("EN LA LOGICA DE NEGOCIOS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", data.url, data.uuid)
  const model = await getModel(Collection.STORES, StoreSchemaMongo);
  const store = await model.findOne({ uuid: data.uuid });
  if (!store) {
    throw new Error("602");
  }
  const index = store.photos.indexOf(data.url);
  if (index >= 0) {
    store.photos.splice(index, 1);
    await store.save();
  }
  return true;
};
