// imports
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

if (process.env.GRAPHQL_BASE_URL === undefined) {
  throw new Error("GRAPHQL_BASE_URL is undefined");
}

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_BASE_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;