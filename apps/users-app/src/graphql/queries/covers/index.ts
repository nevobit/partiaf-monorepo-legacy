import { gql } from "@apollo/client";

export const GET_COVERS = gql `
query GetCoversById($uuid: String) {
  getCoversById(uuid: $uuid) {
    date
    description
    hour
    name
    phone
    image
    price
    limit
    status
    type
    uuid
  }
}
`