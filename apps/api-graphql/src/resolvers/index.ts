import stores from './stores'
import goers from './goers'
import users from './users'

export default {
    Query: {
        ...stores.Query,
        ...goers.Query
    },
    Mutation: {
        ...users.Mutation,
        ...goers.Mutation
    }
}