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

type Query {
    getAllStores: [Store]
    getStoreById(uuid: String): Store
}

type Mutation {
    creating: Boolean
}
`;
exports.default = typeDefs;
