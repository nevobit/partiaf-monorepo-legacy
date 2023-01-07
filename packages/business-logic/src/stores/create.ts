import { Collection, getModel } from "@partiaf/constant-definitions";
import { Store, StoreSchemaMongo } from "@partiaf/types";
import bcrypt from "bcrypt";
import { v4 as UUID } from 'uuid';

export const createStore = async (data: Store): Promise<Store | Error> => {
    const model = getModel(Collection.STORES, StoreSchemaMongo);

    const newPassword =  bcrypt.hashSync(data.password, 10);

    const uuid = UUID();

    const result = new model({...data, password: newPassword, uuid});

    if (!result) throw new Error("No se puede crear el negocio");

    const haveEmail = await model.findOne({email: data.email});
    
    if(haveEmail) throw new Error("El correo ya esta en uso");
    
    const haveNit = await model.findOne({nit: data.nit});

    if(haveNit) throw new Error("El nit ya esta registrado");

    await result.save();

    return {...result._doc};
}