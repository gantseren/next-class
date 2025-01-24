import Countries from "@/components/Countries"
import React from "react"

const page = ({ params: { code } }) => {
  return (
    <div>
      <Countries code={code} />
    </div>
  )
}

export default page
