"use client"

import { useQuery } from "@apollo/client"
import { GET_COUNTRIES_BY_CONTINENT_CODE } from "@/app/graphql/queries"

const Countries = ({ code }) => {
  const { data } = useQuery(GET_COUNTRIES_BY_CONTINENT_CODE, {
    variables: { code },
  })


  return (
    <div>
      {data?.countries.map((country) => (
        <div  key={country.code}>{country.name}</div>
      ))}
    </div>
  )
}

export default Countries
