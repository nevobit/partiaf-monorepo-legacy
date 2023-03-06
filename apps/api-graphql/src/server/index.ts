import { initMongoose, InitMongooseOptions } from "@partiaf/constant-definitions";
import { ApolloServer } from "apollo-server";
import typeDefs from '../typeDefs';
import resolvers from '../resolvers';
import dotenv from 'dotenv'

dotenv.config();
const {PORT, MONGODB_URL} = process.env;

export interface InitDataSourcesOptions {
    mongoose: InitMongooseOptions;
}

export const initDataSources = async ( {mongoose}: InitDataSourcesOptions) => {
    if(mongoose){
        await initMongoose (mongoose);
    }
}

const server = new ApolloServer({
    cors: true,
    resolvers,
    typeDefs,
    context: (({req}) => ({req}))
});

server.listen(PORT, async () => {
    await initDataSources({ mongoose: {
        mongoUrl: MONGODB_URL
    }});
    console.log(`Server running at http://localhost:${PORT}`);
});