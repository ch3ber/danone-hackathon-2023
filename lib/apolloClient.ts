import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_SERVICE_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
  }
})

export const apolloClient = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache()
})
