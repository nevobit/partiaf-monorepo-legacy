import stores from './stores'
import covers from './covers'
import goers from './goers'
import users from './users'
import comments from './comments'
import bookings from './bookings'
import reporteds from './reporteds'

export default {
    Query: {
        ...users.Query,
        ...stores.Query,
        ...covers.Query,
        ...goers.Query,
        ...comments.Query,
        ...bookings.Query,
    },
    Mutation: {
        ...users.Mutation,
        ...goers.Mutation,
        ...comments.Mutation,
        ...bookings.Mutation,
        ...reporteds.Mutation
    }
}