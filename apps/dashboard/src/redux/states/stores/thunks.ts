import { PARTIAF_API } from "@/api";
import { loadingStoresById, PartialStore, setStoresById } from "./storesSlice";

export const getStoresById = (uuid: string) => async (dispatch: any) => {
  dispatch(loadingStoresById());
  const { data } = await PARTIAF_API.get(`/stores/${uuid}`);
  dispatch(setStoresById({ stores: data }));
};

export const createStore = async (info: PartialStore) => {
  const { data } = await PARTIAF_API.post("/stores", { ...info });
  return data;
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

export const updateStoreThunks = async (uuid: string | undefined, info: PartialStore) => {
  const { data } = await PARTIAF_API.put(`/stores/${uuid}`, { data: info });
 // localStorage.setItem("store", JSON.stringify(data));
  window.location.reload();
  return data;
};
