import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_SERVICE_URL}/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
  headers: {
    Authorization: 'Bearer KYCdTWuVRddXZ2519o1ohKSIbZJFmKDgUaM4iejywHw'
  }
})

export const apolloClient = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache()
})
