import {
  getAllUsers,
  getUserById,
  userSignin,
  userSignup,
} from "@partiaf/business-logic";
import { User } from "@partiaf/types";

interface PartialUser extends User {
  name: string;
}
export default {
  Query: {
    async allUsers(_: any, args: any, context: any) {
      const users = await getAllUsers();
      return users;
    },
    async userById(_: any, { uuid, username }: any, context: any) {
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
  },
};
