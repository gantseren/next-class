import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

export default function BlogPosts({ data }) {
  return (
    <>
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
    </>
  )
}
