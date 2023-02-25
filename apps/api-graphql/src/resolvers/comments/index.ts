import { createComment, getCommentsByStore } from "@partiaf/business-logic";

type Uuid ={
    uuid: string
}

type Comment ={
    text: string,
    user: string,
    store: string,
    photo: string
}

export default {
    Query: {
        async getCommentsByStore(_:any, {uuid}:Uuid, context:any){
            try{
                const comments = await getCommentsByStore(uuid);
                return comments;                
            }catch(e){
                console.log(e)
            }
        } 
    },
    
    Mutation: {
        async createComment(_:any, {text, user, photo, store}:Comment, context:any){
            console.log({text, user, photo, store})
            const comment = await createComment({text, user, photo, store});
            return comment;
        }
    }
}