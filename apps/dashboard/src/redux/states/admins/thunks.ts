import { PARTIAF_API } from "@/api";

export const signupAdmin = async (
  name: string,
  lastname: string,
  email: string,
  identification_type: string,
  identification: number,
  age: number,
  phone: number,
  birthdate: string,
  gender: string,
  address: string,
  password: string,
  photo: string
) => {
  const { data } = await PARTIAF_API.post("/admin-signup", {
    name,
    lastname,
    email,
    identification_type,
    identification,
    age,
    phone,
    birthdate,
    gender,
    address,
    password,
    photo,
  });
  console.log(data);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
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
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

export const logoutAdmin = () => {
  localStorage.removeItem("user");
};
