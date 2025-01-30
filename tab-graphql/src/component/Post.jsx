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
    <div className='grid grid-cols-2 gap-2 '>
      <Card className='space-y-4'>
        <Card.Img variant='top' src={data.post.coverImage.url} />
        <Card.Body>
          <Card.Text>{data.post.title}</Card.Text>
          <Card.Text>{data.post.content.text}</Card.Text>
          <Button variant='primary'>Primary</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post
