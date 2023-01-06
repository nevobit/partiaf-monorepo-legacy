import { Schema } from "mongoose";
import { User } from "./user";


export const UserSchemaMongo = new Schema<User>({
    uuid: {type: String},
    firstname: {type: String},
    lastname: {type: String},
    username: {type: String},
    email: {type: String, unique: true},
    type: {type: String},
    verified: {type: Boolean},
    password: {type: String},
    phone: {type: String},
    photo: [{type: String}],
    gender: {type: String},
    biography: {type: String},
    wishlist: [{store: String}],
    followers: [{type: String}],
    following: [{type: String}],
    interests: [{type: String}],
    balance: {type: Number},
    events: {type: Number},
    pin: {type: Number},
})