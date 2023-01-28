import { Collection, getModel } from "@partiaf/constant-definitions";
import { Goer, GoerSchemaMongo } from "@partiaf/types";

type PartialGoer = Partial<Goer>;

export const updateGoer = async (
  uuid: string,
  data: PartialGoer
): Promise<Goer | Error> => {
  const model = await getModel(Collection.GOERS, GoerSchemaMongo);
  const goer = await model.findOne({ uuid });

  if (!goer) {
    throw new Error("NO SE ENCUENTRA");
  }

  const dataToUpdate = { ...data };

  await goer.updateOne(dataToUpdate);

  return { ...goer.doc };
};
