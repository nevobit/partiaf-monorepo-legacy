import { gql } from "@apollo/client";

export const GET_COMMENTS = gql `
query Query($uuid: String) {
    getCommentsByStore(uuid: $uuid) {
      photo
      store
      text
      user
      uuid
      createdAt
    }
  }
`

export const CREATE_COMMENT = gql `
mutation Mutation($text: String, $user: String, $store: String, $photo: String) {
  createComment(text: $text, user: $user, store: $store, photo: $photo) {
    photo
    store
    text
    user
  }
}
`