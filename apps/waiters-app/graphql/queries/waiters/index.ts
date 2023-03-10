import { gql } from "@apollo/client";

export const SIGNIN = gql `
mutation Mutation($code: String, $username: String) {
  waiterSignin(code: $code, username: $username) {
    code
    email
    firstname
    lastname
    token
    username
    uuid
    store
  }
}
`