import { createReported } from "@partiaf/business-logic";
import { Reported } from "@partiaf/types";

type PartialReported = Partial<Reported>;

export default {
    Mutation: {
        async createReported(_:any, {store, user, reason}:PartialReported, context:any){
            const reported = await createReported({store, user, reason});
            return reported;
        }
    }
}