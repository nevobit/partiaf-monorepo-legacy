import { gql } from "@apollo/client";

export const GET_STORES = gql `
query Query {
  getStores {
    uuid
    name
    description
    type
    email
    phone
    photos
    createdAt
  }
}
`