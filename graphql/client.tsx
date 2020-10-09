import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ACCESS_TOKEN, SPACE_ID } from '../config/auth';

const apolloClient = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}?access_token=${ACCESS_TOKEN}`,
  cache: new InMemoryCache({ addTypename: false }),
});

export default apolloClient;
