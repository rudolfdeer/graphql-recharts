import { ApolloClient, InMemoryCache, gql, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const TOKEN = process.env.REACT_APP_TOKEN;
const GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

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
    user(login: $nickname) {
      id
      login
      name
      email
      avatarUrl
      location
      bio
      createdAt
      contributionsCollection(
        from: "2021-04-28T00:00:00Z"
        to: "2022-04-28T00:00:00Z"
      ) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              weekday
              date
              contributionCount
              color
            }
          }
          months {
            name
            year
            firstDay
            totalWeeks
          }
        }
      }
    }
  }
`;
