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

type Reported {
    uuid: String
    store: String
    user: String
    reason: String
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

type Booking {
    uuid: String
    name: String
    chairs: String
    table: String
    tables: String
    date: String
    time: String
    store: String
    user: String
    status: String
}
input BookingInput {
    name: String
    chairs: String
    date: String
    time: String
    consumption: String
    store: String
    user: String
    status: String
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
    biography: String
    photo: String
    status: String
}

input UserInput {
    uuid: String
    firstname: String
    lastname: String
    username: String
    phone: String
    biography: String
    photo: [String]
    pin: String
    status: String
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

type Query {
    getAllStores: [Store]
    allUsers: [AuthPayload]
    userById(uuid: String, username: String): AuthPayload
    getStoreById(uuid: String): Store
    getCoversById(uuid: String): [Cover]
    getMyTikets(uuid: String): [Goer]
    getMyBookings(uuid: String): [Booking]
    getCommentsByStore(uuid: String): [Comment]
}

type Mutation {
    userSignup(firstname:String, lastname:String, phone:String, username:String, password:String): AuthPayload
    userSignin(username: String!, password: String!): AuthPayload    
    resetPassword(phone:String): String
    validationCode(uuid:String, code:String): String
    changePassword(uuid:String, password:String): AuthPayload
    createGoer(data: GoerInput): Goer
    createBooking(data: BookingInput): Booking
    updateGoer(uuid: String, data: GoerInput): Goer
    updateUser(data: UserInput): AuthPayload
    creating: Boolean
    createComment(text: String,
        user: String,
        store: String,
        photo: String): Comment
    createReported(store: String,
            user: String,
            reason: String): Reported
}
`;
exports.default = typeDefs;
