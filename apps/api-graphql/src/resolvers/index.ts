import stores from './stores'
import covers from './covers'
import goers from './goers'
import users from './users'

export default {
    Query: {
        ...stores.Query,
        ...covers.Query,
        ...goers.Query
    },
    Mutation: {
        ...users.Mutation,
        ...goers.Mutation
    }
}