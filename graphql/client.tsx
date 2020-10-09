import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri:
    'https://graphql.contentful.com/content/v1/spaces/[SPACE_ID]?access_token=[ACCESS_TOKEN]',
  cache: new InMemoryCache({ addTypename: false }),
});

export default apolloClient;
