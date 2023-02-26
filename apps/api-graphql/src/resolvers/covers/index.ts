import { getCoverById, getCoversById } from "@partiaf/business-logic"

interface Uuid {
    uuid: string;
} 

export default {
    Query: {
        async getCoversById(_:any, {uuid}:Uuid, context:any){
            const covers = await getCoversById(uuid);
            return covers;
        }
    }
}