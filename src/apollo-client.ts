import {
  ApolloClient,
  InMemoryCache,
  DefaultOptions,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const defaultOptions: DefaultOptions = {
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
};

const httpLink = createHttpLink({
  uri: "https://sushiman-office.cz/graphql",
});

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjQxMzI5NjI5LCJleHAiOjE2NDM5MjE2Mjl9.oebWp8uDoPzNYd_hi1ZdHUvbbgubtDdWvERBaNpXgkg`,
  },
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  credentials: "include",
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
  defaultOptions,
});

export default client;
