import { createGoer, getAllStores, getGoersByUser, getStoreById, updateGoer } from "@partiaf/business-logic"

interface Uuid {
    uuid: string;
} 

export default {
    Query: {
        async getMyTikets(_:any, {uuid}:Uuid, context:any){
            const tickets = await getGoersByUser(uuid);
            console.log({tickets})
            return tickets;
        },
        async getStoreById(_:any, {id}:any, context:any){
            const store = await getStoreById(id);
            return store;
        },
        async getAllStores(_:any, args:any, context:any){
            const stores = await getAllStores();
            return stores;
        }
    },

    Mutation: {
        async createGoer(_:any, {data}:any, context:any){
            const goer = await createGoer(data);
            return goer;
        },
        async updateGoer(_:any, {uuid, data}:any, context:any){
            const goer = await updateGoer(uuid, data);
            return goer;
        }
    }
}