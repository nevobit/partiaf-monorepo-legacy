import { PARTIAF_API } from "@/api";
import { Admin } from "@partiaf/types";
import { setAdminsById } from "./admin";

type PartialAdmin = Partial<Admin>;

export const signupAdmin = async (admin: PartialAdmin) => {
  const { data } = await PARTIAF_API.post("/admin-signup", admin);
  console.log(data);
  if (data) {
    localStorage.setItem("admin", JSON.stringify(data));
  }
  return data;
};

export const signinAdmin = async (email: string, password: string) => {
  const { data } = await PARTIAF_API.post("/admin-signin", {
    email,
    password,
  });
  console.log(data);
  if (data) {
    localStorage.setItem("admin", JSON.stringify(data));
  }
  return data;
};

export const logoutAdmin = () => {
  localStorage.removeItem("admin");
};

export const updateAdminThunks = async (uuid: string, info: PartialAdmin) => {
  const { data } = await PARTIAF_API.put(`/admins/${uuid}`, { data: info });
  if (data) {
    localStorage.setItem("admin", JSON.stringify(data));
    window.location.reload();
  }

  // window.location.href = "/settings";

  return data;
};

export const verificationCodeAdmin = async (code: string) => {
  const { data } = await PARTIAF_API.post("/admin-activate", { code });
  console.log(data);
  if (data) {
    localStorage.setItem("admin", JSON.stringify(data));
  }
  return data;
};

export const verificationEmailThunks = async (email: string) => {
  const { data } = await PARTIAF_API.post("/admin-verification-email", {
    email,
  });
  console.log(data);
  if (data) {
    localStorage.setItem("admin", JSON.stringify(data));
  }
  return data;
};

export const getAdminByIdThunks = (uuid: string) => async (dispatch: any) => {
  const { data } = await PARTIAF_API.get(`/admins/${uuid}`);
  //localStorage.setItem("admin", JSON.stringify(data));
  //dispatch(setAdminsById({ admin: data }));
  //window.location.reload();
  return data;
};
