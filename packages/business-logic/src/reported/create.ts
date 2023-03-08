import { Collection, getModel } from "@partiaf/constant-definitions";
import { ReportedSchemaMongo } from "@partiaf/types";
import { v4 as UUID } from 'uuid';


export const createReported = async (data: any): Promise<any | null> => {
    const model = getModel(Collection.REPORTED, ReportedSchemaMongo);

    const uuid = UUID();

    const result = new model({...data, uuid});
    
    if (!result) throw new Error("No se puede crear el reporte");

    await result.save();

    return result;
}