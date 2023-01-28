import { PARTIAF_API } from "@/api";
import { loadingGoersReducer, PartialGoer, setGoersReducer } from "./goers";

export const getGoersByIdThunks = (uuid:any) => async (dispatch: any) => {
  dispatch(loadingGoersReducer());
  const { data } = await PARTIAF_API.get(`/goers/${uuid}`);
  dispatch(setGoersReducer({ goers: data }));
  return data;
};

export const updateGoerThunks = async (uuid: string, info: PartialGoer) => {
  const { data } = await PARTIAF_API.put(`/goers/${uuid}`, { data: info });
  return data;
};
