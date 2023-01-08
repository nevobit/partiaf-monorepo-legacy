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
    uuid, password,
  });
  console.log(data);
  if (data) {
    localStorage.setItem("store", JSON.stringify(data));
  }
  return data;
};


// export const editBrand = async (
//   uuid: string | undefined,
//   info: PartialBrand
// ) => {
//   const { data } = await rvApi.put(`brands/${uuid}`, { ...info });
//   return data;
// };

// export const deleteBrand = async (uuid: string) => {
//   const { data } = await rvApi.delete(`brands/${uuid}`);
//   return data;
// };