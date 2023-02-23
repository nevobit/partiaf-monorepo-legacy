import { createGoer, getAllStores, getGoersByUser, getStoreById } from "@partiaf/business-logic"

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
     
    },

    Mutation: {
        async createGoer(_:any, {data}:any, context:any){
            const goer = await createGoer(data);
            return goer;
        }
    }
}