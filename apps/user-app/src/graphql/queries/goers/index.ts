import { gql } from "@apollo/client";

export const GET_MY_TICKETS = gql `
query Query($uuid: String) {
  getMyTikets(uuid: $uuid) {
    amount
    cost
    status
    cover
    time
    user
    uuid
    image
    name
    description
    date
  }
}

`


export const CREATE_GOER = gql `
mutation CreateGoer($data: GoerInput) {
    createGoer(data: $data) {
      amount
      cost
      cover
      status
      time
      user
      uuid
      image
      name
      description
      date
    }
  }
`