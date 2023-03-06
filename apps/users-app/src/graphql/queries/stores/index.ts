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

export const GET_STORE = gql `
query($uuid: String) {
  getStoreById(uuid: $uuid) {
    description
    phone
    name
    photos
    status
    type
    uuid
  }
}


`