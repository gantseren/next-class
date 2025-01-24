import { gql } from "@apollo/client"
export const GET_CONTINENTS = gql`
  query {
    continents {
      name
      code
    }
  }
`
export const GET_COUNTRIES_BY_CONTINENT_CODE = gql`
  query ($code: String!) {
    countries(filter: { continent: { eq: $code } }) {
      name
      code
      capital
      currencies
      emoji
    }
  }
`