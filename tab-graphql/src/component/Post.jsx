"use client"
import { GET_POST } from "@/app/graphql/queries"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { useQuery } from "@apollo/client"

function Post({ id }) {
  const { data, loading, error } = useQuery(GET_POST, {
    variables: {
      where: {
        id,
      },
    },
  })
  console.log("ddd", data)

  if (loading) {
    return null
  }

  return (
    <div>
      <>
        <Card>
          <Card.Img variant='top' src={data.post.coverImage.url} />
          <Card.Body>
            <Card.Text>{data.post.title}</Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Text>{data.post.excerpt}</Card.Text>
          </Card.Body>
          <Card.Img variant='bottom' src='holder.js/100px180' />
        </Card>
      </>
    </div>
  )
}

export default Post
