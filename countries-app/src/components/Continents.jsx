"use client"

import { GET_CONTINENTS } from "@/app/graphql/queries"
import { useQuery } from "@apollo/client"
import Link from "next/link"
import React from "react"

const Continents = () => {
  const { data, loading, error } = useQuery(GET_CONTINENTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p> Error: {error.message}</p>

  console.log(data, "continents")
  return (
    <div>
      <div>
        {data.continents.map((continent) => (
          <div key={continent.code}>
            <Link href={`/continents/${continent.code}`}>{continent.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Continents
