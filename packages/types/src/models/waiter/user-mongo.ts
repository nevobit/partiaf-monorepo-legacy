import { Schema } from "mongoose";
import { Waiter } from "./waiter";

export const WaiterSchemaMongo = new Schema<Waiter>({
    uuid: {type: String},
    firstname: {type: String},
    lastname: {type: String},
    username: {type: String},
    email: {type: String, unique: true},
    code: {type: Number},
    last_login: {type: Date, default: Date.now()},
    admin: {type: String},
})