import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
    uri: "http://localhost:7000/",
})

const client = new ApolloClient({
    // connectToDevTools: true,
    uri: "http://192.168.1.1:7000/",
    cache: new InMemoryCache(),
});

export default client;