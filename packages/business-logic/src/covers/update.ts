import { Collection, getModel } from "@partiaf/constant-definitions";
import { Cover, CoverSchemaMongo } from "@partiaf/types";

type PartialCover = Partial<Cover>;

export const updateCover = async (
  uuid: string,
  data: PartialCover
): Promise<Cover | Error> => {
  const model = await getModel(Collection.COVERS, CoverSchemaMongo);
  console.log("DATA EN BUSSINESSS", data);
  // const { uuid } = data;
  const cover = await model.findOne({ uuid });

  if (!cover) {
    throw new Error("NO SE ENCUENTRA EL COVER");
  }

  const dataToUpdate = { ...data };

  await cover.updateOne(dataToUpdate);

  return { ...cover.doc };
};
