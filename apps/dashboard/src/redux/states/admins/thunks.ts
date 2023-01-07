import { PARTIAF_API } from "@/api";
import { Admin } from "@partiaf/types";

type PartialAdmin = Partial<Admin>;

export const signupAdmin = async(admin: PartialAdmin) => {
  const { data } = await PARTIAF_API.post("/admin-signup", admin);
  console.log(data);
  if (data) {
    localStorage.setItem("admin", JSON.stringify(data));
  }
  return data;
};

export const signinAdmin = async (username: string, password: string) => {
  const { data } = await PARTIAF_API.post("/admin-signin", {
    username,
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
