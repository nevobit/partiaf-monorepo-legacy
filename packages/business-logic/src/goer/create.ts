import { Collection, getModel } from "@partiaf/constant-definitions";
import { Goer, GoerSchemaMongo } from "@partiaf/types";
import { v4 as UUID } from 'uuid';

export const createGoer = async (data: Goer): Promise<Goer | Error> => {
    const model = getModel(Collection.GOERS, GoerSchemaMongo);
    const uuid = UUID();

    const result = new model({...data, uuid});

    if (!result) throw new Error('601');

    await result.save();

    return {...result._doc};
}