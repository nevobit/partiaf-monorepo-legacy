import { Collection, getModel } from "@partiaf/constant-definitions";
import { CoverSchemaMongo, Goer, GoerSchemaMongo, StoreSchemaMongo, UserSchemaMongo } from "@partiaf/types";
import { v4 as UUID } from 'uuid';

export const createGoer = async (data: Goer): Promise<Goer | Error> => {
    const model = getModel(Collection.GOERS, GoerSchemaMongo);
    const modelStore = getModel(Collection.STORES, StoreSchemaMongo);
    const modelCover = getModel(Collection.COVERS, CoverSchemaMongo);
    const modelUser = getModel(Collection.USERS, UserSchemaMongo);
    
    const uuid = UUID();

    const result = new model({...data, uuid});
    
    const user = await modelUser.findOne({uuid: data.user});
    const cover = await modelCover.findOne({uuid: data.cover});
    const store = await modelStore.findOne({uuid: cover?.store});
    
    if(!cover) return new Error(`No cover found`);
    cover.limit = cover.limit - data.amount;

    if(!user) return new Error(`No user found`);
    user.balance = user.balance - data.cost;
    user.events = user.events? user.events + 1 : 1;  
    
    if(!store) return new Error(`No store found`);
    store.balance = store.balance + data.cost;
    
    if (!result) throw new Error('601');

    await user.save();
    await cover.save();
    await store.save();
    await result.save();

    return {...result._doc};
}