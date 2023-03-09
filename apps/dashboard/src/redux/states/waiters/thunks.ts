import { PARTIAF_API } from "@/api";
import {
  loadingWaitersById,
  PartialWaiter,
  setOneWaiterById,
  setWaitersById,
} from "./waiters";

export const createWaiterThunk = async (info: PartialWaiter) => {
  const { data } = await PARTIAF_API.post("/waiters", { ...info });
  return data;
};

export const getWaitersByIdThunk = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingWaitersById());
  const { data } = await PARTIAF_API.get(`/waiters/${uuid}`);
  dispatch(setWaitersById({ waiters: data }));
  return data;
};

export const getOneWaiterThunk = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingWaitersById());
  const { data } = await PARTIAF_API.get(`/waiter/${uuid}`);
  dispatch(setOneWaiterById({ waiter: data }));
  return data;
};

export const deleteWaiterThunk = (uuid: string) => {
  PARTIAF_API.delete(`/waiters/${uuid}`);
  return true;
};

export const updateWaiterThunk = async (info: PartialWaiter) => {
  const { data } = await PARTIAF_API.put(`/waiters/${info.uuid}`, {
    data: info,
  });
  return data;
};
