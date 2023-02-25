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

type Cover {
    uuid: String
    name: String
    description: String
    date: String
    hour: String
    type: String
    price: String
    phone: String
    limit: Int
    photo: String
    status: String
}

type Goer {
    uuid: String
    user: String
    status: String
    cost: Float
    time: String
    cover: String
    amount: Int
}

input GoerInput {
    uuid: String
    user: String
    status: String
    cost: Float
    time: String
    cover: String
    amount: Int
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
    allUsers: [AuthPayload]
    getStoreById(uuid: String): Store
    getCoversById(uuid: String): [Cover]
    getMyTikets: [Goer]
}

type AuthPayload {
    token: String
    uuid: String
    username: String
    firstname: String
    lastname: String
    email: String
    phone: String
    photo: [String]
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
    createGoer(data: GoerInput): Goer
    updateGoer(uuid: String, data: GoerInput): Goer
    creating: Boolean

}
`;
exports.default = typeDefs;
