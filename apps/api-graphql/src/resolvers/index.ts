import stores from './stores'
import users from './users'

export default {
    Query: {
        ...stores.Query,
    },
    Mutation: {
        ...users.Mutation
    }
}