import { Collection, getModel } from "@partiaf/constant-definitions";
import { Cover, CoverSchemaMongo, StatusType } from "@partiaf/types";
import { v4 as UUID } from "uuid";

export const createCover = async (data: Cover): Promise<Cover | Error> => {
  const model = getModel(Collection.COVERS, CoverSchemaMongo);
  const uuid = UUID();
  const result = new model({ ...data, uuid, status: StatusType.ACTIVE });
  if (!result) throw new Error("601");
  await result.save();
  return { ...result._doc };
};
