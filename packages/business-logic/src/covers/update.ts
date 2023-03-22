import { Collection, getModel } from "@partiaf/constant-definitions";
import { Cover, CoverSchemaMongo, PartialCover } from "@partiaf/types";

export const updateCover = async (
  uuid: string,
  data: PartialCover
): Promise<Cover | Error> => {
  const model = await getModel(Collection.COVERS, CoverSchemaMongo);
  const cover = await model.findOne({ uuid });
  if (!cover) {
    throw new Error("NO SE ENCUENTRA EL COVER");
  }
  const dataToUpdate = { ...data };
  await cover.updateOne(dataToUpdate);
  return { ...cover.doc };
};
