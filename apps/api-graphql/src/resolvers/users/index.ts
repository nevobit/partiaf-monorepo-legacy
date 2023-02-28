import {
  changePassword,
  getAllUsers,
  getUserById,
  updateUser,
  userSignin,
  userSignup,
  validationCode,
} from "@partiaf/business-logic";
import {resetPassword} from "@partiaf/business-logic/build"

import { User } from "@partiaf/types";

interface PartialUser extends User {
  name: string;
}
export default {
  Query: {
    async allUsers(_: any, {}, context: any) {
      console.log("ENTRO")
      const users = await getAllUsers();
      console.log(users);
      return users;
    },
    async userById(_: any, { uuid, username }: any, context: any) {
      console.log("ENTRO")
      
      if (!uuid && !username) {
        return new Error(
          "Debe proporcionar un uuid o un username para buscar un usuario"
        );
      }
      const user = await getUserById(uuid, username);
      if (!user) {
        return new Error(
          "No se pudo encontrar el usuario con el uuid o username proporcionado"
        );
      }
      return user;
    },
    
  },
  Mutation: {
    async userSignin(
      _: any,
      { username, password }: PartialUser,
      context: any
    ) {
      const user = await userSignin({ username, password });
      if (user instanceof Error) {
        return new Error(
          "No se pudo iniciar sesión con el nombre de usuario y la contraseña proporcionados"
        );
      }
      return user;
    },
    async userSignup(_: any, data: PartialUser, context: any) {
      try {
        const user = await userSignup(data);
        return user;
      } catch (error: any) {
        return new Error("No se pudo registrar el usuario: " + error.message);
      }
    },
    
    async resetPassword(_: any, data: PartialUser, context: any) {
      try {
        const user = await resetPassword(data);
        return user;
      } catch (error: any) {
        return new Error("Telefono incorrecto: " + error.message);
      }
    },
    
    async validationCode(_: any, {uuid, code}: any, context: any) {
      try {
        const user = await validationCode(uuid, code);
        return user;
      } catch (error: any) {
        return new Error("Telefono incorrecto: " + error.message);
      }
    },
    async changePassword(_: any, {uuid, paswword}: any, context: any) {
      try {
        const user = await changePassword(uuid, paswword);
        return user;
      } catch (error: any) {
        return new Error("Telefono incorrecto: " + error.message);
      }
    },
    async updateUser(_: any, data: any, context: any) {
      try {
        console.log(data)
        const user = await updateUser(data.data.uuid, data.data);
        return user;
      } catch (error: any) {
        return new Error("No se pudo registrar el usuario: " + error.message);
      }
    },
  },
};
