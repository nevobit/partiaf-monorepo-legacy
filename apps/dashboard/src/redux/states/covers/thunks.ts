import { PARTIAF_API } from "@/api";
import { Cover } from "@partiaf/types";
import { loadingCoversById, setCoversById } from "./covers";

export type PartialCover = Partial<Cover>;

export const createCover = async (info: PartialCover) => {
  const { data } = await PARTIAF_API.post("/covers", { ...info });
  return data;
};

export const getCoverById = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingCoversById());
  const { data } = await PARTIAF_API.get(`/covers/${uuid}`);
  dispatch(setCoversById({ cover: data }));
};

export const getAllCovers = () => async (dispatch: any) => {
  dispatch(loadingCoversById());
  const { data } = await PARTIAF_API.get(`/covers`);
  dispatch(setCoversById({ covers: data }));
};

export const updateCover = async (uuid: string, info: PartialCover) => {
  const { data } = await PARTIAF_API.put(`/covers/${uuid}`, { ...info });
  return data;
};

export const deleteCover = async (uuid: string) => {
  const { data } = await PARTIAF_API.delete(`covers/${uuid}`);
  return data;
};
