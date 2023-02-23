import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // connectToDevTools: true,
  uri: "http://192.168.1.3:4500/",
  cache: new InMemoryCache(),
});

export default client;
