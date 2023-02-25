import { gql } from "@apollo/client";

export const REGISTER_USER = gql `
mutation Mutation($name: String, $phone: String, $username: String, $password: String) {
  userSignup(name: $name, phone: $phone, username: $username, password: $password) {
    biography
    balance
    email
    error
    firstname
    events
    followers
    following
    gender
    phone
    photo
    lastname
    pin
    token
    username
  }
}
`;

export const LOGIN_USER = gql `
mutation Mutation($username: String!, $password: String!) {
  userSignin(username: $username, password: $password) {
    token
    balance
    uuid
    username
    biography
    email
    events
    firstname
    gender
    lastname
    phone
    photo
  }
}
`

// export const GET_USERS = gql `

// `