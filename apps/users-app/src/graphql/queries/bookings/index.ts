import { gql } from "@apollo/client";


export const GET_MY_BOOKINGS = gql `
query Query($uuid: String) {
  getMyBookings(uuid: $uuid) {
    chairs
    name
    date
    status
    store
    table
    tables
    time
    user
    uuid
  }
}
`

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