import { gql } from "@apollo/client";

export const GET_STORES = gql `
query {
  getAllStores {
    name
    type
    uuid
    status
    photos
    phone
    description
  }
}

`