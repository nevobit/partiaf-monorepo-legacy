import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // connectToDevTools: true,
  // uri: "http://192.168.1.2:4500/",
  uri: "https://partiaf-api-graphql.xyz/",
  cache: new InMemoryCache(),
});

export default client;
