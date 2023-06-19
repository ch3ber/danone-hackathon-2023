import { gql } from '@apollo/client'
import { apolloClient } from '@lib/apolloClient'

const PRODUCTS_QUERY = gql`
query {
  productCollection {
    items {
      title
      preview {
        url
      }
      kcal
    }
  }
}
`

export const useProducts = async () => {
  return await apolloClient.query({ query: PRODUCTS_QUERY })
}
