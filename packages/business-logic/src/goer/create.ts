import { Collection, getModel } from "@partiaf/constant-definitions";
import { CoverSchemaMongo, Goer, GoerSchemaMongo, StoreSchemaMongo, UserSchemaMongo } from "@partiaf/types";
import { v4 as UUID } from 'uuid';

export const createGoer = async (data: Goer): Promise<Goer | Error> => {
    const model = getModel(Collection.GOERS, GoerSchemaMongo);
    const modelStore = getModel(Collection.STORES, StoreSchemaMongo);
    const modelCover = getModel(Collection.GOERS, CoverSchemaMongo);
    const modelUser = getModel(Collection.GOERS, UserSchemaMongo);
    
    const uuid = UUID();

    const result = new model({...data, uuid});
    
    const user = await model.findOne({uuid: data.user});
    const cover = await model.findOne({uuid: data.cover});
    const store = await model.findOne({uuid: cover?.store});
    
    if(!cover) return new Error(`No cover found`);
    cover.limit = cover.limit - data.amount;

    if(!user) return new Error(`No cover found`);
    user.balance = user.balance - data.cost;
    
    if(!store) return new Error(`No cover found`);
    store.balance = store.balance + data.cost;
    
    if (!result) throw new Error('601');

    await result.save();

    return {...result._doc};
}