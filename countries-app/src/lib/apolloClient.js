import { ApolloClient, InMemoryCache } from "@apollo/client"
import { cache } from "react"

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
})

export default client
