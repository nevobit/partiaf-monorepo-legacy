import stores from './stores'
import covers from './covers'
import goers from './goers'
import users from './users'
import comments from './comments'

export default {
    Query: {
        ...stores.Query,
        ...covers.Query,
        ...goers.Query,
        ...comments.Query
    },
    Mutation: {
        ...users.Mutation,
        ...goers.Mutation,
        ...comments.Mutation
    }
}