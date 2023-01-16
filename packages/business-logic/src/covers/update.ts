import { Collection, getModel } from "@partiaf/constant-definitions";
import { Cover, CoverSchemaMongo } from "@partiaf/types";

type PartialCover = Partial<Cover>;

export const updateCover = async (
  data: PartialCover
): Promise<Cover | Error> => {
  const model = await getModel(Collection.COVERS, CoverSchemaMongo);
  const { uuid } = data;
  const cover = await model.findOne({ uuid });

  if (!cover) {
    throw new Error("602");
  }

  const dataToUpdate = { ...data };

  await cover.updateOne(dataToUpdate);

  return { ...cover.doc };
};
