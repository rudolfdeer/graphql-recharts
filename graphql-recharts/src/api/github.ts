import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GET_USER_QUERY } from './queries';

const TOKEN = process.env.REACT_APP_TOKEN;
const GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `bearer ${TOKEN}` : null,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: GRAPHQL_ENDPOINT })),
  cache: new InMemoryCache(),
});

export const CONTRIBUTIONS = gql`
  query User($nickname: String!) {
    ${GET_USER_QUERY}
  }
`;
