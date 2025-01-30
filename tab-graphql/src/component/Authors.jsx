import { GET_AUTHORS } from "@/app/graphql/queries"
import { useQuery } from "@apollo/client"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export default function Authors() {
  const { data, loading, error } = useQuery(GET_AUTHORS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>
  console.log("authors", data)
  return (
    <div className='m-4'>
      {data.authors.map((author) => (
        <Card key={author.id} style={{ width: "18rem" }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>{author.name}</Card.Title>
            <hr />
            <Card.Text>{author.title}</Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
