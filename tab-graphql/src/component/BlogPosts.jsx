import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { useQuery } from "@apollo/client"
import { GET_POSTS } from "@/app/graphql/queries"

export default function BlogPosts() {
  const { data, loading, error } = useQuery(GET_POSTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message} </p>

  console.log(data)

  return (
    <div>
      {data.posts.map((post) => (
        <Card key={post.id} style={{ width: "18rem" }}>
          <Card.Img variant='top' src={post.coverImage.url} alt={post.title} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.excerpt}</Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item>Created by: {post.createdBy?.name}</ListGroup.Item>
            <ListGroup.Item>
              Date: {new Date(post.date).toLocaleDateString()}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href={`/readmore/${post.id}`}>Read more</Card.Link>
            <Card.Link href='#'>Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
