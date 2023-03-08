import { gql } from '@apollo/client';

export const CREATE_REPORTED = gql `
mutation Mutation($store: String, $user: String, $reason: String) {
    createReported(store: $store, user: $user, reason: $reason) {
      reason
      store
      user
      uuid
    }
  }

`