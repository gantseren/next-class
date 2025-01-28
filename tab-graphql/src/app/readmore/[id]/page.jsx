import Post from "@/component/Post"
import React from "react"

const page = ({ params: { id } }) => {
  return (
    <div>
      <Post id={id} />
    </div>
  )
}

export default page
