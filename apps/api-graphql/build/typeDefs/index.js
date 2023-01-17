"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeDefs = `

type Store {
    uuid: String
    name: String
    description: String
    type: String
    phone: String
    photos: [String]
    status: String
}

type User {
    uuid: String
    firstname: String
    lastname: String
    username: String
    phone: String
    photo: String
    status: String
}

type Query {
    getAllStores: [Store]
    getStoreById(uuid: String): Store
}

type AuthPayload {
    token: String
    uuid: String
    username: String
    firstname: String
    lastname: String
    email: String
    phone: String
    photo: String
    gender: String
    biography: String
    followers: [String]
    following: [String]
    events: String
    balance: String
    pin: String
    error: String
}

type Mutation {
    userSignup(name:String, phone:String, username:String, password:String): AuthPayload
    userSignin(username: String!, password: String!): AuthPayload    
    creating: Boolean

}
`;
exports.default = typeDefs;
