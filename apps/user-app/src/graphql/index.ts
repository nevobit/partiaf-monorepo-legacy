import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    // connectToDevTools: true,
    uri: "http://192.168.1.1:7000/",
    cache: new InMemoryCache(),
});

export default client;