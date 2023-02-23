import { gql } from "@apollo/client";

export const GET_COVERS = gql `
query Query($uuid: String) {
    getCoversById(uuid: $uuid) {
      date
      description
      name
      hour
      phone
      photo
      type
      uuid
      status
    }
  }
`