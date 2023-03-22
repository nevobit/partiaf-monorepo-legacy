import { PARTIAF_API } from "@/api";
import { PartialCover } from "@partiaf/types";
import { loadingCoversById, setCoversById, setOneCoversById } from "./covers";

export const createCoverThunks = async (info: PartialCover) => {
  const { data } = await PARTIAF_API.post("/covers", { ...info });
  return data;
};

export const getCoverById = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingCoversById());
  const { data } = await PARTIAF_API.get(`/covers/${uuid}`);
  dispatch(setCoversById({ covers: data }));
  return data;
};

export const getOneCoverById = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingCoversById());
  const { data } = await PARTIAF_API.get(`/cover/${uuid}`);
  dispatch(setOneCoversById({ cover: data }));
  return data;
};

export const deleteCoverByIdThunks = (uuid: string) => {
  PARTIAF_API.delete(`/covers/${uuid}`);
  return true;
};

export const updateCoverThunks = async (uuid: string, info: PartialCover) => {
  const { data } = await PARTIAF_API.put(`/covers/${uuid}`, { data: info });
  return data;
};
