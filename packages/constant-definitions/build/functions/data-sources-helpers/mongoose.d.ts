import mongoose, { Schema } from "mongoose";
import { Collection } from "./constants";
export interface InitMongooseOptions {
    mongoUrl?: string;
}
export declare const initMongoose: ({ mongoUrl }: InitMongooseOptions) => Promise<void>;
export declare const getModel: (collectionName: Collection, schema: Schema) => mongoose.Model<{
    [x: string]: any;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    [x: string]: any;
}>>;
