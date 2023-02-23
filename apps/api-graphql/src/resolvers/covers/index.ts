import { getCoverById, getCoversById } from "@partiaf/business-logic"

interface Uuid {
    uuid: string;
} 

export default {
    Query: {
        async getCoversById(_:any, {uuid}:Uuid, context:any){
            console.log({uuid})
            const covers = await getCoversById(uuid);
            console.log({covers})
            return covers;
        }
    }
}