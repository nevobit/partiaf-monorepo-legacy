import { PARTIAF_API } from "@/api";
import {
  loadingStoresById,
  PartialStore,
  setStoreByAdmin,
  setStoresById,
} from "./storesSlice";

export interface dataProps {
  url: string;
  uuid: string;
}

export const getStoresById = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingStoresById());
  const { data } = await PARTIAF_API.get(`/stores/${uuid}`);
  dispatch(setStoresById({ stores: data }));
};

export const getStoreByAdminThunk =
  (admin_uuid: string) => async (dispatch: any) => {
    dispatch(loadingStoresById());
    const { data } = await PARTIAF_API.get(`/store/${admin_uuid}`);
    console.log(data);
    dispatch(setStoreByAdmin({ store: data }));
  };

export const createStore = async (info: PartialStore) => {
  const { data } = await PARTIAF_API.post("/stores", { ...info });
  localStorage.setItem("store", JSON.stringify(data));
  return data;
};

export const deleteImageStoreThunk = async (info: dataProps) => {
  await PARTIAF_API.delete(`/stores/images/${info.uuid}`, { data: info });
  return true;
};

export const logoutStore = () => {
  localStorage.removeItem("store");
};

export const signinStore = async (uuid: string, password: string) => {
  const { data } = await PARTIAF_API.post("/store-signin", {
    uuid,
    password,
  });
  if (data) {
    localStorage.setItem("store", JSON.stringify(data));
  }
  return data;
};

export const updateStoreThunks = async (
  uuid: string | undefined,
  info: PartialStore
) => {
  const { data } = await PARTIAF_API.put(`/stores/${uuid}`, { data: info });
  // localStorage.setItem("store", JSON.stringify(data));
  // window.location.reload();
  return data;
};
