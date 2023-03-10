import {
    waiterSignin,
  } from "@partiaf/business-logic";
  
import { Waiter } from "@partiaf/types";
  
type PartialWaiter = Partial<Waiter>;

export default {
    Query: {
    },
    Mutation: {
      async waiterSignin(
        _: any,
        { username, code }: PartialWaiter,
        context: any
      ) {
        const user = await waiterSignin({ username, code });
        console.log(user)
        if (user instanceof Error) {
          return new Error(
            "No se pudo iniciar sesión con el nombre de usuario y el codigo proporcionados"
          );
        }
        return user;
      },
    },
  };
  