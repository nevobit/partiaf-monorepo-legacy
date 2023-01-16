import { PARTIAF_API } from "@/api";
import { loadingCoversById, PartialCover, setCoversById } from "./covers";

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

export const deleteCoverByIdThunks = (uuid: string) => {
  PARTIAF_API.delete(`/covers/${uuid}`);
  return true;
};

export const updateCoverThunks =
  (info: PartialCover) => async (dispatch: any) => {
    const { data } = await PARTIAF_API.put(`/covers/${info.uuid}`, { ...info });
    dispatch(setCoversById({ covers: data }));
    return data;
  };
