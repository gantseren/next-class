import React from "react"

const page = ({ params: { code } }) => {
  console.log(code)

  return <div>{code}</div>
}

export default page
