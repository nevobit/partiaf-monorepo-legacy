import { Collection, getModel } from "@partiaf/constant-definitions";
import { StoreSchemaMongo, Waiter, WaiterSchemaMongo } from "@partiaf/types";
import jwt from 'jsonwebtoken';

type PartialWaiter = Partial<Waiter>
interface WaiterSignin extends PartialWaiter {
    token: string;
}

export const waiterSignin = async ({username, code}: PartialWaiter): Promise<WaiterSignin | Error> => {
    const model = await getModel(Collection.WAITERS, WaiterSchemaMongo);
    const modelStore = await getModel(Collection.STORES, StoreSchemaMongo);
    

    const waiter = await model.findOne({username: username});    

    if(!waiter) {
        return new Error("Colaborador no existe o esta inactivo");
    }
    
    const store = await modelStore.findOne({uuid: waiter.store});

    if(!store) {
        return new Error("Usuario no pertenece a ningun establecimiento");
    }
    
    if(store.employe_code != code ) {
        return new Error("Codigo incorrecto");
    }

    const token = jwt.sign({uuid: waiter.uuid, firstname: waiter.name, username: waiter.username, code: waiter.pin}, process.env.JWT_SECRET_KEY || "", {expiresIn: "24h"});

    return {
        token,
        firstname: waiter.firstname,
        lastname: waiter.lastname,
        uuid: waiter.uuid,
        email: waiter.email,
        username: waiter.username,
        code: waiter.code,
        store: waiter.store
    };
}