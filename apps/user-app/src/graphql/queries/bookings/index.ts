import { gql } from "@apollo/client";

export const CREATE_BOOKING = gql `
mutation CreateBooking($data: BookingInput) {
    createBooking(data: $data) {
      chairs
      date
      name
      status
      store
      table
      tables
      user
      time
      uuid
    }
  }
`