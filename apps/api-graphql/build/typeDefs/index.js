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

type Comment {
    uuid: String
    text: String
    store: String
    photo: String
    user: String
    createdAt: String
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
    image: String
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
    image: String
    name: String
    description: String
    date: String
}

input GoerInput {
    uuid: String
    user: String
    status: String
    cost: Float
    time: String
    cover: String
    amount: Int
    image: String
    name: String
    description: String
    date: String
}

input CommentInput {
    text: String
    user: String
    store: String
    photo: String
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
    getMyTikets(uuid: String): [Goer]
    getCommentsByStore(uuid: String): [Comment]
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
    createComment(text: String,
        user: String,
        store: String,
        photo: String): Comment
}
`;
exports.default = typeDefs;
