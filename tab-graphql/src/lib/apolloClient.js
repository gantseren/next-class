import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cm6gb7z2o005g08wczx7h9ft2/master",
  cache: new InMemoryCache(),
})

export default client
