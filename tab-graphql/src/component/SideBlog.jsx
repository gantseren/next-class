import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

export default function SideBlogs({ blogs }) {
  return (
    <>
      {(blogs || []).map((blog, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          <Card.Img variant='top' src='' alt={blog.title} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.excerpt}</Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item>Created by:</ListGroup.Item>
            <ListGroup.Item>
              Date: {new Date(blog.date).toLocaleDateString()}
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href='#'>Read more</Card.Link>
            <Card.Link href='#'>Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
