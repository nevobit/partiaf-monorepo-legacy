import { gql } from "@apollo/client";

export const REGISTER_USER = gql `
mutation Mutation($firstname: String, $lastname: String, $phone: String, $username: String, $password: String) {
  userSignup(firstname: $firstname, lastname: $lastname, phone: $phone, username: $username, password: $password) {
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
export const GET_USER_BALANCE = gql `
query Query($uuid: String) {
  userById(uuid: $uuid) {
    balance
    biography
    email
    error
    events
    photo
    username
    firstname
    lastname
    followers
    following
    gender
    pin
  }
}
`
export const GET_USERS = gql `
query Query {
  allUsers {
    balance
    biography
    email
    firstname
    gender
    following
    followers
    lastname
    phone
    photo
    pin
    token
    username
    uuid
    events
  }
}
`

export const UPDATE_USER_PIN = gql `
mutation Mutation($data: UserInput) {
  updateUser(data: $data) {
    uuid
    pin
    events
    balance
    phone
  }
}
`

export const RESET_PASSWORD = gql `
mutation Mutation($phone: String) {
  resetPassword(phone: $phone)
}
`
export const GET_USER = gql `
query Query($uuid: String) {
    userById(uuid: $uuid) {
      balance
      biography
      email
      error
      events
      photo
      username
      firstname
      lastname
      followers
      following
      gender
      pin
    }
  }
`